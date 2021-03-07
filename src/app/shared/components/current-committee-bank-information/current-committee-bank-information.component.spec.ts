import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCommitteeBankInformationComponent } from './current-committee-bank-information.component';

describe('CurrentCommitteeBankInformationComponent', () => {
  let component: CurrentCommitteeBankInformationComponent;
  let fixture: ComponentFixture<CurrentCommitteeBankInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCommitteeBankInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCommitteeBankInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
