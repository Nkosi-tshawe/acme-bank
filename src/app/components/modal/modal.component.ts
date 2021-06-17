import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountViewModel } from 'src/app/models/ui/account-viewmodel';

@Component({
  selector: 'app-modal',
  template: `<div class="modal-header">
      <h6 class="modal-title">Account: {{ account.account_number }}</h6>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div>
        <h5>Balance: {{ account.balance }}</h5>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">ZAR</span>
        <input
          type="text"
          class="form-control"
          placeholder="amount"
          ([ngModel])="(account.account_number)"
          aria-label="Amount"
          aria-describedby="withdrawal-amount"
        />
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Withdraw
      </button>
    </div>`,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() account: AccountViewModel;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
