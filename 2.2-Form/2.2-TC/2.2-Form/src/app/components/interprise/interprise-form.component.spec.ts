import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpriseComponent } from './interprise-form.component';

describe('EmployeesFormComponent', () => {
  let component: InterpriseComponent;
  let fixture: ComponentFixture<InterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
