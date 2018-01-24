import {Component, OnInit} from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  stopArray: any;

  constructor(private digitransitservice: DigitransitService) {
  }

  ngOnInit() {
    this.digitransitservice.getRoutes('kilonkartano').subscribe(response => {
      // console.log(response.data.stops);
      console.log(response['data'].stops);
      this.stopArray = response['data'].stops;
    });
  }

}
