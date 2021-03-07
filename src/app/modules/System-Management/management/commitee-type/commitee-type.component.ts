import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonMethods, ErrorMessageService, MasterDataService, SnackbarService } from 'src/app/core';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-commitee-type',
  templateUrl: './commitee-type.component.html',
  styleUrls: ['./commitee-type.component.scss']
})
export class CommiteeTypeComponent implements OnInit {
  commiteeForm:FormGroup;
  static_data: any;
  hideRequiredMarker: boolean = true;
  FormEditId: any = 0;
  constructor(
    private commonMethods: CommonMethods,
    public errorService: ErrorMessageService,
    public snackbar: SnackbarService,
    public dialog: MatDialog,
    public masterDate: MasterDataService,
  ) { 
        //for reload
        if (this.commonMethods.getIsReloaded() == 'false') {
          window.location.reload();
          this.commonMethods.isReloaded('true')
          return;
        }
        this.commonMethods.isReloaded('false')
  }

  ngOnInit(): void {
    this.dataOfficerList.data = this.STUDENTS_DATA;
this.initCommitteeOfficerForm();
this.commonMethods.setCurrentLanguage();
this.static_data = this.commonMethods.getCurrentLanguage();
  }

  initCommitteeOfficerForm(data: any = {}) {

    this.commiteeForm = new FormGroup({
      type: new FormControl(data.type,
        []),
      });
    }
      STUDENTS_DATA = [
        {
          id: 1,
          firstName: "dfdsf",
        },
    
      ];
   dataOfficerList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['Committee', 'action'];

  openConfirmationModal(id: any): void {
    if (this.dataOfficerList.data.length <= 1)
    return this.snackbar.snackbarError('Minimum one officer is required', this.masterDate.centre);
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
          data.splice(findI, 1)
        }
        this.dataOfficerList.data = data;
      }
    });
  }
  editOfficerForm(data: any) {
    this.FormEditId = data.id;
    this.initCommitteeOfficerForm(data)
  }
}
