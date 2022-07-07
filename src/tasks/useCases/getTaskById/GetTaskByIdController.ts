import { Request, Response } from 'express';
import { GetTaskByIdUseCase } from './GetTaskByIdUseCase';

class GetTaskByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getTaskByIdUseCase = new GetTaskByIdUseCase();

    const task = await getTaskByIdUseCase.execute(id);
    return response.status(201).json(task);
  }
}


export { GetTaskByIdController }