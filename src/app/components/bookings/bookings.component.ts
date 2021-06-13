import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking.service';
import {Booking} from '../../model/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  public allBookings: Booking[] = []

  constructor(public bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.initAllBookings();
  }

  public deleteBooking(bookingno: number) {
    this.bookingService.deleteBooking(bookingno).subscribe(
      response => this.initAllBookings()
    );
  }

  public initAllBookings() {
    this.bookingService.getAllBookings().subscribe(response => {
      this.allBookings = response;
      console.log(this.allBookings);
    });
  }
}
