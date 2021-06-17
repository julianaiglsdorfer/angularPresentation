import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Booking} from '../model/booking';
import {BookingsComponent} from "../components/bookings/bookings.component";
import {Observable} from "rxjs";

@Injectable()
export class BookingService {

  rooms: Room[] = [];

  constructor(
    private httpClient: HttpClient
  ) {}

  public getBookedRooms(): Room[] {
    return this.rooms;
  }

  getAllBookings(){
    return this.httpClient.get<Booking[]>('https://service-engineering-hotel-api.azurewebsites.net/api/allBookings');
  }

  bookRoom(from: string, to: string, rNr: string) {
    let booking: Booking = new Booking();
    booking.checkindate = from;
    booking.checkoutdate = to;
    booking.roomno = rNr;
    booking.bookingActive = true;
    return this.httpClient.post<Booking>('https://service-engineering-hotel-api.azurewebsites.net/api/addBooking', booking);
  }

  deleteBooking(bookingno: number): Observable<Object> {
    return this.httpClient.delete('https://service-engineering-hotel-api.azurewebsites.net/api/deleteBooking/' + bookingno);
  }
}
