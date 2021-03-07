import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectListCommitteeLobbyistComponent } from './select-list-committee-lobbyist.component';

describe('SelectListCommitteeLobbyistComponent', () => {
  let component: SelectListCommitteeLobbyistComponent;
  let fixture: ComponentFixture<SelectListCommitteeLobbyistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectListCommitteeLobbyistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectListCommitteeLobbyistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
