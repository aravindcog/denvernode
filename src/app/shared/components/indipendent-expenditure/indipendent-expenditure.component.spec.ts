import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndipendentExpenditureComponent } from './indipendent-expenditure.component';

describe('IndipendentExpenditureComponent', () => {
  let component: IndipendentExpenditureComponent;
  let fixture: ComponentFixture<IndipendentExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndipendentExpenditureComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndipendentExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
