import { Component, OnInit } from '@angular/core';
import { Diagnosis } from 'src/app/shared/interfaces';
import { HistoryService } from 'src/app/shared/services/history.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  diagnosis$: Observable<Diagnosis[]>

  constructor(private historyService: HistoryService) { }
  

  ngOnInit() {
    
    this.diagnosis$ = this.historyService.getDiagnosis()
  }

}
