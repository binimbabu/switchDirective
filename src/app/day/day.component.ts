import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
public day = new Date().getDay();
  constructor() { }

  ngOnInit(): void {
  }

}
