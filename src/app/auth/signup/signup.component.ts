import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {TokenService} from "../token/token.service";
import {AuthStatusService} from "../auth-status.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private tokenService: TokenService,
              private authStatus: AuthStatusService,
              private router: Router
              ) { }

  errors = [];


  public form = {
    name:null,
    email:null,
    password:null,
    password_confirmation:null,
  }

  /**
   * register new user via authenticationService.signup()
   */
  onSubmit() {
    this.authenticationService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error =>this.handleError(error)
    );
  }

  /**
   * handle response from authenticationService.signup()
   * @param data response data from authenticationService.signup()
   */
  handleResponse(data) {
    localStorage.clear();
    this.tokenService.handleToken(data.access_token);
    this.authStatus.changeStatus(true);
    this.router.navigateByUrl('/welcome');
  }

  /**
   * handle any errors from authenticationService.signup()
   * @param error response from authenticationService.signup()
   */
  handleError(error) {
    this.errors = error.error.errors;
  }

  ngOnInit() {
  }

}
