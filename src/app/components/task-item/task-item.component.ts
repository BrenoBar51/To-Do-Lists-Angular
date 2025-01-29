import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:Task;
  @Output() OnDeleteTask = new EventEmitter<Task>();
  @Output() onToggleFinished = new EventEmitter<Task>();

  faTimes = faTimes

  onDelete(task: Task){
    this.OnDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleFinished.emit(task);
  }
}
