import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyistRelationshipsComponent } from './lobbyist-relationships.component';

describe('LobbyistRelationshipsComponent', () => {
  let component: LobbyistRelationshipsComponent;
  let fixture: ComponentFixture<LobbyistRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyistRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyistRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
