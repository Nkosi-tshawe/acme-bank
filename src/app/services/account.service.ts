import { Injectable } from '@angular/core';

// Custom services
import { ApiService } from 'src/app/services/api/api.service';
// Custom models
import { HttpVerb } from 'src/app/models/request/http-verb';
// Custom viewmodels
import { AccountViewModel } from 'src/app/models/ui/account-viewmodel';
import { ListResponse } from '../models/response/list-response';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // Public variables
  public httpVerb = new HttpVerb();
  public accounts;
  constructor(private api: ApiService) {}

  // Public methods
  public async getAccounts(): Promise<ListResponse<AccountViewModel>> {
    return this.api.apiCall('/accounts', {}, this.httpVerb.get);
  }
}
