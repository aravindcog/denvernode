import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonMethods, MasterDataService, MasterUrlService, ErrorMessageService, SnackbarService, LocalstorageService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';

@Component({
  selector: 'app-indipendent-expenditure',
  templateUrl: './indipendent-expenditure.component.html',
  styleUrls: ['./indipendent-expenditure.component.scss']
})
export class IndipendentExpenditureComponent implements OnInit {
  static_data: any = {};
  hideRequiredMarker: boolean = true;
  independentExpenditureForm: FormGroup;
  @Output() IEFormEmit = new EventEmitter<Object>();
  filerTypes: any;
  filerRole: any;

  constructor(
    private commonMethods: CommonMethods,
    public masterDate: MasterDataService,
    private urlService: MasterUrlService,
    public errorService: ErrorMessageService,
    private fb: FormBuilder,
    private service: ClientService,
    public router: Router,
    public snackbar: SnackbarService,
    private localStore: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
    this.independentExpenditureFilerForm();
    this.getFiler();
  }

  independentExpenditureFilerForm() {
    this.independentExpenditureForm = this.fb.group({
      filerType: ["", []],
      occupation: ["", []],
      employer: ["", []],
    });
  }

  getFiler() {
    const user = {
      lookUpType: "FILER-TYPE",
    };
    this.service
      .postData(this.urlService.getList, user)
      .subscribe((res: any) => {
        console.log(res);
        this.filerTypes = res;
        // this.independentExpenditureForm.patchValue({
        //   filerType: this.filerTypes[1].lookUpTypeId})
      });
  }

  changevalue() {
    this.filerRole = this.independentExpenditureForm.value.filerType;
  }

}
