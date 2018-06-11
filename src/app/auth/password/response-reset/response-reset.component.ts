import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../authentication.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public errors = [];

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(private route : ActivatedRoute,
              private AuthService : AuthenticationService,
              private Router : Router,
              private Snotify : SnotifyService
              ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit() {
    this.AuthService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.Snotify.confirm('Done! Now login with new password', {
      buttons: [
        {
          text: 'Okay',
          action: toster => {
            this.Router.navigateByUrl('/login');
            this.Snotify.remove(toster.id);
          }
        },
      ]
    });
  }

  handleError(error) {
    this.errors = error.error.errors;
  }

  ngOnInit() {
  }

}
