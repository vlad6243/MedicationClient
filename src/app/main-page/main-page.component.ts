import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  
  options = { 
    fullWidth: true,          
    height: 500
  };

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // no errors
    let elems = document.querySelectorAll('.slider');
    let instances = M.Slider.init(elems, this.options);
  }

}
