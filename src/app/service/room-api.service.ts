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

    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: {
        param1: searchModel.from,
        param2: searchModel.to,
        param3: searchModel.price,
        param4: searchModel.size,
        param5: searchModel.persons,
        param6: searchModel.singleBed,
        param7: searchModel.doubleBed,
        param8: searchModel.balcony
      }
    };

    return this.httpClient.get<Room[]>('http://localhost:8080/api/freeRooms', httpOptions);
  }
}
