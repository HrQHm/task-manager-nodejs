import { Request, Response } from 'express';
import { GetAllTasksUseCase } from './GetAllTasksUseCase';

class GetAllTasksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllTasksUseCase = new GetAllTasksUseCase();
    const tasks = await getAllTasksUseCase.execute();

    return response.status(200).json({ tasks, amount: tasks.length });
  }
}

export { GetAllTasksController }