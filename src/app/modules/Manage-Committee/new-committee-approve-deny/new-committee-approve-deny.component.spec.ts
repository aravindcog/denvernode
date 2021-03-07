import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommitteeApproveDenyComponent } from './new-committee-approve-deny.component';

describe('NewCommitteeApproveDenyComponent', () => {
  let component: NewCommitteeApproveDenyComponent;
  let fixture: ComponentFixture<NewCommitteeApproveDenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommitteeApproveDenyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommitteeApproveDenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
