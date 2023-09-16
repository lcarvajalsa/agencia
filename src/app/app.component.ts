import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agencia-app';
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }
}
