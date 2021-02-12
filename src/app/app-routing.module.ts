import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksPageComponent, children: [] },
  { path: '**', component: TasksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
