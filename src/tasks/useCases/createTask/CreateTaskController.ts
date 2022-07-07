import { Request, Response } from 'express';
import { CreateTaskUseCase } from './CreateTaskUseCase';

class CreateTakController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, completed } = request.body;
    const createTaskUseCase = new CreateTaskUseCase;

    try {
      const task = await createTaskUseCase.execute({ name, completed });
      return response.status(201).json(task);
    } catch (error) {
      return response.status(500).json({ msg: error });
    }
  }
};

export { CreateTakController };
