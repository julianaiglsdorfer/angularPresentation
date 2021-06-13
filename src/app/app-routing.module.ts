import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from "./components/room/room.component";
import {BookingsComponent} from "./components/bookings/bookings.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
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
