import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ViewStudentDataComponent } from './view-student-data/view-student-data.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
  {
    path: 'student-form',
    component: StudentFormComponent,
  },

  {
    path: 'student-list',
    component: StudentListComponent,
  },
  {
    path: 'view-student-data',
    component: ViewStudentDataComponent,
  },
  {
    path: 'view-student-data',
    component: ChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentModuleRoutingModule {}
