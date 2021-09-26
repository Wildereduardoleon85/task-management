import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetTasksFilterDto } from './dtos/get-task-filter.dot';

@Injectable()
export class TasksService {
  // private tasks: Task[] = [
  //   {
  //     id: '5d6c7576-696b-4dfb-9883-7dab1afc52bf',
  //     description: 'wash the dog and leave it very clean',
  //     title: 'wash the dog',
  //     status: 'IN_PROGRESS',
  //   },
  //   {
  //     id: '215e5a27-0bad-4362-a234-cc7c8e458203',
  //     description: 'play the piano with my doughter',
  //     title: 'play the piano',
  //     status: 'OPEN',
  //   },
  //   {
  //     id: 'ecd16f3b-5b57-4407-92b4-b42667822dba',
  //     description: 'do my math homework',
  //     title: 'do the homework',
  //     status: 'OPEN',
  //   },
  // ];
  //  getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
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
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     description,
  //     title,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // findTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with id: ${id} does not exists`);
  //   }
  //   return found;
  // }
  // deleteTask(id: string): void {
  //   const found = this.findTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.findTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
