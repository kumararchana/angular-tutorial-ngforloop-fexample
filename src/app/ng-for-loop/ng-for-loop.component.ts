import { Component, OnInit } from '@angular/core';
import {Course,courses} from './courses';

@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.css']
})
export class NgForLoopComponent{
  pageTitle = "List of Courses";
  courses = courses;
  course = this.courses[0];
}