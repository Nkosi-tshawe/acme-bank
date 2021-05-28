export class AccountViewModel {
  public account_number: number;
  public account_type: string;
  public balance: number;

  constructor() {
    this.account_number = 0;
    this.account_type = '';
    this.balance = 0;
  }
}
