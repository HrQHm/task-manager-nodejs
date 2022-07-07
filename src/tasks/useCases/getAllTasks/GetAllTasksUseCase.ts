import { Task } from "../../../database/models/TaskSchema"
import { Document } from 'mongoose';

interface ITaskSchema extends Document {
  name: String;
  completed: boolean;
};


class GetAllTasksUseCase {
  async execute(): Promise<ITaskSchema[]> {
    const tasks = await Task.find();

    return tasks;
  }
}

export { GetAllTasksUseCase }