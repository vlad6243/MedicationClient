import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,AfterViewInit{


  constructor() {}


  ngOnInit() {
  }

  ngAfterViewInit() {
    // no errors
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {preventScrolling:true});
  }

}
