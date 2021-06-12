import { Component, OnInit } from '@angular/core';
import {Room, SearchModel} from "../../model/room";
import { RoomApiService } from '../../service/room-api.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[] = [];
  searchModel: SearchModel;

  constructor(
    public roomApiService: RoomApiService,
  ) {
    this.searchModel = new SearchModel("", "", 0, 0, 0, 0, 0, false);
  }

  ngOnInit(): void {
  }

  searchFreeRooms() {
    console.log('freeRooms');
    console.log(this.searchModel);

    if(this.searchModel.checkindate && this.searchModel.checkoutdate){//trusy request means not null && not undefined && not 0
      let fromDate: Date = new Date(Number(this.searchModel.checkindate.substr(0,4)), Number(this.searchModel.checkindate.substr(4,2)), Number(this.searchModel.checkindate.substr(6,2)));
      let toDate: Date = new Date(Number(this.searchModel.checkoutdate.substr(0,4)), Number(this.searchModel.checkoutdate.substr(4,2)), Number(this.searchModel.checkoutdate.substr(6,2)))

      if(fromDate < toDate){
        console.log("From Tag: " + fromDate.getDay());
        console.log("From Monat: " + fromDate.getMonth());
        console.log("From Jahr: " + fromDate.getFullYear());
        console.log("To Tag: " + fromDate.getDay());
        console.log("To Monat: " + fromDate.getMonth());
        console.log("To Jahr: " + fromDate.getFullYear());
      }
      this.roomApiService.getFreeRooms(this.searchModel).subscribe(
      response => this.rooms = response,
    );
    }
    else{
      alert("Bitte beachten sie, dass das Checkindatum vor dem Checkout liegt, und dass das Format yyyy-mm-dd ist!");
    }

  }

  public bookRoom(rNr: number){
    console.log("funkt");
  }
}
