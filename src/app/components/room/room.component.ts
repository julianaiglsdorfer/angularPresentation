import { Component, OnInit } from '@angular/core';
import {Room} from "../../model/room";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeMultipleRooms();
  }

  initializeMultipleRooms() {
    const roomOne: Room = new Room(1, 'Kingsize', 100, 1, 2, 1, true);
    const roomTwo: Room = new Room(2, 'Normal Room', 200, 2, 3, 2, false);
    const roomThree: Room = new Room(3, 'Suite', 300, 3, 1, 1, true);
    this.rooms = [roomOne, roomTwo, roomThree];
  }

}
