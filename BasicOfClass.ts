class Greeting {
    public name: string = "This is just a placeholder";

    // initial state of the object
    // must set the initial name before use the class all the time
    constructor(initialName: string){
        this.name = initialName
    }

    greetingMessage() {
        console.log(`Hello ${this.name}`);
    }

    changeNameToCelebrity(to: string) {
        this.name = to;
    }
}


class Main{
    public run() {
        // use the same class but the data are different that are seperate by itself
        const g1 = new Greeting("RealUser");
        g1.greetingMessage();
        g1.changeNameToCelebrity("Leo");
        g1.greetingMessage();
        g1.name = "somename";
        g1.greetingMessage();

        const g2 = new Greeting("Guy");
        g2.changeNameToCelebrity("Kong");
        g2.greetingMessage();

        g1.greetingMessage();
    }
}

new Main().run()