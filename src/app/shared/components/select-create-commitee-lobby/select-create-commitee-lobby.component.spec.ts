import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreateCommiteeLobbyComponent } from './select-create-commitee-lobby.component';

describe('SelectCreateCommiteeLobbyComponent', () => {
  let component: SelectCreateCommiteeLobbyComponent;
  let fixture: ComponentFixture<SelectCreateCommiteeLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCreateCommiteeLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCreateCommiteeLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
