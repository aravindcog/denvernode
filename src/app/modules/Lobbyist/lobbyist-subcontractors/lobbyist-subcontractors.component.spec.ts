import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyistSubcontractorsComponent } from './lobbyist-subcontractors.component';

describe('LobbyistSubcontractorsComponent', () => {
  let component: LobbyistSubcontractorsComponent;
  let fixture: ComponentFixture<LobbyistSubcontractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyistSubcontractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyistSubcontractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
