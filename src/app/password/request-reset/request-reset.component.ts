import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  }
  constructor(private AuthenticationService: AuthenticationService,
              private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.AuthenticationService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.form.email = null;
  }
}
