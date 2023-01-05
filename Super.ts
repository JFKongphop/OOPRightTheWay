class MySepecialFormularCalculator {
    protected a: number;
    protected b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    calculate(): number{
        return this.a * this.b;
    }
}


// access in the class that inhetir because optimize of new feature
// when change in Superclass that change all of the class use super
// advantage is edit only one time but change all of the class that inherit
class FormularAndLog extends MySepecialFormularCalculator {
    calculate(): number {
        console.log('Calculaing this special formular');
        return super.calculate();
    }
}

const f = new FormularAndLog(1, 2);
console.log(f.calculate());