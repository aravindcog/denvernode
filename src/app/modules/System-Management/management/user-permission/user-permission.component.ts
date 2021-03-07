import { Component, OnInit } from '@angular/core';
import { CommonMethods } from 'src/app/core';
const lobbyEmployee = [
  { ComponentName: 'Committee Registration', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Report Transactions', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Compaign Finance Report', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Ouality for FFF', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Lobbying Registration', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Monthly lobbbing Report', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Financial Disclosure', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Gift Report', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Ouality for FFF', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Manage Users', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Fines and Fees', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'Messages', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },
  { ComponentName: 'System Management', Candidate: 'cand-icon', Treasurer: 'tres-icon', 
  CommitteeOfficer: 'com-icon',PrimaryLobbyst:'prim-icon',Lobbyist:'lob-icon',Official:'off-icon' },

];

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.scss']
})
export class UserPermissionComponent implements OnInit {
  EmployeeLobby: string[] = ['ComponentName', 'Candidate', 'Treasurer', 'CommitteeOfficer', 
  'PrimaryLobbyst', 'Lobbyist', 'Official'];
  commitLobbyList: ['option 1', 'option 2','option 3'];
  dataSource = lobbyEmployee;
  static_data: any;
  constructor(
    private commonMethods: CommonMethods,

  ) { }

  ngOnInit(): void {
    this.static_data = this.commonMethods.getCurrentLanguage();

  }

}
