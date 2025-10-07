interface Car {
    brand:string;
    model:string;
    price:number;
    year:number;
}

const cars: Car[] = [
    { brand: "BMW", model: "M3", price: 72000, year: 2023 },
    { brand: "Audi", model: "A4", price: 42000, year: 2022 },
    { brand: "Tesla", model: "Model 3", price: 50000, year: 2024 },
    { brand: "Mercedes", model: "C300", price: 55000, year: 2021 },
    { brand: "Volkswagen", model: "Golf GTI", price: 38000, year: 2020 }
]



function getTotalprice(cars: Car[]) :number{
    let totalPrice: number = 0;
    cars.forEach(car => {
        totalPrice += car.price;
    })
    return totalPrice;
}

function printlistofcars(cars: Car[]):void{
    cars.forEach(car => {
        console.log(car.brand + " " + car.model);
    })
}

function printexepensivecars(cars: Car[],minprice: number):Car[]{
    cars.forEach(car => {
        if (car.price >= minprice) {
            console.log(car.model + " " + car.brand)
        }
    }

    )
    return cars;
}

function printexepensivecarsfilter(cars: Car[],minprice: number):Car[]{
    cars = cars.filter((car) => car.price >= minprice);
    return cars;
}

function getTotalpriceReduce(cars: Car[]):number{
    let totalPrice2: number = cars.reduce((total, car) => total + car.price, 0);
    return totalPrice2;
}

console.log(getTotalpriceReduce(cars));
console.log(printexepensivecarsfilter(cars,50000));