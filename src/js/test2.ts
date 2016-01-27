class User {
    name: string;
    age: number;

    constructor() {
        this.name = 'test';
        this.age = 30;
    }

    public getAge () {
        return this.age;
    }

    public getName () {
        return this.name;
    }

}

class Bocc extends User {
    constructor() {
        super();
        this.name = 'bocc';
    }
}

var bocc = new Bocc();
var user = new User();

console.log(user.getAge());
console.log(bocc.getName());
