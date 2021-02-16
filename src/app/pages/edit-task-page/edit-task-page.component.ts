import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: string
  isEditMode: boolean
  editedTask: any

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private taskPage: TasksPageComponent,
    private taskManagerService: TaskManagerService
  ) { }

  ngOnInit(): void {
    this.id = this.currentRoute.snapshot.params['id']
    this.isEditMode = !!this.id

    this.editedTask = {
      label: null,
      description: null
    }

    this.form = new FormGroup({
      label: new FormControl(null, [Validators.required]),
      description: new FormControl(null)
    })

    this.taskPage.matDrawerOptions.opened = true;
    //@TODO Плохое ренение, переписать: сохранять ссылку на инстанс mat-drawer в сервис
    //через ссылку в сервисе вызывать .toogle()

    if (this.isEditMode) {
      this.editedTask = this.taskManagerService.getById(this.id)
      if (this.editedTask) {
        this.form.controls["label"].setValue(this.editedTask.label);
        this.form.controls["description"].setValue(this.editedTask.description);
      } else {
        this.taskPage.matDrawerOptions.opened = false;
        this.router.navigate(['tasks']);
      }
    }
  }

  onSubmit() {
    this.form.disable()
    if (this.isEditMode) {
      this.taskManagerService.save(this.editedTask, this.form.value).then(() => {
        this.taskPage.matDrawerOptions.opened = false;
        this.router.navigate(['tasks']);
      })
    } else {
      this.taskManagerService.add(this.form.value).then(() => {
        this.taskPage.matDrawerOptions.opened = false;
        this.router.navigate(['tasks']);
      })
    }
  }

}
