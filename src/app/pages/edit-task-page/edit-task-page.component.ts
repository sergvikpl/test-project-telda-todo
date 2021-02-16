import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgModule } from '@angular/core'
import { TasksPageComponent } from '../tasks-page/tasks-page.component';
import { TaskManagerService } from '../../services/task-manager.service';

@Component({
  selector: 'edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.sass']
})
export class EditTaskPageComponent implements OnInit {

  form: FormGroup

  constructor(
    private router: Router,
    private taskPage: TasksPageComponent,
    private taskManagerService: TaskManagerService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      taskLabel: new FormControl(null, [Validators.required]),
      taskDescription: new FormControl(null)
    })
  }

  ngAfterViewInit() {
    this.taskPage.matDrawerOptions.opened = true;
    //@TODO Плохое ренение, переписать: сохранять ссылку на инстанс mat-drawer в сервис
    //через ссылку в сервисе вызывать .toogle()
  }

  onSubmit() {
    this.form.disable()
    this.taskManagerService.add(this.form)
    this.taskPage.matDrawerOptions.opened = false;
    this.router.navigate(['tasks']);
  }

}
