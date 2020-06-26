import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './components/task/task.component';


const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
