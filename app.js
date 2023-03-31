// main abstract class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(model, year, rented) {
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Object.defineProperty(Vehicle.prototype, "VehicalModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "VehicalYear", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "vehicalRental", {
        set: function (val) {
            this.rented = val;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.rent = function () {
        if (!this.rent) {
            return true;
        }
        else {
            return false;
        }
    };
    Vehicle.return = function () {
        if (!this.return) {
            return true;
        }
        else {
            return false;
        }
    };
    return Vehicle;
}());
// subclass car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, year, rented, power, condition) {
        var _this = _super.call(this, model, year, rented) || this;
        _this.type = "car";
        _this.condition = condition;
        _this.power = power;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 300;
    };
    return Car;
}(Vehicle));
// subclass truck
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, year, rented, power, condition) {
        var _this = _super.call(this, model, year, rented) || this;
        _this.type = "truck";
        _this.condition = condition;
        _this.power = power;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 500;
    };
    return Truck;
}(Vehicle));
// subclass bike
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(model, year, rented, power, condition) {
        var _this = _super.call(this, model, year, rented) || this;
        _this.type = "bike";
        _this.condition = condition;
        _this.power = power;
        return _this;
    }
    Bike.prototype.rentalRate = function () {
        return 100;
    };
    return Bike;
}(Vehicle));
// check functionality of the rent and return 
var car = new Car("alto", 2020, 50000, 800, "best");
console.log(car.VehicalModel);
console.log(car.VehicalYear);
console.log(car.rented);
console.log(car.type);
console.log(car.condition);
console.log(car.power);
console.log(car.rentalRate());
console.log(Vehicle.return());
console.log(Vehicle.rent());
