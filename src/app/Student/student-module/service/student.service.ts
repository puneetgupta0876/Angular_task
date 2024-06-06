import { Injectable } from '@angular/core';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudentData(): Student[] {
    const data = localStorage.getItem('admissionForms');
    return data ? JSON.parse(data) : [];
  }
}
