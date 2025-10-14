import {Owner} from "./owner";

export class Engine{
    constructor(private Producer: string, private horsePower: number, private fueltype:string, private owner: Owner){

    }

    public getHorsePower():number{
        return this.horsePower;
    }

    public getProducer():string{
        return this.Producer;
    }

    public getFueltype():string{
        return this.fueltype;
    }

    public getOWner():Owner{
        return this.owner;
    }

}