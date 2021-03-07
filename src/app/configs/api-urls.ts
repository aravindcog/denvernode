import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {
  constructor() { }


  loginUrl = 'api/UserManagement/CheckLoginUser';
  getUserDetailUrl = 'api/UserManagement/GetLoginUser';

  // API Token getting details
  grantType = 'password';
  clientId = 'ro.client';
  clientSecret = 'secret';
  scope = 'api1';
  TokenUrl = '/identityServer/connect/token';
 //User Management
 CreateContactInformation = 'api/UserManagement/CreateContactInformation';
 loginInformation = 'api/UserManagement/LoginInformation';
 committeeGetList = 'api/common/lookups/getList';
 ballotInformation = 'api/Committee/ballotissue/getList';
 lookupGetList ='api/common/lookups/getList'
 getallUserType = 'api/UserManagement/GetAllUserType';
 chooseUserType = 'api/UserManagement/ChooseUserType';
 committeeInformation = 'api/committee/createDetails';
 lobbyistInformation ='api/Lobbyist/createLobbyist';
 iefAdditionalInfo = 'api/UserManagement/UpdateIEFAdditionalInfo';
 confirmSubmit = 'api/UserManagement/GetUserAccountConfirmAndSubmit';
 getLobbyID = 'api/Lobbyist/GetLobbyist';
getClients ='api/Lobbyist/Getclient';
 //Committee
 committeeList = 'api/Committee/getListByName';
 committeeAditionalInfo = 'api/committee/UpdateCommitteeAdditionalInfo';
//   //Logout
//   logout = '/ClientPortal/api/AdminManagement/LogoutStatusUpdate';


 //Committee Office
 getStatelist = 'api/common/state/getList';
 getOfficerTypeList = 'api/common/lookups/getList';
 getList = 'api/common/lookups/getList';
 getOfficeSearchByName = 'api/UserManagement/GetOfficerListByName';

//lobbyist
lobbyList = 'api/Lobbyist/GetLobbyist';
updatelobbyList = 'api/Lobbyist/UpdateLobbyistAdditionalInfo';

// auth APIs
login = 'api/UserManagement/CheckLoginUser';
resetPassword = 'api/UserManagement/ResetPassword';
forgotPassword = 'api/UserManagement/ForgotPassword';

//System Management
createBallot = 'api/SystemManagement/CreateBallotIssues';
getBallot = 'api/SystemManagement/GetBallotIssuesList';
getElectionList = 'api/SystemManagement/GetElectionList';
updateBallotIssue = 'api/SystemManagement/UpdateBallotIssues';
deleteBallotIssue = 'api/SystemManagement/DeleteBallotIssues';
createContribution = 'api/SystemManagement/CreateContributionLimits';
updateContribution = 'api/SystemManagement/UpdateContributionLimits';
deleteContribution = 'api/SystemManagement/DeleteContributionLimits';
getContribution = 'api/SystemManagement/GetContributionLimitsList';
getFilerTypeList = 'api/SystemManagement/GetFillerTypeList';
getDonorTypeList = 'api/SystemManagement/GetDonorTypeList';
getOfficeTypeList = 'api/SystemManagement/GetOfficeTypeList';

// Switch Committee
CommitteeLobbyList = 'api/Committee/GetCommitteeandLobbyistbyUser?id=';
CommitteeLobbyDetail = '/api/Committee/GetCommitteeorLobbyistbyID?id=';
}
