import { Router } from 'express';
import { CreateTakController } from '../tasks/useCases/createTask/CreateTaskController';
import { DeleteTaskByIdController } from '../tasks/useCases/deleteTaskById/DeleteTaskByIdController';
import { GetAllTasksController } from '../tasks/useCases/getAllTasks/GetAllTasksController';
import { GetTaskByIdController } from '../tasks/useCases/getTaskById/GetTaskByIdController';
import { UpdateTaskByIdController } from '../tasks/useCases/updateTask/UpdateTaskByIdController';

const tasksRouter = Router();
const createTaskController = new CreateTakController();
const getAllTasksController = new GetAllTasksController();
const getTaskByIdController = new GetTaskByIdController();
const deleteTaskByIdController = new DeleteTaskByIdController();
const updateTaskByIdController = new UpdateTaskByIdController();

tasksRouter.post('/', createTaskController.handle);
tasksRouter.get('/', getAllTasksController.handle);
tasksRouter.get('/:id', getTaskByIdController.handle);
tasksRouter.delete('/:id', deleteTaskByIdController.handle);
tasksRouter.patch('/:id', updateTaskByIdController.handle);
export { tasksRouter };
