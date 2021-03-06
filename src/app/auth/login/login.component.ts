import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {TokenService} from "../token/token.service";
import {Router} from "@angular/router";
import {AuthStatusService} from "../auth-status.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private tokenService: TokenService,
              private router: Router,
              private authStatus: AuthStatusService,
              ) { }

  error = null;

  public form = {
    email:null,
    password:null,
  }

  /**
   * Login the user
   */
  onSubmit() {
    this.authenticationService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  /**
   * Handle login response direct user to welcome page
   * @param data server response containing JWT token
   */
  handleResponse(data) {
    localStorage.clear();
    this.tokenService.handleToken(data.access_token);
    this.authStatus.changeStatus(true);
    this.router.navigateByUrl('/welcome');
  }

  /**
   * handles any login errors
   * @param error server error response
   */
  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {}
}
