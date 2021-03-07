import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatescreenComponent } from './navigatescreen.component';

describe('NavigatescreenComponent', () => {
  let component: NavigatescreenComponent;
  let fixture: ComponentFixture<NavigatescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
