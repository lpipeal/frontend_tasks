import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../entity/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  clientes:string ='hola';

  tasks: Task[]; 

  ngOnInit(): void {

    this.taskService.getTasks().subscribe(
      (taskObservable:any) =>{
       this.tasks=taskObservable as Task[];
       console.log(this.tasks);
      }
    );

  }

  





}
