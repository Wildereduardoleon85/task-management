import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository()
export class TasksRepository extends Repository<Task> {}
