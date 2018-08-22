import { Component, OnInit } from '@angular/core';
import { Task } from "../../../../core/models/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  heading: String;
  subHeading: String;
  task: Task[]
  constructor() {

  }

  ngOnInit() {
  }

}


