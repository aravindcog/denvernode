import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService, CommonMethods } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavcomponent',
  templateUrl: './sidenavcomponent.component.html',
  styleUrls: ['./sidenavcomponent.component.scss']
})
export class SidenavcomponentComponent implements OnInit {
  localrole: any;
  static_data: any;
  public selectedindex = 0;
  isadmin = false;
  currenturl: string;
  showmsg = false;
  constructor(
    private localStore: LocalstorageService,
    private commonMethods: CommonMethods,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currenturl = this.router.url;
    console.log(this.router.url)
    this.localrole = this.localStore.getLocalStorage('role');
    this.static_data = this.commonMethods.getCurrentLanguage();
    this.setSidePanel();
    this.checkRouter();
  }

  clickedlabel(index: any) {
    console.log('====>', index)
    this.selectedindex = index;
  }

  setSidePanel() {
    this.localrole = this.localStore.getLocalStorage('role');
    if (this.localrole == 'admin') {
      this.isadmin = true;
    } else {
      this.isadmin = false;
    }
  }
  checkRouter() {
    const splittedRoute = this.currenturl.split('/');
    if(splittedRoute[1] == 'dashboard') {
      this.showmsg = true;
    }
  }

}
