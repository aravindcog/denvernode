import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJoinCommitteeComponent } from './register-join-committee.component';

describe('RegisterJoinCommitteeComponent', () => {
  let component: RegisterJoinCommitteeComponent;
  let fixture: ComponentFixture<RegisterJoinCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterJoinCommitteeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJoinCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
