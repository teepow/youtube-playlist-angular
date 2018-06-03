import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private tokenService: TokenService,
              private router: Router
              ) { }

  errors = [];


  public form = {
    name:null,
    email:null,
    password:null,
    password_confirm:null,
  }

  onSubmit() {
    this.authenticationService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error =>this.handleError(error)
    );
  }

  handleResponse(data) {
    this.tokenService.handleToken(data.access_token);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error) {
    this.errors = error.error.errors;
    console.log(this.errors);
  }

  ngOnInit() {
  }

}
