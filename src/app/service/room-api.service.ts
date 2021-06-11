import { Injectable } from "@angular/core";
import {Room, SearchModel} from '../model/room';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class RoomApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getAllRooms() {
    return this.httpClient.get<Room[]>('http://localhost:8080/api/allRooms');
  }

  getFreeRooms(searchModel: SearchModel) {
    console.log(searchModel.price);
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: {
        from: searchModel.from,
        to: searchModel.to,
        price: searchModel.price,
        size: searchModel.size,
        persons: searchModel.persons,
        singleBed: searchModel.singleBed,
        doubleBed: searchModel.doubleBed,
        balcony: searchModel.balcony
      }
    };

    return this.httpClient.post<Room[]>('http://localhost:8080/api/freeRooms', searchModel);
  }
}
