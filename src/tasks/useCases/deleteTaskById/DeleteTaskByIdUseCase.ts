import { Task } from "../../../database/models/TaskSchema";
import { Document, Types } from 'mongoose';
import { AppError } from "../../../shared/errors/AppError";

interface ITaskSchema extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  name: String;
  completed: boolean;
};

class DeleteTaskByIdUseCase {
  async execute(id: string): Promise<ITaskSchema | null> {

    const taskExist = await Task.findById(id);

    if (!taskExist) {
      throw new AppError('Task not exist');
    }

    const task = await Task.findByIdAndDelete(id);

    return task;
  };
}

export { DeleteTaskByIdUseCase }