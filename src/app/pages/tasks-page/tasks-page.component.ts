import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskManagerService } from '../../services/task-manager.service';

@Component({
  selector: 'tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.sass']
})
export class TasksPageComponent implements OnInit {

  constructor(
    private router: Router,
    public taskManagerService: TaskManagerService
  ) { }

  ngOnInit(): void {
  }

  matDrawerOptions = {
    opened: false,
    mode: 'push', //slide, over, push
    position: 'start',
    hasBackdrop: true,
  }

  toggle(task) {
    this.taskManagerService.toggle(task)
  }

  delete(task) {
    this.taskManagerService.delete(task)
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
