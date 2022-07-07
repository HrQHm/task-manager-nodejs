import { Task } from '../../../database/models/TaskSchema';

interface IRequest {
  name: string;
  completed: boolean;
};

class CreateTaskUseCase {
  async execute({ name, completed }: IRequest): Promise<IRequest> {

    const task = await Task.create({
      name,
      completed
    });

    return task;
  }
};

export { CreateTaskUseCase }