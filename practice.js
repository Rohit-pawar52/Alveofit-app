"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array of objects
var persons = [
    { name: "rohit", age: 22, email: "rkps@gmail.com" },
    { name: "rahul", age: 23, email: "rahul@gmail.com" },
    { name: "sonu", age: 24, email: "sonu@gmail.com" }
];
// typescript is a superset of javascript, it provides type safety features.
//explicit..
var A;
A = 6261;
console.log(A);
var B;
B = ['rohit', '21112'];
console.log(B);
//implicit...
var num1 = 10;
console.log(num1);
//primitve types -- number, string, boolean, bigint, symbol
//non primitive types -- array, any, undefined, null, object, enum, tuples, union.
// any does not provide type safety
// tuples are types array with types of each index
//type parameter function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function sub(a, b) {
    return a - b;
}
console.log(sub(1, 2));
function mul(a, b) {
    return a * b;
}
console.log(mul(1, 2));
function div(a, b) {
    return a / b;
}
console.log(div(1, 2));
// void function that doesn't return anything
function Avoid() {
    console.log('its a void function');
}
Avoid();
// optional parameters
function optional(a, b, c) {
    return a + b + (c || 0);
}
console.log(optional(1, 2, 12));
// rest multiple parameters
function multi_para(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b + c.reduce(function (p, d) { return p + d; }, 0);
}
console.log(multi_para(1, 2, 1, 3, 5, 7, 8));
// typecasting is a technique to change the type of data var for its use.
// also it will mot change that variable. we use AS keyword and <> for typecasting
var x = 'hello';
console.log(x.length);
// classes in ts are used to add types and visibility modifiers to the js class
var Students = /** @class */ (function () {
    function Students() {
    }
    return Students;
}());
var student = new Students();
student.name = "rohit";
console.log(student);
// class constructor with method
var Person = /** @class */ (function () {
    function Person(name, age, email, students) {
        this.name = name,
            this.age = age,
            this.email = email,
            this.students = students;
    }
    Person.prototype.GetNameEmail = function () {
        return this.name + " " + this.email;
    };
    return Person;
}());
var person = new Person("rohit", 21, "rkpsdfs@gmail.com", { name: "anil", age: 12, email: "wer@mail.com", phone: 1829918291811 });
var result = person.GetNameEmail();
console.log(result, person);
// interpolation used to render the data from variable using this --- {{ }}
// property binding [innerText]="variable name"
// event binding when user is intercting with webpage 
// directive -- are used to change the behavior and and appearance of dom element,
// also used to create all life cycle hooks, they cant have templates like component.
// types -- structural, attribute, *ngIf, *ngFor 
// pipes -- json, date, titelcase, lowercase, uppercase, slice etc.
// interfaces are used for storing complex datatypes ---
var student1 = [{ name: "anil", age: 12, email: "wer@mail.com", phone: 1829918291811 },
    { name: "akash", age: 15, email: "wer@mail.com", phone: 1829918291811 },
    { name: "ajit", age: 17, email: "wer@mail.com", phone: 1829918291811 }
];
console.log(student1);
