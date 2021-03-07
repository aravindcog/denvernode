import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteRegistrationSuccessComponent } from './committe-registration-success.component';

describe('CommitteRegistrationSuccessComponent', () => {
  let component: CommitteRegistrationSuccessComponent;
  let fixture: ComponentFixture<CommitteRegistrationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteRegistrationSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteRegistrationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
