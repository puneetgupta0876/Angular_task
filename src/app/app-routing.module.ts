import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-dashboard',
    pathMatch: 'full',
  },

  {
    path: 'student-dashboard',
    loadChildren: () =>
      import('../app/Student/student-module/student-module.module').then(
        (m) => m.StudentModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
