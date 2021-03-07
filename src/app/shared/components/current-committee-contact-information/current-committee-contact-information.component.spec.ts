import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCommitteeContactInformationComponent } from './current-committee-contact-information.component';

describe('CurrentCommitteeContactInformationComponent', () => {
  let component: CurrentCommitteeContactInformationComponent;
  let fixture: ComponentFixture<CurrentCommitteeContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCommitteeContactInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCommitteeContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
