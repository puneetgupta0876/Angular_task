import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentDataComponent } from './view-student-data.component';

describe('ViewStudentDataComponent', () => {
  let component: ViewStudentDataComponent;
  let fixture: ComponentFixture<ViewStudentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
