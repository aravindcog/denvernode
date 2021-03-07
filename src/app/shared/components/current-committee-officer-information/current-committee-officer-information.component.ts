import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const detail = [
  {
    firstName: 'Lorem',
    lastName: 'Ipsum',
    OfficerType: 'Mayor',
    isExpanded: false,
    description: 'Test',
    address1: 'Main Street',
    address2: 'Main Street',
    city: 'Tennesse',
    state: 'California',
    zip: '67895',
    email: 'test@gmail.com',
    phone: '9876543210',
  },
  {
    firstName: 'Lorem',
    lastName: 'Ipsum',
    OfficerType: 'Mayor',
    isExpanded: false,
    description: 'Test',
    address1: 'Main Street',
    address2: 'Main Street',
    city: 'Tennesse',
    state: 'California',
    zip: '67895',
    email: 'test@gmail.com',
    phone: '9876543210',
  },
];

@Component({
  selector: 'app-current-committee-officer-information',
  templateUrl: './current-committee-officer-information.component.html',
  styleUrls: ['./current-committee-officer-information.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CurrentCommitteeOfficerInformationComponent implements OnInit {
  isTableExpanded: any;

  constructor() {}

  ngOnInit(): void {}

  committeegrid: string[] = [
    'toggle',
    'firstName',
    'lastName',
    'OfficerType',
    'description',
  ];
  dataSource = detail;

  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });
  }
}
