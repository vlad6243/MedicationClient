import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    {url: '/main', name: 'Home'},
    {url: '/myProfile', name: 'Service'},
    {url: '/blogs', name: 'Blog'},
    {url: '/gallery', name: 'Gallery'}
  ]

  constructor(private auth: AuthService,
              private router: Router) {
}

  ngOnInit() {
  }

}
