const name = {
    firstName: 'Sarita',
    lastName: 'Mandal',
};

function printName(hometown, state) {
    console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
};

printName.call(name, "medinipur", "WB");
printName.apply(name, ["medinipur", "WB"]);
let printMyName = printName.bind(name, "medinipur", "WB");
printMyName();

//curring........................................................................................................................
//closure and bind

let multiply = function (x, y) {
    console.log(x*y);
}

let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(3);
let multiplyTwoClosure = function (x) {
   
   return function (y) {
    console.log(x)
    console.log(x*y)
    }
}
multiply(2, 3);
multiplyTwoClosure(2)(4);
//bind polyfill..........................................................................................................................
Function.prototype.myBind = function (...arg) {
    let obj = this;
    param = arg.slice(1);
    return function (...arg1) {
        obj.apply(arg[0],[...param, ...arg1]);
    }
}
let printMyName2 = printName.myBind(name, "medinipur");
printMyName2("WB");
//debouncing....................................................................................................................................
let counter = 0;
let getData = () => {
    //calls Api
    console.log("fetching data...", counter++);
}
let doSomeMagic = function (fn, t) {
    let timer;
 return function () {
    let obj = this;
   // args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn.apply(obj)
    }, 300);

 }
}
let betterFunction = doSomeMagic(getData, 300);
