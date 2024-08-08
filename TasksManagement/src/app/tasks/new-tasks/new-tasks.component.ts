import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskService = inject(TaskService);

  onAddTask(title: string, description: string) {
    this.taskService.addTask({title,description});
    this.formEl()?.nativeElement.reset();
  }
}
