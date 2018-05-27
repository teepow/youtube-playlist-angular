import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }



  public form = {
    name:null,
    email:null,
    password:null,
    password_confirm:null,
  }

  onSubmit() {
    console.log(this.form);
    this.signupService.signup(this.form);
  }

  ngOnInit() {
  }

}
