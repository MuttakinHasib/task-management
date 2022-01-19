import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto, GetTasksFilterDto } from './dto';
import { TaskEntity } from './entity';

import { TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body() payload: CreateTaskDto): Promise<TaskEntity> {
    return this.tasksService.createTask(payload);
  }

  // @Get()
  // getTasks(@Query() filter: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filter).length) {
  //     return this.tasksService.getTasksWithFilter(filter);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<TaskEntity> {
    return this.tasksService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): string {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
