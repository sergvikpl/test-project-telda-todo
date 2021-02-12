import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgModule } from '@angular/core'


@Component({
  selector: 'edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.sass']
})
export class EditTaskPageComponent implements OnInit {

  form: FormGroup

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      taskLabel: new FormControl(null, [Validators.required]),
      taskDescription: new FormControl(null)
    })
  }

  onSubmit() {
    this.form.disable()

    const task = {
      id: 42,
      label: this.form.value.taskLabel,
      description: this.form.value.taskDescription,
      dateSince: new Date(),
      done: false
    }
    console.log("SHOW NEW TASK: ", task, this.form);


    this.router.navigate(['tasks']);
  }

}
