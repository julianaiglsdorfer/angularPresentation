import { Injectable } from '@angular/core';
import { Room } from '../model/room';



@Injectable()

export class BookingService {

  rooms: Room[] = [];

  constructor() { }

  public getBookedRooms(): Room[] {
    return this.rooms;
  }

  public bookRoom(roomNo: number, description: string, price: number, capacity: number, numberSingleBeds: number, numberDoubleBeds: number, balcony: boolean) {
    // this.rooms.push(new Room(roomNo, description, price, capacity, numberSingleBeds, numberDoubleBeds, balcony));
  }
}
