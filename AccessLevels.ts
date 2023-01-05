// public can access all the class
// protected can access by the same or subclass
// private can access only main class
class A {
    private data = 'My Data';
    protected data2 = "MDT"
    public hello() {

    }

    public greetingMessage() {
        return 'Hello world';
    }
}

class B extends A {
    method() {
        this.data2;
    }
}

const object = new A();

// recommend the access level must use th
// 1 pivate 
// 2 protected
// 3 public
// it easy to maintain because it can edit easy when it crash or bugs 
// to protect the bugs from other developer use this class