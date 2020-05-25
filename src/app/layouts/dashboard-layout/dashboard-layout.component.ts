import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // no errors
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {preventScrolling:true});
  }

}
