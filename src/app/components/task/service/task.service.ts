import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import { Task } from '../entity/task';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient, private router:Router) { }

  private urlEndpoint = 'http://localhost:4000/tasks';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});


  getTasks():Observable<Task>{
    return this.http.get<Task>(this.urlEndpoint).pipe(
     
    );
  }






}
