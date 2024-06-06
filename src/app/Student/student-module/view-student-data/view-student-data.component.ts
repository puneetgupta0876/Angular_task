import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-view-student-data',
  templateUrl: './view-student-data.component.html',
  styleUrls: ['./view-student-data.component.scss'],
})
export class ViewStudentDataComponent {
  student: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const studentId = params['studentId'];
      if (studentId !== undefined) {
        this.loadStudentData(+studentId);
      } else {
        alert('Something went wrong');
      }
    });
  }

  loadStudentData(studentId: number): void {
    const students = this.studentService.getStudentData();
    this.student = students.find((student, index) => index === studentId);
    if (!this.student) {
      alert('Student not found');
    }
    console.log(this.student);
  }

  goToStudentListData(): void {
    this.router.navigate(['student-list']);
  }
}
