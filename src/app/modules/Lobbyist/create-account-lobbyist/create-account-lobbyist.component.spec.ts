import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountLobbyistComponent } from './create-account-lobbyist.component';

describe('CreateAccountLobbyistComponent', () => {
  let component: CreateAccountLobbyistComponent;
  let fixture: ComponentFixture<CreateAccountLobbyistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountLobbyistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountLobbyistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
