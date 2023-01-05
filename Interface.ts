// interface is declare ot control of the class to use this function
// interface is different by abstract by the interface can set the prototype only in it cannot create the featute inside the function
// when use interface can use before the class name by implements CLASS_NAME, it can implement multiple interface

interface Approveable {
    Approve(approveName: string): void;
}

interface Printable {
    Print(): void;
}

// this parameter can set the type of the interface
function confirm(doc: Approveable) {
    doc.Approve('Kongphop');
}

class Receipts implements Approveable, Printable{
    Approve(approveName: string): void {
        console.log('Reciept approved');
    }

    Print(): void {
        console.log('Reciept printed');
    }
}

// if no decleare by implement but the name is same from interface that can use 
class Invoices implements Printable{
    Approve(approveName: string): void {
        console.log('Invoices approved');
    }

    Print(): void {
        console.log('Invoices printed');
    }
}

// can use Reciept instaed of Approveable because Reciept is implements by the Approveable interface
// then the property in an interface is use in the Reciept class
confirm(new Receipts);
confirm(new Invoices);