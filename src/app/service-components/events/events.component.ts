import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { UserProfile } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  users$: Observable<UserProfile[]>

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getDoctors()
  }

}
