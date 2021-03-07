import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeContactInformationComponent } from './committee-contact-information.component';

describe('CommitteeContactInformationComponent', () => {
  let component: CommitteeContactInformationComponent;
  let fixture: ComponentFixture<CommitteeContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeContactInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
