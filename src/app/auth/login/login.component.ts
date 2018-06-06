import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AuthStatusService} from "../../services/auth-status.service";
import {NavbarService} from "../../services/navbar.service";

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
              private navbarService: NavbarService
              ) { }

  errors = [];

  public form = {
    email:null,
    password:null,
  }

  onSubmit() {
    this.authenticationService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.tokenService.handleToken(data.access_token);
    this.authStatus.changeStatus(true);
    this.router.navigateByUrl('/');
  }

  handleError(error) {
    this.errors = error.error.errors;
  }

  ngOnInit() {
    this.navbarService.hide();
  }

}
