// advatage of inheritance is can use the same method or duplicate method in multiple class but not code it again
// disadvantage => the affect of the variable when edit of the Superclass 
// disadvantage => nested inheritance when change from Superclass it have large affect with the Subclass

import { Role, Employee} from './pr/shared'
abstract class BaseDocument {
    constructor (private description: string) {};
    protected name = 'Nothing';
    
    protected Save(): void {
    // Save to database
    // ......
        console.log(` Document ${this.name} saved at ${new Date().toISOString()}`);
    }

    public Approve (owner: Employee): void {
        this.Save()
        console.log(`${this.name} approved`);
    }
}

class Invoice extends BaseDocument {
    name = 'Invoice';
    private amount = 20;
    
    public Approve (owner: Employee): void {
        if (this.amount <= 0) {
            throw Error('Cannot approve invoice without amount');
        }
        super.Approve(owner);
    }
}

class Receipt extends BaseDocument {
    name = 'Receipt';
}


const invoice = new Invoice('Hello');
const receipt = new Receipt('Receipt');
invoice.Approve(new Employee());
receipt.Approve(new Employee());