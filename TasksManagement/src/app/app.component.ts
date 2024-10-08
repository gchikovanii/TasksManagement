import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TasksComponent]
})
export class AppComponent {
  title = 'TasksManagement';
}
