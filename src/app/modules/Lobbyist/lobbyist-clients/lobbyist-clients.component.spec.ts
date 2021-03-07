import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyistClientsComponent } from './lobbyist-clients.component';

describe('LobbyistClientsComponent', () => {
  let component: LobbyistClientsComponent;
  let fixture: ComponentFixture<LobbyistClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyistClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyistClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
