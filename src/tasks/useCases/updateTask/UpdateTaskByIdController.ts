import { Request, Response } from 'express';
import { UpdateTaskByIdUseCase } from './UpdateTaskByIdUseCase';

class UpdateTaskByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, completed } = request.body;

    const updatedTaskByIdUseCase = new UpdateTaskByIdUseCase;

    const task = await updatedTaskByIdUseCase.execute({ id, name, completed });
    return response.status(201).send(task);
  }
}

export { UpdateTaskByIdController };