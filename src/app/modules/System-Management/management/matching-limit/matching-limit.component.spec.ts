import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingLimitComponent } from './matching-limit.component';

describe('MatchingLimitComponent', () => {
  let component: MatchingLimitComponent;
  let fixture: ComponentFixture<MatchingLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
