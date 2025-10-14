import {Engine} from "./Engine";

export class Car {
    private color:string;
    private brand:string;

    constructor(color:string, brand:string, private engine:Engine) {
    }

    getHorsePower():number{
        return this.engine.getHorsePower();
    }

    getBrand():string{
        return this.brand;
    }

    getColor():string {
        return this.color;
    }



}

