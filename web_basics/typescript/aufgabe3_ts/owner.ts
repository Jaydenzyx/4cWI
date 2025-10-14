export class Owner {
    constructor(private Firstname: string, private Lastname: string, private age: number) {

    }

    public getFirstname():string{
        return this.Firstname;
    }

    public getLastname():string{
        return this.Lastname;
    }

    public getage():number{
        return this.age;
    }

}