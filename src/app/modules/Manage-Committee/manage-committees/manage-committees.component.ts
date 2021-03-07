import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CommonMethods, ErrorMessageService, MasterUrlService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';


const detail= [
  {committeeID: 54678, committeeName: 'Lorem Ipsum', status: 'New', treasurer: 'Melly Smith',lastFillingDate: '3/11/19', createdDate:'3/11/20', electionDate:'3/11/20'},
{committeeID: 52231, committeeName: 'Lorem Ipsum', status: 'Active', treasurer: 'Luka Dulan',lastFillingDate: '3/11/19', createdDate:'3/11/20', electionDate:'3/11/20'}
];

@Component({
  selector: 'app-manage-committees',
  templateUrl: './manage-committees.component.html',
  styleUrls: ['./manage-committees.component.scss'],
})
export class ManageCommitteesComponent implements OnInit {
  manageCommitteeForm: FormGroup;
  static_data: any;
  hideRequiredMarker: boolean = true;
  typeCommittee:any;
  userType:any;
  getCommitteeList:any;
  selectCommittee:any;
  officerList:any;

  constructor(
    public errorService: ErrorMessageService,
    private commonMethods: CommonMethods,
    private urlService: MasterUrlService,
    private service: ClientService
  ) {}

  ngOnInit(): void {
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
    this.createManageCommittee();
    this.getCommitteeType();
    this.getCommittee();
    this.getOfficerTypeList();
    this.manageSearchSelect();
  }
  committeegrid: string[] = ['committeeID', 'committeeName', 'status', 'treasurer','lastFillingDate','createdDate','electionDate','view'];
  dataSource = detail;

  searchResult:{
    "name": "tes",
    "type": "",
    "status": "NEW",
    "lastFillingStartDate": null,
    "lastFillingEndDate": null,
    "officeType": "",
    "publicFundStatus": ""
  }

  getOfficerTypeList (){
    this.officerList =[];
    this.service.postData(this.urlService.getOfficerTypeList,{"lookUpType": "OFF"}).subscribe((res: any) => {
      this.officerList = res;
      console.log(res);
    })
  }

  getCommitteeType() {
    this.service.postData(this.urlService.committeeGetList,{"lookUpType": "COM"}).subscribe((res) => {
      this.typeCommittee = res;
      console.log(this.typeCommittee)

    })
  }
  getCommitteType(typeCommittee: any) {
    if (this.userType == 'USER-CAN') {
      return 'COM-CAN';
    } else if (this.userType == 'USER-TSR') {
      return 'COM-IC';
    }
    return typeCommittee;
  }
  getCommittee() {
    const id = {
      searchCommitteeName: this.selectCommittee ? this.selectCommittee : "",
    };
    this.service
      .postData(this.urlService.committeeList, id)
      .subscribe((res: any) => {
        this.getCommitteeList = res;
        console.log(res)
      });
  }
  manageSearchSelect(){

    // let {
    //   searchCommittee,
    //   committeeType,
    //   committeeStatus,
    //   startDate,
    //   endDate,
    //   office,
    //   publicFundingStatus
    // }
  }

  createManageCommittee() {
    this.manageCommitteeForm = new FormGroup({
      searchCommittee: new FormControl('' || null, [Validators.required]),
      committeeType: new FormControl('' || null, [Validators.required]),
      committeeStatus: new FormControl('' || null, [Validators.required]),
      startDate : new FormControl('' || null, [Validators.required]),
      endDate: new FormControl('' || null,[Validators.required]),
      office: new FormControl('' || null, [Validators.required]),
      publicFundingStatus : new FormControl('' || null, [Validators.required])
    });
  }
}
