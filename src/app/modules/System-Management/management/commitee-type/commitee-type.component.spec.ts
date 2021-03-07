import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeTypeComponent } from './commitee-type.component';

describe('CommiteeTypeComponent', () => {
  let component: CommiteeTypeComponent;
  let fixture: ComponentFixture<CommiteeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommiteeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
