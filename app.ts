// main abstract class

abstract class Vehicle {

    private model : string;
    private year : number;
    public rented : number;
    private rent : boolean;
    private return : boolean;

    constructor(model : string, year : number ,rented : number) {
        
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

    static rent(): boolean {
        if (!this.rent) {
            return true;
        } else {
            return false;
        }
      }

     static return():boolean{
        if (!this.return) {
            return true;
        } else {
            return false;
        }

     }

}

// subclass car

class Car extends Vehicle{

    public type: string;
    public power: number;
    public condition: string;

    constructor(model : string, year : number, rented : number, power: number, condition: string) {
        super(model, year, rented)
        this.type = "car";
        this.condition = condition;
        this.power = power;
    }

    rentalRate(): number {
        return 300
    }
   
}

// subclass truck

class Truck extends Vehicle{

    type: string;
    public power: number;
    public condition: string;

    constructor(model : string, year : number, rented : number, power: number, condition: string) {

        super(model, year, rented)
        this.type = "truck";
        this.condition = condition;
        this.power = power;

    }

    rentalRate(): number {
        return 500
    }
   
}

// subclass bike

class Bike extends Vehicle{

    type: string;
    public power: number;
    public condition: string;

    constructor(model : string, year : number, rented : number, power: number, condition: string) {
        super(model, year, rented)
        this.type = "bike";
        this.condition = condition;
        this.power = power;
    }

    rentalRate(): number {
        return 100
    }
   
}

// check functionality of the rent and return 

let car = new Car("alto",2020,50000,800,"best");

console.log(car.VehicalModel);

console.log(car.VehicalYear);

console.log(car.rented);

console.log(car.type);

console.log(car.condition);

console.log(car.power);

console.log(car.rentalRate());

console.log(Vehicle.return);

console.log(Vehicle.rent);
