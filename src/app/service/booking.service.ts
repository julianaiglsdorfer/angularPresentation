import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Booking} from '../model/booking';

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
    return this.httpClient.get<Booking[]>('http://localhost:8080/api/allBookings');
  
  }
  public bookRoom(roomNo: number, description: string, price: number, capacity: number, numberSingleBeds: number, numberDoubleBeds: number, balcony: boolean) {
    // this.rooms.push(new Room(roomNo, description, price, capacity, numberSingleBeds, numberDoubleBeds, balcony));
  }
}
