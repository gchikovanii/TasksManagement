import { Component } from '@angular/core';
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { TasksListComponent } from "./tasks-list/tasks-list.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [NewTasksComponent, TasksListComponent]
})
export class TasksComponent {

}
