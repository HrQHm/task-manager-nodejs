import { Request, Response } from 'express';
import { DeleteTaskByIdUseCase } from './DeleteTaskByIdUseCase';

class DeleteTaskByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteTaskById = new DeleteTaskByIdUseCase();

    const task = await deleteTaskById.execute(id);
    return response.status(201).send(task);
  }
}

export { DeleteTaskByIdController }