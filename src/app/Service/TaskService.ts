import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 private myAppURL= Config.taskApiUrl;


  constructor(private http:HttpClient) { }
  
  getListTasks():Observable<Task>{
    return this.http.get<Task>(this.myAppURL+"GetAllTasks");
  }
  getTask(id:number): Observable<Task> {
    return this.http.get<Task>(this.myAppURL+"GetTask/"+id);
  }
  AddTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.myAppURL+"AddTask",task);
  }
  UpdateTask(id:number,task:Task):Observable<Task>{
    return this.http.put<Task>(this.myAppURL+"UpdateTask/"+id,task);
  }
  DeleteTask(id:number,task:Task):Observable<Task>{
    return this.http.delete<Task>(this.myAppURL+"DeleteTask/"+id);
}
}