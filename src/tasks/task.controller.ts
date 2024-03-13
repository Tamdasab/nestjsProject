import {
  Controller,
  BadRequestException,
  Get,
  Post,
  Delete,
  Body,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    if ((await this.taskService.findAllTasks()).length === 0) {
      throw new Error('No tasks found');
    }
    return this.taskService.findAllTasks();
  }

  @Post()
  async createNote(
    @Body() payload: { title: string; description: string },
  ): Promise<Task> {
    if (!payload.title) {
      throw new BadRequestException('Title is required');
    }
    return await this.taskService.createTask(payload);
  }

  @Delete(':id')
  async deleteTask(id: number): Promise<any> {
    const deletetask = this.taskService.deleteTaskeById(id);
    if (!deletetask) {
      throw new Error('Task not found');
    }
  }
}
