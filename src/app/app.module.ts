import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModuleModule } from './Student/student-module/student-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StudentModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
