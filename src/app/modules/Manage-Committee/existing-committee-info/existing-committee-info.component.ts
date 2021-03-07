import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-committee-info',
  templateUrl: './existing-committee-info.component.html',
  styleUrls: ['./existing-committee-info.component.scss']
})
export class ExistingCommitteeInfoComponent implements OnInit {

  candidateLabels = [{
    displayName: 'Transactions',
    routerLink: ''
  },
  {
    displayName: 'Campaign Finance Report',
    routerLink: ''
  },
  {
    displayName: 'Financial Disclosure Statement',
    routerLink: ''
  },
  {
    displayName: 'Search Transactions',
    routerLink: ''
  },
  {
    displayName: 'Search Contacts',
    routerLink: ''
  },
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
