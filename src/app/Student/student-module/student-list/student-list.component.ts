import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students: Student[] = [];
  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudentData();
  }

  loadStudentData(): void {
    this.students = this.studentService.getStudentData();
    console.log(this.students);
  }

  goToStudentForm(): void {
    this.router.navigate(['student-form']);
  }

  viewStudentDetails(index: number) {
    this.router.navigate(['view-student-data'], {
      queryParams: {
        studentId: index,
      },
    });
  }
}
