import { Component, OnInit } from '@angular/core';
import { AirportService } from 'libs/flight-lib/src/lib/services/airport.service';

@Component({
  selector: 'flight-workspace-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css'],
})
export class AirportComponent implements OnInit {
  airports: string[] = [];

  constructor(private airportService: AirportService) {
  }

  ngOnInit() {
      this.airportService.findAll().subscribe(airports => {
      this.airports = airports;
      });
  }
}
