import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from '../dto';
import { TaskEntity } from '../entity';
import { TaskStatus } from '../tasks.model';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  /**
   * @param  {CreateTaskDto} payload
   * @returns Promise
   */
  async createTask(payload: CreateTaskDto): Promise<TaskEntity> {
    const task = this.create({
      ...payload,
      status: TaskStatus.OPEN,
    });

    await this.save(task);

    return task;
  }
}
