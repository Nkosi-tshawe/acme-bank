import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'acme-bank';
  public results;

  constructor(private accountService: AccountService) {}

  async ngOnInit() {
    this.results = await this.accountService.getAccounts();
    console.log('Accounts -> ', this.results);
  }
}
