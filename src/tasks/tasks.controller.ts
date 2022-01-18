import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() payload: CreateTaskDto): Task | any {
    return this.tasksService.createTask(payload);
  }
}
