import { Component, OnInit } from '@angular/core';
import { CommonMethods, ErrorMessageService, MasterUrlService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';

@Component({
  selector: 'app-new-committee-approve-deny',
  templateUrl: './new-committee-approve-deny.component.html',
  styleUrls: ['./new-committee-approve-deny.component.scss']
})
export class NewCommitteeApproveDenyComponent implements OnInit {

  static_data: any;

  constructor( public errorService: ErrorMessageService,
    private commonMethods: CommonMethods,
    private urlService: MasterUrlService,
    private service: ClientService) { }

  ngOnInit(): void {
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();
  }

}
