import { Component, OnInit } from '@angular/core';
import {Room} from "../../model/room";
import { RoomApiService } from '../../service/room-api.service';
import {SearchModel} from "../../model/searchModel";
import {BookingService} from "../../service/booking.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  rooms: Room[] = [];
  searchModel: SearchModel;

  constructor(
    private roomApiService: RoomApiService,
    private bookingService: BookingService
  ) {
    this.searchModel = new SearchModel("", "", 0, 300, 0, 0, 0, false);
  }

  ngOnInit(): void {
  }

  searchFreeRooms() {
    if(this.searchModel.checkindate < this.searchModel.checkoutdate){
      this.roomApiService.getFreeRooms(this.searchModel).subscribe(
        response => this.rooms = response,
      );
    }
    else{
      alert("Bitte beachten sie, dass das Checkindatum vor dem Checkout liegt, und dass das Format yyyy-mm-dd ist!");
    }
  }

  public bookRoom(rNr: string){
    this.bookingService.bookRoom(this.searchModel.checkindate, this.searchModel.checkoutdate, rNr).subscribe(
      response => {
        if(response) {
          alert('Buchung von Zimmer ' + response.roomno + ' erfolgreich');
        } else {
          alert('Keine buchung möglich');
        }
      }
    );
  }
}
