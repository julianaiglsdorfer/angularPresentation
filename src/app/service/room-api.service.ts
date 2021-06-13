import { Injectable } from "@angular/core";
import {Room} from '../model/room';
import {HttpClient} from "@angular/common/http";
import {SearchModel} from "../model/searchModel";


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
    return this.httpClient.post<Room[]>('http://localhost:8080/api/freeRooms', searchModel);
  }
}
