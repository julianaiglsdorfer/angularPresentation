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
    this.searchModel = new SearchModel("", "", 0, 0, 0, false, false, false);
  }

  ngOnInit(): void {
  }

  searchFreeRooms() {
    console.log('freeRooms');
    this.roomApiService.getAllRooms().subscribe(
      response => this.rooms = response,
    );
    // this.roomApiService.getFreeRooms(this.searchModel).subscribe(
    //   response => this.rooms = response,
    // );
  }
}
