import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import {
  CommonMethods,
  ErrorMessageService,
  MasterDataService,
  SnackbarService,
} from "src/app/core";
import { DeleteModalComponent } from "src/app/shared/components/delete-modal/delete-modal.component";
@Component({
  selector: "app-matching-limit",
  templateUrl: "./matching-limit.component.html",
  styleUrls: ["./matching-limit.component.scss"],
})
export class MatchingLimitComponent implements OnInit {
  publicfunding: FormGroup;
  static_data: any;
  hideRequiredMarker: boolean = true;
  FormEditId: any = 0;
  constructor(
    private commonMethods: CommonMethods,
    public errorService: ErrorMessageService,
    public snackbar: SnackbarService,
    public dialog: MatDialog,
    public masterDate: MasterDataService
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
    this.dataOfficerList.data = this.STUDENTS_DATA;
    this.initCommitteeOfficerForm();
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
  }

  initCommitteeOfficerForm(data: any = {}) {
    this.publicfunding = new FormGroup({
      election_cycle: new FormControl(data.election_cycle, []),
      start_date: new FormControl(data.start_date, []),
      end_date: new FormControl(data.end_date, []),
      qualifying_offices: new FormControl(data.qualifying_offices, []),
      available: new FormControl(data.available, []),
      ratio: new FormControl(data.ratio, []),
      qualifying_contribution: new FormControl(
        data.qualifying_contribution,
        []
      ),
      number_of_req: new FormControl(data.number_of_req, []),
      contr_limit: new FormControl(data.contr_limit, []),
      contr_amount: new FormControl(data.contr_amount, []),
    });
  }
  STUDENTS_DATA = [
    {
      id: 1,
      qca: "dfdsf",
      No_of_required: "dfdsf",
      participants: "dfdsf",
      contribution_amount: "dfdsf",
      match_ratio: "dfdsf",
      qualifying_period: "dfdsf",
      qualifying_offices: "dfdsf",
      election: "dfdsf",
    },
  ];
  dataOfficerList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = [
    "qca",
    "No_of_required",
    "participants",
    "contribution_amount",
    "match_ratio",
    "qualifying_period",
    "qualifying_offices",
    "election",
    "action"
  ];

  openConfirmationModal(id: any): void {
    if (this.dataOfficerList.data.length <= 1)
      return this.snackbar.snackbarError(
        "Minimum one officer is required",
        this.masterDate.centre
      );
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: "460px",
      height: "350px",
      data: {
        id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result !== "close") {
        const data = this.dataOfficerList.data;
        let findI = data.findIndex((fd: any) => fd.id == result);
        if (findI != -1) {
          data.splice(findI, 1);
        }
        this.dataOfficerList.data = data;
      }
    });
  }
  editOfficerForm(data: any) {
    this.FormEditId = data.id;
    this.initCommitteeOfficerForm(data);
  }
}
