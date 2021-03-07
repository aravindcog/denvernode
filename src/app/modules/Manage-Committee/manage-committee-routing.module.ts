import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCommitteesComponent } from './manage-committees/manage-committees.component';
import { NewCommitteeApproveDenyComponent } from './new-committee-approve-deny/new-committee-approve-deny.component';
import { ExistingCommitteeInfoComponent } from './existing-committee-info/existing-committee-info.component';
import { PublicFundingComponent } from './public-funding/public-funding.component';

const routes: Routes = [
  {
    path:"manage_committee", component:ManageCommitteesComponent
  },
  {
    path:"approve_deny", component:NewCommitteeApproveDenyComponent
  },
  {
    path:"existing-committee", component:ExistingCommitteeInfoComponent
  },
  {
    path:"public-funding", component:PublicFundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCommitteeRoutingModule { }
