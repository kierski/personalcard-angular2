import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  selected = false;

  user = {
    name: 'Lorem ipsum',
    job: 'Lorem ipsum',
    email: 'Lorem ipsum',
    description: 'Lorem ipsum',
    phone: 'Lorem ipsum'
  };

  constructor() { }

  ngOnInit() { }

}
