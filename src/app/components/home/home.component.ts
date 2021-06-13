import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = 'I\'m read only!';
  noExpand = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.noExpand = !this.noExpand;
    if (this.noExpand) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }

}
