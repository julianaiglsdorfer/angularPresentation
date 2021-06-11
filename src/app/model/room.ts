export class Room {
  constructor(
    public  nr: number,
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

export class SearchModel {

  public from: string;
  public to: string;
  public size: number;
  public price: number;
  public persons: number;
  public singleBed: number;
  public doubleBed: number;
  public balcony: boolean;


  constructor(from: string, to: string, size: number, price: number, persons: number, singleBed: number, doubleBed: number, balcony: boolean) {
    this.from = from;
    this.to = to;
    this.size = size;
    this.price = price;
    this.persons = persons;
    this.singleBed = singleBed;
    this.doubleBed = doubleBed;
    this.balcony = balcony;
  }
}
