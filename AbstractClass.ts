// use abstract for the prototype of the class but cannot use it for the object
// abtract is set of initial behavior when extends it for use of the same function in one time 
// when declare abstract then cannot create object by this abstract it only use by extends the class
// abstract can extend only one time if want to use other time must use implement by interface
abstract class AbstractDocument {
    public View() {
        console.log('Document Viewed');
    }

    // use abstract method when use this adstract must use this function because it control to use
    abstract Print() : void;
}

// when create object from abstract is error like this
// const myDocuments = new AbstractDocument();

class Invoice extends AbstractDocument {
    Print(): void {
        console.log("Invoice printed");
    }
}

class Receipt extends AbstractDocument {
    Print(): void {
        console.log('Receipt printed');
    }
}

const myDocuments = new Invoice();
myDocuments.View();


function myFunc(doc: AbstractDocument) {
    doc.View();
    doc.Print();
}


myFunc(myDocuments);
myFunc(new Receipt);