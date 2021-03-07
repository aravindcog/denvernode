import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCommitteeComponent } from './switch-committee.component';

describe('SwitchCommitteeComponent', () => {
  let component: SwitchCommitteeComponent;
  let fixture: ComponentFixture<SwitchCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
