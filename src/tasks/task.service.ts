import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async createTask(Task): Promise<Task> {
    const newTask = this.taskRepository.create({
      title: Task.title,
      description: Task.description,
    });
    return this.taskRepository.save(newTask);
  }

  async deleteTaskeById(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
