import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyistSignatureComponent } from './lobbyist-signature.component';

describe('LobbyistSignatureComponent', () => {
  let component: LobbyistSignatureComponent;
  let fixture: ComponentFixture<LobbyistSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyistSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyistSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
