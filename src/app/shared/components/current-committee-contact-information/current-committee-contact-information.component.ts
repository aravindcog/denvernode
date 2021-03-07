import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonMethods, ErrorMessageService, LocalstorageService, MasterDataService, MasterUrlService, SnackbarService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';

@Component({
  selector: 'app-current-committee-contact-information',
  templateUrl: './current-committee-contact-information.component.html',
  styleUrls: ['./current-committee-contact-information.component.scss']
})
export class CurrentCommitteeContactInformationComponent implements OnInit {

  static_data: any = {};

  constructor( private commonMethods: CommonMethods,
    public masterDate: MasterDataService,
    public errorService: ErrorMessageService,
    private service: ClientService,
    private urlService: MasterUrlService,
    public snackbar: SnackbarService,
    private localStore: LocalstorageService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
  }


}
