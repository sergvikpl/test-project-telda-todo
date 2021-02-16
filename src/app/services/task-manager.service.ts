import { Injectable } from '@angular/core';

export interface Task {
  id: any
  label: string
  description: string
  dateSince: any
  done: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor() { }

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
    { id: 6, label: 'Добавить страницы редактирования/создания', description: 'компоненты, роуты, сайдбар', dateSince: this.testDate, done: true },
    { id: 7, label: 'Переписать хранение и обработку списка в сервис', description: '', dateSince: this.testDate, done: true },
    { id: 8, label: 'Реализовать отправку форм создания/редактирования', description: '', dateSince: this.testDate, done: true },
    { id: 9, label: 'Реализовать обратную сортировку по дате добавления', description: '', dateSince: this.testDate, done: false },
    { id: 10, label: 'Исправить баг с геренацией ID', description: 'Брать timestamp', dateSince: this.testDate, done: true },
    { id: 11, label: 'Реализовать сохрание данных в localStorage', description: '', dateSince: this.testDate, done: false },
    { id: 12, label: 'Добавить в хидер меню полной очистки и генерации', description: '', dateSince: this.testDate, done: false },
    { id: 13, label: 'Улучшить читабельность тасков на малых экранах', description: '', dateSince: this.testDate, done: false },
    { id: 14, label: 'Добавить валидацию на формы', description: '', dateSince: this.testDate, done: true },
    { id: 15, label: 'Добавить бредкрамбы в шапку сайта', description: '', dateSince: this.testDate, done: false },
    { id: 16, label: 'Написание тестов', description: '', dateSince: this.testDate, done: false },
    { id: 17, label: 'Интегрировать цвета из темы', description: '', dateSince: this.testDate, done: false },
  ];

  getById(id) {
    return this.tasks.find(task => task.id == id)
  }

  add(data) {
    console.log("TASK LIST CHECK ADD: ", data, "list", this.tasks);
    return new Promise((resolve, reject) => {
      const newTask: Task = {
        id: Date.now(),
        label: data.label,
        description: data.description,
        dateSince: new Date(),
        done: false
      }
      this.tasks.unshift(newTask)
      return resolve(newTask)
    })
  }

  save(editedTask, data) {
    return new Promise((resolve, reject) => {
      editedTask.label = data.label
      editedTask.description = data.description
      return resolve(data)
    })
  }

  toggle(task) {
    task.done = !task.done;
  }

  delete(task) {
    this.tasks = this.tasks.filter(_task => _task.id !== task.id);
  }


}
