import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonMethods, MasterDataService, ErrorMessageService, MasterUrlService, SnackbarService, LocalstorageService } from 'src/app/core';
import { ClientService } from 'src/app/core/api-services/client.service';

@Component({
  selector: 'app-switch-committee',
  templateUrl: './switch-committee.component.html',
  styleUrls: ['./switch-committee.component.scss']
})
export class SwitchCommitteeComponent implements OnInit {
  hideRequiredMarker: boolean = true;
  userId: any;
  committeeId: any;
  chooseCommitte: any;
  chooseLobbiest: any;
  //Committee 
  getCommitteeList: any;
  getLobbyList: any;
  getIndipendentList: any = [];
  selectedCommLobbList: any = [];


  committeeList: any = [{ committeeId: 1, committeeName: "sample 1" }, { committeeId: 2, committeeName: "sample 2" }, { committeeId: 3, committeeName: "sample 3" }];
  LobbyList: any = [{ lobbyId: 1, lobbyName: "sample 1" }, { lobbyId: 2, lobbyName: "sample 2" }, { lobbyId: 3, lobbyName: "sample 3" }]
  // localStore: any;
  // masterDate: any;
  // commonMethods: any;
  static_data: any;
  switchInformationForm: any;
  committeDetail: any =
    {
      "id": 1,
      "name": "Test Committee 1",
      "type": "COM-IC",
      "candidateName": "John Smith",
      "treasurerName": "John Smith",
      "electionDate": "2021-03-02T00:00:00",
      "publicFundingStatus": null
    };
  committeeLobbyList: any = {
    "committeelist": [
      {
        "committeeID": 1,
        "committeeName": "test"
      }
    ],
    "lobbyistlist": [
      {
        "lobbyistID": 1,
        "lobbyistName": "test"
      }
    ],
    "userType": "candidate"
  };
  showJoinCommittee: boolean = false;
  showJoinIndipendent: boolean = false;
  showJoinLobby: boolean = false;
  showNewIndipendent: boolean = false
  listData: any;
  hideNext: boolean;
  selectCommittee: any;
  role: string;
  note: any = '';

  constructor(
    private commonMethods: CommonMethods,
    public masterDate: MasterDataService,
    public errorService: ErrorMessageService,
    private service: ClientService,
    private urlService: MasterUrlService,
    public snackbar: SnackbarService,
    private localStore: LocalstorageService,
    private fb: FormBuilder,
    public router: Router,
  ) {
    //   this.fN =localStorage.getItem('firstName');
    //   this.lN =localStorage.getItem('lastName');
    //   this.fullName = (this.fN + this.lN).replace(/"/g, " ");
    //   console.log(this.fullName)
  }

  ngOnInit(): void {
    //For testing
    this.chooseCommitte = this.committeeLobbyList.committeelist[0].committeeID;
    this.getInit();
    this.initSwitchForm();
    this.getCommitteeLobbyList();
    this.getCommittee();
    this.getLobby();

  }

  getInit() {
    if (!this.userId)
      this.userId = this.localStore.getLocalStorage(this.masterDate.userId);

    this.userId = parseInt(this.userId);
    this.commonMethods.setCurrentLanguage();
    this.static_data = this.commonMethods.getCurrentLanguage();

  }

  getCommitteeLobbyList() {
    this.service.getData(`${this.urlService.CommitteeLobbyList}${this.userId}`).subscribe((res) => {
      this.committeeLobbyList = res[0];
      if (this.committeeLobbyList && this.committeeLobbyList.committeelist.length) {
        this.chooseCommitte = this.committeeLobbyList.committeelist[0].committeeID;
      } else if (this.committeeLobbyList && this.committeeLobbyList.lobbyistlist.length) {
        this.chooseCommitte = this.committeeLobbyList.lobbyistlist[0].lobbyistID;
      }
    })
  }

  getCommitteeLobbyDetail(id: any, type: any) {
    this.service.getData(`${this.urlService.CommitteeLobbyDetail}${id}&type=${type}`).subscribe((res) => {
      this.committeDetail = res[0];
    })
  }

  initSwitchForm() {
    // this.switchInformationForm = new FormGroup({
    //   committeeId: new FormControl('' || null, []),
    // });
  }

  onChangeCommittee(details: any) {
    this.chooseLobbiest = '';
    this.getCommitteeLobbyDetail(details.id, 'committee');
  }

  onChangeLobby(details: any) {
    this.chooseCommitte = '';
    this.getCommitteeLobbyDetail(details.id, 'Lobbyist');
  }

  viewOther() {

  }

  // New /Join Event
  switchJoinNewEvent(event: any) {
    this.Sendback();
    console.log(event);
    let { type, id } = event;
    if (type == 'new') {
      switch (id) {
        case 1:
          this.router.navigate(['/committee/committee-registration']);
          break;
        case 2:
          // this.router.navigate(['/lobbyist/createlobbyist']);
          this.showNewIndipendent = true;
          break;
        case 3:
          this.router.navigate(['/lobbyist/createlobbyist']);
          break;
        case 4:

          break;
        default:
          break;
      }
    } else {
      switch (id) {
        case 1:
          this.showJoinCommittee = true;
          break;
        case 2:
          this.showJoinIndipendent = true;
          break;
        case 3:
          this.showJoinLobby = true;
          break;
        default:
          break;
      }
    }
  }


  deleteSelectedList(e: any) {
    //TODO remove selected lobby/Committee from list
    console.log("need to do remove selected lobby/Committee from list", e.data);
    this.selectedCommLobbList.splice(e.idx, 1);
  }

  addSelectedtoList(data: any) {
    this.listData = data;
    //TODO add selected lobby/Committee to list
    console.log("need to do add selected lobby/Committee from list", data);
    if (this.selectedCommLobbList.length < 10) {
      let findLockerProduct
      if (this.showJoinCommittee) {
        findLockerProduct = this.selectedCommLobbList.find(
          (o: any) => o.committeeId == data.committeeId
        );
      } else if (this.showJoinLobby) {
        findLockerProduct = this.selectedCommLobbList.find(
          (o: any) => o.lobbyistID == data.lobbyistID
        );


      } else if (this.showJoinIndipendent) {
        findLockerProduct = this.selectedCommLobbList.find(
          //Need to change
          (o: any) => o.lobbyistID == data.lobbyistID
        );
      }
      if (findLockerProduct) {
        return this.snackbar.snackbarError(
          "Already Selected",
          this.masterDate.centre
        );
      } else {
        this.selectedCommLobbList.push(data);
        this.hideNext = false;
        this.getCommitteeList = [];
        this.getLobbyList = [];
        this.getIndipendentList = [];
      }
    } else {
      this.snackbar.snackbarError(
        "Maximum Limit Reached",
        this.masterDate.centre
      );
    }

  }

  addSearchEmitter(e: any) {
    this.selectCommittee = e;
    if (this.showJoinCommittee) {
      this.getCommittee();
    } else {
      this.getLobby();
    }
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
  getLobby() {
    const id = {
      searchLobbyName: this.selectCommittee ? this.selectCommittee : "",
    };
    this.service.postData(this.urlService.lobbyList, id).subscribe((res: any) => {
      this.getLobbyList = res;
      console.log(this.getLobbyList);
    });
  }

  getIndipendent() {
    const id = {
      searchLobbyName: this.selectCommittee ? this.selectCommittee : "",
    };
    // Need to change URL
    this.service.postData(this.urlService.lobbyList, id).subscribe((res: any) => {
      this.getIndipendentList = res;
      console.log(this.getIndipendentList);
    });
  }
  navigate(data: any) {

  }

  SendDetail() {

  }

  Sendback() {
    this.showJoinCommittee = false;
    this.showJoinIndipendent = false;
    this.showJoinLobby = false;
    this.showNewIndipendent = false;
    this.selectedCommLobbList = [];
    this.note = '';
  }

  IEFormData(event: any) {
    //Need to Do 
    console.log(event);
  }

  selectFiler() {
    //Need to Do 
    this.localStore.setLocalStorage('user_type', this.committeeLobbyList.userType);
    if (this.chooseCommitte) {
      this.localStore.setLocalStorage('choosen_id', this.chooseCommitte);
      this.localStore.setLocalStorage('user_chosen', 'committee');
      this.router.navigate([this.masterDate.dashboard]);
    } else if (this.chooseLobbiest) {
      this.localStore.setLocalStorage('choosen_id', this.chooseLobbiest);
      this.localStore.setLocalStorage('user_chosen', 'lobbiest');
      this.router.navigate([this.masterDate.lobbyDashboard]);
    }
  }

}
