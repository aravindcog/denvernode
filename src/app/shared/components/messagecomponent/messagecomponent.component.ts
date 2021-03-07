import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagecomponent',
  templateUrl: './messagecomponent.component.html',
  styleUrls: ['./messagecomponent.component.scss']
})
export class MessagecomponentComponent implements OnInit {

  sampleobj = [
    {
      heading: 'Next Report due 12/10/20',
      subheading: 'System notification',
      date: 'Thursday 11/03/20, 4.45am'   
    },
    {
      heading: 'Documentation requested',
      subheading: 'System notification',
      date: 'Thursday 11/03/20, 4.45am'   
    },
    {
      heading: 'Add recent donations',
      subheading: 'System notification',
      date: 'Thursday 11/03/20, 4.45am'   
    },
    {
      heading: 'Next Report due 12/10/20',
      subheading: 'System notification',
      date: 'Thursday 11/03/20, 4.45am'   
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
