import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ListResponse } from './models/response/list-response';
import { AccountViewModel } from './models/ui/account-viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'acme-bank';
  public accounts: ListResponse<AccountViewModel>;

  constructor(private accountService: AccountService) {}

  async ngOnInit() {
    this.accounts = await this.accountService.getAccounts();
    console.log('Accounts -> ', this.accounts);
  }
}
