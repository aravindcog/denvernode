import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotMeasuresComponent } from './ballot-measures.component';

describe('BallotMeasuresComponent', () => {
  let component: BallotMeasuresComponent;
  let fixture: ComponentFixture<BallotMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotMeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
