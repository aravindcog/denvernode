import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCommitteeInfoComponent } from './existing-committee-info.component';

describe('ExistingCommitteeInfoComponent', () => {
  let component: ExistingCommitteeInfoComponent;
  let fixture: ComponentFixture<ExistingCommitteeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingCommitteeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingCommitteeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
