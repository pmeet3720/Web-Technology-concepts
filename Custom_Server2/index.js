import Computer from "./Computer.js";

class Macbook extends Computer {
    constructor(name, company) {
        super(name);
        this.company = company;
    }

    logIn() {
        console.log("You are logged into a macbook " + this.name);
    }
}

const macbook_air = new Macbook('Air', 'Apple');
macbook_air.logIn();
macbook_air.run();
