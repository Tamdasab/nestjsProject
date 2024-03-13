import { Controller, Get, Post, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.taskService.findAllTasks();
  }

  @Post()
  async postTask(task: Task): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Delete(':id')
  async deleteTask(id: number): Promise<any> {
    const deletetask = this.taskService.deleteTaskeById(id);
    if (!deletetask) {
      console.log(deletetask);
    }
  }
}
