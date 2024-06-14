import { NgFor, UpperCasePipe } from "@angular/common";

export interface student{
  name:string;
  age:number;
  email:string;
  phone:number;
}

export interface array_objects {
  name: string;
  age: number;
  email: string;
}

// typescript is a superset of javascript, it provides type safety features.
//explicit..
let A: number;
A = 6261;
console.log(A);
var B: string[];
B = ['rohit', '21112'];
console.log(B);

//implicit...
let num1 = 10;
console.log(num1);

//primitve types -- number, string, boolean, bigint, symbol
//non primitive types -- array, any, undefined, null, object, enum, tuples, union.
// any does not provide type safety
// tuples are types array with types of each index

//type parameter function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));
function sub(a: number, b: number): number {
  return a - b;
}
console.log(sub(1, 2));
function mul(a: number, b: number): number {
  return a * b;
}
console.log(mul(1, 2));
function div(a: number, b: number): number {
  return a / b;
}
console.log(div(1, 2));

// void function that doesn't return anything
function Avoid(): void {
  console.log('its a void function');
}
Avoid();

// optional parameters
function optional(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}
console.log(optional(1, 2, 12));
// rest multiple parameters
function multi_para(a: number, b: number, ...c: number[]): number {
  return a + b + c.reduce((p, d) => p + d, 0);
}
console.log(multi_para(1, 2, 1, 3, 5, 7, 8));

// typecasting is a technique to change the type of data var for its use.
// also it will mot change that variable. we use AS keyword and <> for typecasting
let x: unknown = 'hello';
console.log((x as string).length);

// classes in ts are used to add types and visibility modifiers to the js class
class Students {
    name!: string;
}
const student = new Students();
student.name = "rohit";
console.log(student);

// class constructor with method
class Person {
    name: string;
    age: number;
    email:string;
    students: student;
    constructor(name:string,age:number,email:string,students:student){
        this.name=name,
        this.age=age,
        this.email=email,
        this.students=students
    }
    GetNameEmail() : string{
        return this.name + " " + this.email;
    }

}
let person= new Person("rohit",21,"rkpsdfs@gmail.com",{name:"anil",age:12,email:"wer@mail.com",phone:1829918291811});
let result = person.GetNameEmail();
console.log(result,person);

// interpolation used to render the data from variable using this --- {{ }}
// property binding [innerText]="variable name"
// event binding when user is intercting with webpage 

// directive -- are used to change the behavior and and appearance of dom element,
// also used to create all life cycle hooks, they cant have templates like component.
// types -- structural, attribute, *ngIf, *ngFor 
// pipes -- json, date, titelcase, lowercase, uppercase, slice etc.
// interfaces are used for storing complex datatypes ---
let student1: student[] = [{name:"anil",age:12,email:"wer@mail.com",phone:1829918291811},
{name:"akash",age:15,email:"wer@mail.com",phone:1829918291811},
{name:"ajit",age:17,email:"wer@mail.com",phone:1829918291811}
]
console.log(student1)

