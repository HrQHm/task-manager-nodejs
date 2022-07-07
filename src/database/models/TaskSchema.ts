import { Document, Schema, model, connect } from 'mongoose';

interface ITaskSchema extends Document {
  name: String;
  completed: boolean;
};


const taskSchema = new Schema<ITaskSchema>({
  name: {
    type: 'String',
    required: true,
    trim: true,
    maxlength: [35, 'Name can not be more than 35 characters']
  },
  completed: {
    type: 'boolean',
    default: false
  }
});

const Task = model<ITaskSchema>('Task', taskSchema);

export { Task };