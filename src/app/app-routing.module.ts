import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RoomComponent} from "./components/room/room.component";
import {AppComponent} from "./app.component";
import {BookingsComponent} from "./components/bookings/bookings.component";
import {HomeComponent} from "./components/home/home.component";
import { BookedRoomsComponent } from './components/bookedRooms/bookedRooms.component';

const routes: Routes = [
  {
    path: 'bookedRooms',
    component: BookedRoomsComponent
  },
  {
    path: 'freeRooms',
    component: RoomComponent,
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
