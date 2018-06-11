import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
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
    this.notify.info('Wait...', {timeout:5000});
    this.notify.success(data.data, {timeout:0});
    this.form.email = null;
  }
}
