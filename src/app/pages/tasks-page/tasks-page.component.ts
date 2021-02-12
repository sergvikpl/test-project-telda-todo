import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.sass']
})
export class TasksPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  matDrawerOptions = {
    opened: false,
    mode: 'slide',
    position: 'start',
    hasBackdrop: true,
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
    { id: 1, label: 'Подключить Angular Material', description: '', dateSince: this.testDate, done: true },
    { id: 2, label: 'Сверстать адаптивный layout', description: 'flex-box', dateSince: this.testDate, done: true },
    { id: 3, label: 'Добавить страницу tasks', description: 'компонент, роуты', dateSince: this.testDate, done: true },
    { id: 4, label: 'Добавить тестовый список задач', description: '', dateSince: this.testDate, done: true },
    { id: 5, label: 'Применить компоненты Angular Material', description: '', dateSince: this.testDate, done: true },
    { id: 6, label: 'Добавить страницы редактирования/создания', description: 'компоненты, роуты, сайдбар', dateSince: this.testDate, done: false },
    { id: 7, label: 'Переписать хранение и обработку списка в сервис', description: '', dateSince: this.testDate, done: false },
    { id: 8, label: 'Реализовать отправку форм создания/редактирования', description: '', dateSince: this.testDate, done: false },
    { id: 9, label: 'Реализовать обратную сортировку по дате добавления', description: '', dateSince: this.testDate, done: false },
    { id: 10, label: 'Исправить баг с геренацией ID', description: '', dateSince: this.testDate, done: false },
    { id: 11, label: 'Реализовать сохрание данных в localStorage', description: '', dateSince: this.testDate, done: false },
    { id: 12, label: 'Добавить в хидер меню полной очистки и генерации', description: '', dateSince: this.testDate, done: false },
    { id: 13, label: 'Улучшить читабельность тасков на малых экранах', description: '', dateSince: this.testDate, done: false },
    { id: 14, label: 'Добавить валидацию на формы', description: '', dateSince: this.testDate, done: false },
    { id: 15, label: 'Добавить бредкрамбы в шапку сайта', description: '', dateSince: this.testDate, done: false },
    { id: 16, label: 'Написание тестов', description: '', dateSince: this.testDate, done: false },
    { id: 16, label: 'Интегрировать цвета из темы', description: '', dateSince: this.testDate, done: false },
  ];

  add(newTaskLabel) {
    let newTask = {
      id: this.tasks.length + 1,
      label: newTaskLabel,
      description: "test description",
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

  goToAddTask() {
    this.router.navigate(['tasks/new']);
  }

  goToEditTask(task) {
    this.router.navigate(['tasks/', task.id]);
  }

  goToTask() {
    this.router.navigate(['tasks']);
  }
}
