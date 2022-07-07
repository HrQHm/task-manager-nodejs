import "reflect-metadata";
import { Task } from "../../../database/models/TaskSchema";
import { Document, Types } from 'mongoose';
import { AppError } from "../../../shared/errors/AppError";

interface ITaskSchema extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  name: String;
  completed: boolean;
};

interface IRequest {
  id: string;
  name: string;
  completed: boolean;
}

class UpdateTaskByIdUseCase {
  async execute({ id, name, completed }: IRequest): Promise<ITaskSchema | null> {

    const taskExist = await Task.findById(id);

    if (!taskExist) {
      throw new AppError('Task not exist');
    }

    const updatedTask = await Task.findByIdAndUpdate(id, {
      name: name,
      completed: completed
    }, {
      new: true,
      runValidators: true,
    });

    return updatedTask;
  }
}

export { UpdateTaskByIdUseCase };