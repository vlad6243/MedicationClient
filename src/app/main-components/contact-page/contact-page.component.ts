import { Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren} from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, AfterViewInit {

  @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));

  }


}
