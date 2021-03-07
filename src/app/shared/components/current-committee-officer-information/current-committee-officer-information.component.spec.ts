import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCommitteeOfficerInformationComponent } from './current-committee-officer-information.component';

describe('CurrentCommitteeOfficerInformationComponent', () => {
  let component: CurrentCommitteeOfficerInformationComponent;
  let fixture: ComponentFixture<CurrentCommitteeOfficerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCommitteeOfficerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCommitteeOfficerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
