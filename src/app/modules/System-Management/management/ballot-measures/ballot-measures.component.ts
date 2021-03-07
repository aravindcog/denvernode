import { Component, ElementRef, OnInit, ViewChild,HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonMethods, ErrorMessageService, MasterDataService, MasterUrlService, SnackbarService } from 'src/app/core';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ClientService } from 'src/app/core/api-services/client.service';
@Component({
  selector: 'app-ballot-measures',
  templateUrl: './ballot-measures.component.html',
  styleUrls: ['./ballot-measures.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BallotMeasuresComponent implements OnInit {
  ballotIssueForm: FormGroup;
  document:any;
  static_data: any;
  hideRequiredMarker: boolean = true;
  getElectionDate: any;
  getBallotIssueList: any;
  editGrid: boolean;
  ballotId: any;
  constructor(
    private commonMethods: CommonMethods,
    public errorService: ErrorMessageService,
    public snackbar: SnackbarService,
    public dialog: MatDialog,
    private service: ClientService,
    public masterDate: MasterDataService,
    private urlService: MasterUrlService,
  ) { 
       //for reload
       if (this.commonMethods.getIsReloaded() == 'false') {
        window.location.reload();
        this.commonMethods.isReloaded('true')
        return;
      }
      this.commonMethods.isReloaded('false')
    this.getElection();
  }

  ngOnInit(): void {
    this.dataBallotList.data = [];
    this.initCommitteeOfficerForm();
    this.getBallotIssue();
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
  }
  getElection(){
    this.service
      .getData(this.urlService.getElectionList)
      .subscribe((res: any) => {
        this.getElectionDate = res
        console.log(res);
      });
  }
  save(){
    if (this.ballotIssueForm.valid){
    const id = {
      ballotId: this.ballotId ? this.ballotId: 0,
      ballotIssueCode: this.ballotIssueForm.value.issueNumber,
      ballotIssue: this.ballotIssueForm.value.issueName,
      electioncycle: this.ballotIssueForm.value.electionCycle,
      description: this.ballotIssueForm.value.description
    };
    if ( !this.editGrid){
    this.service
      .postData(this.urlService.createBallot, id)
      .subscribe((res: any) => {
        console.log(res);
        this.getBallotIssue();
      });
    }else {
      this.service
      .putData(this.urlService.updateBallotIssue, id)
      .subscribe((res: any) => {
        console.log(res);
        this.getBallotIssue();
        this.editGrid = false;
      });
    }
    }
  }
  getBallotIssue(){
    this.service
    .getData(this.urlService.getBallot)
    .subscribe((res: any) => {
      this.getBallotIssueList = res;
      this.dataBallotList.data = [...this.getBallotIssueList];
      console.log(res);
    });
  }
  initCommitteeOfficerForm(data: any = {}) {

    this.ballotIssueForm = new FormGroup({
        issueNumber: new FormControl(data.ballotIssueCode,
        [Validators.minLength(1), Validators.maxLength(120),]),
      issueName: new FormControl(data.ballotIssue || null,
        [Validators.minLength(1), Validators.maxLength(120),]),
        description: new FormControl(data.description|| null,
        []),
      electionCycle: new FormControl(data.electioncycle || null,
        [Validators.maxLength(120),]),
    })

    // this.searchAdvanceSub = this.addCommitteeOfficerForm.get('SearchControl').valueChanges.pipe(debounceTime(500)).subscribe(val => {
      // this.searchAssociatedFacilities(val);
    // });
  }
  dataBallotList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['toggle', 'ballotId', 'ballotIssue', 'electioncycle', 'description', 'edit'];
  openConfirmationModal(id: any): void {
    if (this.dataBallotList.data.length <= 1)
    return this.snackbar.snackbarError('Minimum one officer is required', this.masterDate.centre);
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: "460px",
      // height: "350px",
      data: {
        id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result !== "close") {
        this.service
        .delete(this.urlService.deleteBallotIssue+'?BallotId='+result)
        .subscribe((res: any) => {
          console.log(res);
          this.getBallotIssue();
        });
      }
    });
  }
  editOfficerForm(data: any) {
    this.ballotId = data.ballotId;
    this.editGrid = true
    this.initCommitteeOfficerForm(data)
  }
}
