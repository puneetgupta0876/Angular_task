import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent {
  admissionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.admissionForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      previousSchool: ['', Validators.required],
      previousClass: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      parentMobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      previousGrades: ['', Validators.required],
      favoriteSubject: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.admissionForm.valid) {
      const formData = this.admissionForm.value;
      const existingData: any[] = JSON.parse(
        localStorage.getItem('admissionForms') || '[]'
      );
      existingData.push(formData);
      localStorage.setItem('admissionForms', JSON.stringify(existingData));
      this.router.navigate(['student-list']);
      console.log('Form Submitted', formData);
    } else {
      window.alert('Form is invalid');
      console.log('Form is invalid');
    }
  }
  goToStudentList() {
    this.router.navigate(['student-list']);
  }
}
