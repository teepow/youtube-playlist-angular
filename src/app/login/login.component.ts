import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public form = {
    email:null,
    password:null,
  }

  onSubmit() {
    this.loginService.login(this.form);
  }

  ngOnInit() {
  }

}
