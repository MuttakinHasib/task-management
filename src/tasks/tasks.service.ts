import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks.model';
import { CreateTaskDto, GetTasksFilterDto } from './dto';
import { TaskRepository } from './repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilter(filter: GetTasksFilterDto): Task[] {
  //   const { status, search } = filter;
  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }

  //   return tasks;
  // }

  async getTaskById(id: string): Promise<TaskEntity> {
    const found = await this.taskRepository.findOne(id);
    if (!found) throw new NotFoundException(`Task with id ${id} not found`);
    return found;
  }

  // deleteTaskById(id: string): string {
  //   const taskIndex = this.tasks.findIndex((task) => task.id === id);

  //   if (taskIndex === -1) {
  //     throw new NotFoundException(`Task with id ${id} not found`);
  //   }

  //   this.tasks.splice(taskIndex, 1);
  //   return 'Task deleted';
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

  createTask(payload: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.createTask(payload);
  }
}
