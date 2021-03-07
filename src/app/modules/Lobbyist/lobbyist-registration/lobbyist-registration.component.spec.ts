import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyistRegistrationComponent } from './lobbyist-registration.component';

describe('LobbyistRegistrationComponent', () => {
  let component: LobbyistRegistrationComponent;
  let fixture: ComponentFixture<LobbyistRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyistRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyistRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
