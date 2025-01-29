import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService:TaskService){}

  ngOnInit():void{
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      console.log(data);
    });
  }

  AddTask(task: Task){
    this.taskService.addTask(task).subscribe(() => {
      this.tasks.push(task);
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() =>
      (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  toggleFinished(task: Task){
    task.finished = !task.finished;
    this.taskService.updateTask(task).subscribe();
  }
}
