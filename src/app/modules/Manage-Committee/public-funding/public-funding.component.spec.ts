import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFundingComponent } from './public-funding.component';

describe('PublicFundingComponent', () => {
  let component: PublicFundingComponent;
  let fixture: ComponentFixture<PublicFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
