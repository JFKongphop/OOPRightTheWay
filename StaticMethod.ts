// static can call by the class 
// but static can not call by object

class StringUtils {
    static StaticMethod(str: string[]) {
        console.log('Static method called', str.join(', '));
    }

    NormalMethod() {
        console.log('Method called');
    }
}

// call by not declare obj
StringUtils.StaticMethod(['a', 'b']);
const obj = new StringUtils;
obj.NormalMethod();