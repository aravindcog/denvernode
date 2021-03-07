import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonMethods, MasterDataService, ErrorMessageService, MasterUrlService, SnackbarService, LocalstorageService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';

@Component({
  selector: 'app-current-committee-information',
  templateUrl: './current-committee-information.component.html',
  styleUrls: ['./current-committee-information.component.scss']
})
export class CurrentCommitteeInformationComponent implements OnInit {

  static_data: any = {};
  @Input() committeeInformation: any = {};
  constructor(
    private commonMethods: CommonMethods,
    public masterDate: MasterDataService,
    public errorService: ErrorMessageService,
    private service: ClientService,
    private urlService: MasterUrlService,
    public snackbar: SnackbarService,
    private localStore: LocalstorageService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
  }

}
