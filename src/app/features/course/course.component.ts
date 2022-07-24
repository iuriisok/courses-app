import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/Course';
import { coursesList } from 'src/app/mock-courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  @Input() course!: Course;
  //date: Date = new Date(this.course.creationDate);

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "title";

}
