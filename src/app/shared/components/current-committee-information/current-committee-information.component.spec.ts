import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCommitteeInformationComponent } from './current-committee-information.component';

describe('CurrentCommitteeInformationComponent', () => {
  let component: CurrentCommitteeInformationComponent;
  let fixture: ComponentFixture<CurrentCommitteeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCommitteeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCommitteeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
