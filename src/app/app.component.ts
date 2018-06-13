import { Component, OnInit } from '@angular/core';
import { AuthStatusService } from './auth/auth-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public visible = null;

  constructor(private authStatus : AuthStatusService) { }

  ngOnInit() {
    this.authStatus.status.subscribe((status) => {
       this.visible = status;
    });
  }
}
