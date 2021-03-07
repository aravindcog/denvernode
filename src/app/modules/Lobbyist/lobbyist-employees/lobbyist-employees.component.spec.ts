import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyistEmployeesComponent } from './lobbyist-employees.component';

describe('LobbyistEmployeesComponent', () => {
  let component: LobbyistEmployeesComponent;
  let fixture: ComponentFixture<LobbyistEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyistEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyistEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
