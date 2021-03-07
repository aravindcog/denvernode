import { Component, OnInit } from '@angular/core';
import { CommonMethods } from 'src/app/core';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  listItems: any;
  static_data: any;
  
  constructor(
    private commonMethods: CommonMethods,
  ) { }
  candidateLabels = [ {
    displayName: 'Committee Types',
    routerLink: ''
  },
  {
    displayName: 'Offices',
    routerLink: ''
  },
  {
    displayName: 'Ballot Measures',
    routerLink: ''
  },
  {
    displayName: 'Contribution Limit',
    routerLink: ''
  },
  {
    displayName: 'Matching Limits',
    routerLink: ''
  },
  {
    displayName: 'Modify Forms',
    routerLink: ''
  },
  {
    displayName: 'User Permission Types',
    routerLink: ''
  },
    ]
  ngOnInit(): void {
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
    this.listItems = this.candidateLabels
  }

}
