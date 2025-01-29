import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../Task';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();


  task: string = '';
  category: string = '';
  finished: boolean = false;
  showAddTask: boolean = false;

  modifyView(value: boolean){
    this.showAddTask = value;
  }

  onSubmit(){
    if(!this.task){
      alert("Add at least one Task!");
      return;
    }

    const newTask = {
      task: this.task,
      category: this.category,
      finished: this.finished
    }

    this.onAddTask.emit(newTask);

    this.task = '';
    this.category = '';
    this.finished = false;
  }
}