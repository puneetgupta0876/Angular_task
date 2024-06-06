import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule } from './student-module-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewStudentDataComponent } from './view-student-data/view-student-data.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [StudentListComponent, StudentFormComponent, ViewStudentDataComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModuleRoutingModule,
  ],
})
export class StudentModuleModule {}
