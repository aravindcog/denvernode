import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import {
  CommonMethods,
  ErrorMessageService,
  MasterDataService,
  MasterUrlService,
  SnackbarService,
} from "src/app/core";
import { DeleteModalComponent } from "src/app/shared/components/delete-modal/delete-modal.component";
import { ClientService } from "src/app/core/api-services/client.service";
@Component({
  selector: "app-contribution-limits",
  templateUrl: "./contribution-limits.component.html",
  styleUrls: ["./contribution-limits.component.scss"],
})
export class ContributionLimitsComponent implements OnInit {
  contribution: FormGroup;
  static_data: any;
  hideRequiredMarker: boolean = true;
  FormEditId: any = 0;
  editGrid: boolean;
  getContributionData: any;
  ContributionId: any;
  getFilerTypeData: any;
  getDonorTypeData: any;
  getOfficeTypeData: any;
  getElectionDate: any;
  donor:any=[{name:'option1',value:'DONOR'},{name:'option2',value:'DONOR'}]
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
    if (this.commonMethods.getIsReloaded() == "false") {
      window.location.reload();
      this.commonMethods.isReloaded("true");
      return;
    }
    this.commonMethods.isReloaded("false");
  }

  ngOnInit(): void {
    this.dataContributionList.data = [];
    this.initCommitteeOfficerForm();
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
    this.getFilerTypeList();
    this.getOfficeTypeList();
    this.getDonorTypeList();
    this.getElection();
    this.getContributionList();
  }

  initCommitteeOfficerForm(data: any = {}) {
    this.contribution = new FormGroup({
      filer_type: new FormControl(data.filerTypeId, []),
      office: new FormControl(data.officeTypeId, []),
      donar_type: new FormControl(data.donorTypeId, []),
      contribution_limit: new FormControl(data.limit, []),
      elect_cycle: new FormControl(data.electionCycleId, []),
    });
  }
  save(){
    if (this.contribution.valid){
    const id = {
      id: this.ContributionId ? this.ContributionId: 0,
      filerTypeId: this.contribution.value.filer_type.filerTypeId,
      filerType:this.contribution.value.filer_type.filerType,
      officeTypeId: this.contribution.value.office.officeTypeId,
      officeType:this.contribution.value.office.officeType,
      donorTypeId: this.contribution.value.donar_type.name,
      donorType:this.contribution.value.donar_type.value,
      limit: this.contribution.value.contribution_limit,
      electionCycleId:this.contribution.value.elect_cycle,
    };
    if ( !this.editGrid){
    this.service
      .postData(this.urlService.createContribution, id)
      .subscribe((res: any) => {
        console.log(res);
        this.getContributionList();
      });
    }else {
      this.service
      .putData(this.urlService.updateContribution, id)
      .subscribe((res: any) => {
        console.log(res);
        this.getContributionList();
        this.editGrid = false;
      });
    }
    }
  }
  getFilerTypeList(){
    this.service
    .getData(this.urlService.getFilerTypeList)
    .subscribe((res: any) => {
      this.getFilerTypeData = res;
      console.log(res);
    });
  }
  getElection(){
    this.service
      .getData(this.urlService.getElectionList)
      .subscribe((res: any) => {
        this.getElectionDate = res
        console.log(res);
      });
  }
  getDonorTypeList(){
    this.service
    .getData(this.urlService.getDonorTypeList)
    .subscribe((res: any) => {
      this.getDonorTypeData = res;
      console.log(res);
    });
  }
  getOfficeTypeList(){
    this.service
    .getData(this.urlService.getOfficeTypeList)
    .subscribe((res: any) => {
      this.getOfficeTypeData = res;
      console.log(res);
    });
  }
  getContributionList(){
    this.service
    .getData(this.urlService.getContribution)
    .subscribe((res: any) => {
      this.getContributionData = res;
      this.dataContributionList.data = [...this.getContributionData];
      console.log(res);
    });
  }
  // STUDENTS_DATA = [
  //   {
  //     id: 1,
  //     filer: "dfdsf",
  //     officer: "dfdsf",
  //     election: "dfdsf",
  //     donor: "dfdsf",
  //     contribution: "dfdsf",
  //   },
  // ];

  dataContributionList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = [
    "filerType",
    "officeTypeId",
    "electionYear",
    "donorTypeId",
    "limit",
    "action",
  ];

  openConfirmationModal(id: any): void {
    if (this.dataContributionList.data.length <= 1)
      return this.snackbar.snackbarError(
        "Minimum one officer is required",
        this.masterDate.centre
      );
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
        .delete(this.urlService.deleteContribution+'?id='+result)
        .subscribe((res: any) => {
          console.log(res);
          this.getContributionList();
        });
      }
    });
  }
  editOfficerForm(data: any) {
    this.editGrid = true;
    this.ContributionId = data.id;
    this.initCommitteeOfficerForm(data);
  }
}
