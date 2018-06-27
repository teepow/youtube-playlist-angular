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

  /**
   * receive password reset data from user and call AuthenticationService.sendPasswordResetLink() to send email
   */
  onSubmit() {
    this.AuthenticationService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  /**
   * handle response from AuthenticationService.sendPasswordResetLink()
   * @param data response data
   */
  handleResponse(data) {
    this.notify.info('Wait...', {timeout:5000});
    this.notify.success(data.data, {timeout:0});
    this.form.email = null;
  }
}
