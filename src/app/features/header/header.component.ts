import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userDetail: any
  @Output() onLogout: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.onLogout.emit()
  }

  get showAfterLogin(): boolean {
    return true;//  this.userDetail && this.userDetail.token
  }

  get hideAfterLogin(): boolean {
    return true;// !this.userDetail || !this.userDetail.token
  }

  get showIfAdmin(): boolean {
    return true;// this.showAfterLogin && this.userDetail.roles.includes('admin')
  }

}
