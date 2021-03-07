import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods, ErrorMessageService, MasterDataService, MasterUrlService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';

@Component({
  selector: 'app-committee-information',
  templateUrl: './committee-information.component.html',
  styleUrls: ['./committee-information.component.scss']
})
export class CommitteeInformationComponent implements OnInit {
  hideRequiredMarker: boolean = true;
  @Input() committeeInformation: any = {committeeInfo:{}};
  @Output() InformationFormValue = new EventEmitter<Object>();
  committeeInformationForm: any;
  static_data: any = {};
  committeeInfoForm:any;
  typeCommittee: any = [];
  ballotIssue: any = [];
  electionDate:any=[];
  position : any =[];
  userType: any = '';

  constructor(
    private commonMethods: CommonMethods,
    public masterDate: MasterDataService,
    private urlService: MasterUrlService,
    public errorService: ErrorMessageService,
    private service: ClientService,
    public router: Router,
    public route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUserDetailQueryparams();
    
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
    // this.InformationForm();
    this.getCommitteeType();
    this.getBallotIssue();
    this.getPosition();
    this.InformationForm(this.committeeInformation.committeeInfo)
  }
  getUserDetailQueryparams(){
    this.route.queryParams.subscribe((params:any) => {
      this.userType = params['userType']; 
   });
  }

  getCommitteType(typeCommittee: any) {
    if (this.userType == 'USER-CAN') {
      return 'COM-CAN';
    } else if (this.userType == 'USER-TSR') {
      return 'COM-IC';
    }
    return typeCommittee;
  }

  checkForUserTypeTSR(){
    return (this.userType == 'USER-TSR')
  }

  checkForUserTypeCAN(){
    return (this.userType == 'USER-CAN')
  }
  
  InformationForm(committeeInfo: any) {
    this.committeeInformationForm = new FormGroup({
      committeeName: new FormControl(committeeInfo.committeeName || null,
        [Validators.pattern(this.masterDate.onlyAlphaNumber),Validators.minLength(1), Validators.maxLength(100), Validators.required]),
      committeeType: new FormControl(this.getCommitteType(committeeInfo.committeType) || null,
      this.checkForUserTypeTSR()?[Validators.required]:[]),
      ballotIssue: new FormControl(committeeInfo.ballotIssueNote || null,
        this.checkForUserTypeTSR()?[Validators.required]:[]),
      electionDate: new FormControl(committeeInfo.electionDateRefId || null,
        [Validators.required]),
      position: new FormControl(committeeInfo.position || null,
        [Validators.required]),
      purpose: new FormControl(committeeInfo.purpose || null,
        [Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    });
  }

  getCommitteeType() {
    this.service.postData(this.urlService.committeeGetList,{"lookUpType": "COM"}).subscribe((res) => {
      this.typeCommittee = res;
      console.log(this.typeCommittee)

    })
  }
  getBallotIssue(){
    this.service.getData(this.urlService.ballotInformation).subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        let {ballotIssue, ballotIssueCode,  electionDate, sequenceNo, electionDateRefId=0}  = res[index];
        this.ballotIssue.push({ballotIssue, ballotIssueCode});
        this.electionDate.push({electionDate, sequenceNo, electionDateRefId})

      }
      console.log(this.ballotIssue);
    })
  }
  getPosition(){
    this.service.postData(this.urlService.lookupGetList,{"lookUpType": "POSITION"}).subscribe((res: any) => {
     for (let index = 0; index < res.length; index++) {
     this.position.push(res[index].lookUpName);

     }
      console.log(this.position);
    })
      }


  validateSubmitContactInfo() {
    if (this.committeeInformationForm.valid) {
       this.committeeInfoForm = this.committeeInformationForm.value;
      // this.InformationFormValue.emit(this.committeeInfoForm.value);
      console.log(JSON.stringify(this.committeeInfoForm));
      this.InformationFormValue.emit(this.committeeInfoForm)
    }
    else {
      this.committeeInformationForm.markAllAsTouched();
    }
  }
  back(){
    this.router.navigate(['/login'])
  }
}
