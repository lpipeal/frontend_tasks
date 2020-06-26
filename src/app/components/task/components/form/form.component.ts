import { Component, OnInit } from '@angular/core';
import { Task } from '../../entity/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  task:Task = new Task();
  titulo:string = 'Crear'

  constructor() { }

  ngOnInit(): void {
  

  }


  create(){

  }

  update(){

  }

}
