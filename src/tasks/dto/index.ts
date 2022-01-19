import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class GetTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
