export class Room {
  constructor(
    public  roomNo: number,
    public  description: string,
    public  price: number,
    public  capacity: number,
    public  numberSingleBeds: number,
    public  numberDoubleBeds: number,
    public  balcony: boolean
  ) {
  }
}
