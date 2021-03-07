import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeInformationComponent } from './committee-information.component';

describe('CommitteeInformationComponent', () => {
  let component: CommitteeInformationComponent;
  let fixture: ComponentFixture<CommitteeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
