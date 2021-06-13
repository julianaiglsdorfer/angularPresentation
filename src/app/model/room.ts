export class Room {
  constructor(
    public  nr: string,
    public  type: string,
    public  price: number,
    public  capacity: number,
    public  size: number,
    public  noofsinglebeds: number,
    public  noofdoublebeds: number,
    public  balcony: boolean
  ) {
  }
}
