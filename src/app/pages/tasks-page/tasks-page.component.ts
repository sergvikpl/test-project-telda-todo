import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.sass']
})
export class TasksPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  }

  testDate = new Date().toLocaleString("ru", this.dateOptions)

  tasks = [
    { id: 1, label: 'Test1', dateSince: this.testDate, done: true },
    { id: 2, label: 'Test2', dateSince: this.testDate, done: false },
    { id: 3, label: 'Test3', dateSince: this.testDate, done: false },
    { id: 4, label: 'Test4', dateSince: this.testDate, done: true },
    { id: 5, label: 'Test5', dateSince: this.testDate, done: false },
    { id: 6, label: 'Test6', dateSince: this.testDate, done: false },
    { id: 7, label: 'Test7', dateSince: this.testDate, done: false },
    { id: 8, label: 'Test8', dateSince: this.testDate, done: false },
    { id: 9, label: 'Test9', dateSince: this.testDate, done: false },
    { id: 10, label: 'Test10', dateSince: this.testDate, done: false },
  ];

  add(newTaskLabel) {
    let newTask = {
      id: this.tasks.length + 1,
      label: newTaskLabel,
      dateSince: new Date().toLocaleString("ru", this.dateOptions),
      done: false
    };
    this.tasks.push(newTask);

    console.log("TASK LIST CHECK ADD: ", this.tasks);

  }

  toggle(task) {
    task.done = !task.done;
  }

  delete(task) {
    this.tasks = this.tasks.filter(_task => _task.id !== task.id);
  }
}
