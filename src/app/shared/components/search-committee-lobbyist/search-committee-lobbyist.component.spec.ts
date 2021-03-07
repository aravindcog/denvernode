import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommitteeLobbyistComponent } from './search-committee-lobbyist.component';

describe('SearchCommitteeLobbyistComponent', () => {
  let component: SearchCommitteeLobbyistComponent;
  let fixture: ComponentFixture<SearchCommitteeLobbyistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCommitteeLobbyistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCommitteeLobbyistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
