// main abstract class

abstract class Vehicle {
  private model: string;
  private year: number;
  public rented: number;
  static rent: boolean;

  constructor(model: string, year: number, rented: number) {
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

  get VehicalModel() {
    return this.model;
  }

  get VehicalYear() {
    return this.year;
  }

  set vehicalRental(val: number) {
    this.rented = val;
  }

  abstract rentalRate(): number;

  static Rented(): void {
    if (!this.rent) {
      this.rent = true;
      console.log("this is now on rent");
    } else {
      console.log("this is already rented");
    }
  }

  static return(): void {
    if (!this.rent) {
      console.log("this is not on rent");
    } else {
      this.rent = false;
      console.log("this is now off rent");
    }
  }
}

// subclass car

class Car extends Vehicle {
  public type: string;
  public power: number;
  public condition: string;

  constructor(
    model: string,
    year: number,
    rented: number,
    power: number,
    condition: string
  ) {
    super(model, year, rented);
    this.type = "car";
    this.condition = condition;
    this.power = power;
  }

  rentalRate(): number {
    return 300;
  }
}

// subclass truck

class Truck extends Vehicle {
  type: string;
  public power: number;
  public condition: string;

  constructor(
    model: string,
    year: number,
    rented: number,
    power: number,
    condition: string
  ) {
    super(model, year, rented);
    this.type = "truck";
    this.condition = condition;
    this.power = power;
  }

  rentalRate(): number {
    return 500;
  }
}

// subclass bike

class Bike extends Vehicle {
  type: string;
  public power: number;
  public condition: string;

  constructor(
    model: string,
    year: number,
    rented: number,
    power: number,
    condition: string
  ) {
    super(model, year, rented);
    this.type = "bike";
    this.condition = condition;
    this.power = power;
  }

  rentalRate(): number {
    return 100;
  }
}

// check functionality of the rent and return

let car = new Car("alto", 2020, 50000, 800, "best");

console.log("model", car.VehicalModel);

console.log("vehical year", car.VehicalYear);

console.log("rentd", car.rented);

console.log("type", car.type);

console.log("condition", car.condition);

console.log("power", car.power);

console.log("rentalrate", car.rentalRate());

Vehicle.return();

Vehicle.Rented();
