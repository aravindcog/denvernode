import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommitteesComponent } from './manage-committees.component';

describe('ManageCommitteesComponent', () => {
  let component: ManageCommitteesComponent;
  let fixture: ComponentFixture<ManageCommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCommitteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
