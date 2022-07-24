import { Component, OnInit } from '@angular/core';
import { coursesList } from 'src/app/mock-courses';
import { Course } from 'src/app/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = coursesList;

  constructor() { }

  ngOnInit(): void {
  }

}
