import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { EditTaskPageComponent } from './pages/edit-task-page/edit-task-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksPageComponent, children: [
     { path: 'new', component: EditTaskPageComponent },
     { path: ':id', component: EditTaskPageComponent }
  ] },
  { path: '**', component: TasksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
