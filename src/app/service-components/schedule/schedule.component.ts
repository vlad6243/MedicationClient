import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Events } from 'src/app/shared/interfaces';
import { EventsService } from 'src/app/shared/services/events.service';
import { Observable } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

@ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;

calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, listPlugin];

events$: Observable<Events[]>

constructor(private eventService: EventsService) { }

  ngOnInit():void{
     this.events$ = this.eventService.getEvents()
  }
}
