import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: string[] = ['task1', 'task2', 'task3']

    getAllTasks(){
        return this.tasks 
    }
}
