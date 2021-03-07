import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeManageOfficeComponent } from './committee-manage-office.component';

describe('CommitteeManageOfficeComponent', () => {
  let component: CommitteeManageOfficeComponent;
  let fixture: ComponentFixture<CommitteeManageOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitteeManageOfficeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeManageOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
