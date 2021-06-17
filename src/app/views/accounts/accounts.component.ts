import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ListResponse } from 'src/app/models/response/list-response';
import { AccountViewModel } from 'src/app/models/ui/account-viewmodel';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  @Input() accounts: ListResponse<AccountViewModel>;
  constructor(private modalService: NgbModal) {}

  public ngOnInit(): void {}

  public open(account: AccountViewModel) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.account = account;
  }
}
