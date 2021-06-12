import { Component, OnInit } from '@angular/core';
import { Room } from '../../model/room';
import { RoomComponent } from '../room/room.component';
import { RoomApiService } from '../../service/room-api.service';
import { BookingService } from '../../service/booking.service';
import {Booking} from '../../model/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  public allRooms: Room[] = [];
  public allBookings: Booking[] = []

  public availableRooms: Room[] = [];

  constructor(public roomApiService: RoomApiService, public bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe(response => {
      this.allBookings = response;
      console.log(this.allBookings[0].checkInDate);
    });
  }

  public bookRoom(room: Room) {

    // this.bookingService.bookRoom(room.roomNo, room.description, room.price, room.capacity, room.numberSingleBeds, room.numberDoubleBeds, room.balcony);
    // this.allRooms = this.allRooms.filter(f => f.roomNo !== room.roomNo);
    console.log(this.allRooms.forEach(r => r.nr));
  }

  public getAvailableRooms() {
    console.log('getFreeRooms');
    this.allRooms.forEach(r => {
      this.availableRooms.push(r);
    });
    if (this.allRooms.length > 1) {
      console.log("i was here");
      this.availableRooms = this.availableRooms.slice(0,this.availableRooms.length-1);
    }


  }
}
