import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbydashboardComponent } from './lobbydashboard.component';

describe('LobbydashboardComponent', () => {
  let component: LobbydashboardComponent;
  let fixture: ComponentFixture<LobbydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbydashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
