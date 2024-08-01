import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components';
  tasks:string[]=['task1','task2','task3']

  deleteTask(task:string){
    this.tasks = this.tasks.filter((t:any)=>t!==task);
  }
}
