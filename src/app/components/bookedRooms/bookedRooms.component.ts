import { OnInit, Component } from '@angular/core';
import { BookingService } from '../../service/booking.service';
import { Room } from '../../model/room';


@Component({
  selector: 'app-bookedRooms',
  templateUrl: './bookedRooms.component.html',
  styleUrls: ['./bookedRooms.component.css']
})

export class BookedRoomsComponent implements OnInit {

  rooms: Room[] = [];

  constructor(public bookingService: BookingService) { }

  ngOnInit(): void {
    this.rooms = this.bookingService.getBookedRooms();
  }




}
