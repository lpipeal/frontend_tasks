import { Component, OnInit } from '@angular/core';
import { Task } from '../../entity/task';
import { TaskService } from '../../service/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  today: number = Date.now();
  task:Task = new Task();
  titulo:string = 'Crear'

  constructor(private taskService:TaskService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.taskService.getTask(id).subscribe((task)=>this.task=task);
      }
    });
  }

  createTask():void{
      this.taskService.createTask(this.task).subscribe((json)=>{
        this.router.navigate(['/tasks']);
        swal.fire('Tarea Creada',`Tarea ${json.name} ha sido creada`,'success')
      })
      
  }

  updateTask():void{
      this.taskService.updateTask(this.task).subscribe((json)=>{
        this.router.navigate(['/tasks']);
        swal.fire('Tarea Actualizada',`Tarea ${json.name} ha sido actualizada`,'success')
      });
  }

}
