import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute,
               private router: Router ) {}

  ngOnInit() {
      if(this.router.url === '/') this.router.navigateByUrl('login');
  }

}
