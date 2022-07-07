import { Task } from "../../../database/models/TaskSchema";
import { Document, Types } from 'mongoose';
import { AppError } from "../../../shared/errors/AppError";

interface ITaskSchema extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  name: String;
  completed: boolean;
};

class GetTaskByIdUseCase {
  async execute(id: string): Promise<ITaskSchema> {
    const task = await Task.findById(id);

    if (!task) {
      throw new AppError('Task not exist');
    }

    return task;
  }
};

export { GetTaskByIdUseCase };