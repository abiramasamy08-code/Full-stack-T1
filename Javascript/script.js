// var a=10;
// //var b=20;
// const c=30;

// var a;
// a= 10;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=34;
// var str="abi";
// var underfine;
// var Null=null;
// var bollean=true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(underfine);
// console.log(typeof Null);
// console.log(typeof boolean);

// var bigInt = 123n;
// //var symbol = Symbol(li);

// console.log(typeof brgint); 
// console.log(typeof sym);    

// //var arr=[10,20,30,40];
// console.log(typeof arr );
// var obj={
//     name:"Abi",
//     dept:["CT"]
// }
// console.log(typeof obj,obj)

// //Arithmetic operation (+,-,*,%,/)
// var a = 10;
// var b = "Abi";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a % b);
// console.log(a / b);

// // logical Operation (&&,||,!)

// //              &&     || 
// //true true    true    true
// //true false   false   true
// //false true   false   true
// //false false  false  false

// var a = true;
// var b =false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a)
 
//RelationL Operator (>,<,>=,<=,==,===,!=,!==)

// a = 10;
// b = 20;

// console.log(a > b);
// console.log(a < b);      
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

//Assignment operator(=,+=,-=,%=,*=,/=,**=)
// a = 10;
// b = 20;
// a += b; //30
// console.log(a);
// a -= b;
// console.log(a);

//Uniary operator(--,++) 

// var a = 10;

// console.log(a++);
// console.log(++a);

// var a = 10;

// console.log(a--);
// console.log(--a);

// a=1; // 2 3
// b=1; // 0 1 2
// c=0; // 1 2

// var result = a++ + --b + ++c - ++a + ++b + c++
//               + b++ + a;
// console.log(result);
//conditional statements
// var a=10;
// var b=20;
// //if condition
// if(true) {
//      // Template Literals
//     console.log('${a} +${b} =${a+b}')
// }

// if(true) {
//     a=10;
//     console.log(a);
// }
// var a; //Hoisting
// console.log(a);
// var a=10;

// var a=10; //global scope
// // let b=20; //block scope
// const b=20; //block scope
// if(true) { 
//     console.log(a);
//     // let b=30; //block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a=10;
// if (a%2==0){
//     console.log('${a} is Even');
// }
// else{
//     console.log('${a} is Odd');
// }

// var mark=70;

// if(mark>=90){
//     console.log("0 grade");
// }
// else if(mark>=70){
//     console.log("A grade");
// }
// else if(mark>=35){
//     console.log("pass");
// }
// else {
//     console.log("Fail");
// }

// var a=10;
// //conditional ? true statement: false statement;
// var result =a%2==0?"Even":"Odd";
// console.log(result)

// mark =30;
// var result=(mark>=90)? "0 Grade":
//            (mark>=75)? "A grade":
//            (mark>=35)? "Pass":
//            "Fail";
//   console.log(result);
  
  var day=2;
  switch(day){
    case 1:{
        console.log("Sunday");
        break;
  }
case 2:{
    console.log("Monday");
    break;
}
case 3:{
    console.log("Tuesday");
    break;
}
case 4:{
    console.log("Wednesday");
    break;
}
case 5:{
    console.log("Thursday");
    break;
}
case 6:{
    console.log("Friday");
    break;
}
case 7:{
    console.log("Saturday");
    break;
  }
  default:{
    console.log("Invaild input");
  }
}

//Looping Statement

//1 time 11 times 10 times
// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// var val =10246;
// var count =0
// while(val > 0){
//     count++;
//     val =Math.floor(val/10);
// }
// console.log(count);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }

// function add(a=5, b=6){
//     console.log(a+b)
// }

// add(); // Hoisting

// //Arrow Function
// var demo =(a=5,b=6) => {
//     console.log(a + b);
// }
// demo(10,20);
// demo();
// demo(10);


var arr=[10,20,30];
var arr2=[...arr,40,50];
console.log(arr);
console.log(arr2);

var [m1,m2,m3,m4,m5]=[90,99,98,97,100]
console.log(m1,m2,m3,m4,m5);

var {name,mobile,delt,email,isActive} ={
     name:"Abinaya",
     mobile:1234567890,
     dept:["CT"],
     email:"abi@gmail.com",
     isActive:true
}
console.log(name,mobile,delt,email,isActive);

var arr =[10,20,30,40,50];
//for..in
for(let index in arr){
    console.log(index)
}
//for..of
for(let value of arr){
    console.log(value)
}
var obj={
    name:"Abinaya",
    dept:["CT"],
    mobile:1234567890
}
for(let key in obj){
    console.log(key,obj[lkey])
}

var arr =[1,2,3,4,5];

var result= arr.map((va1)=>(val*2));
console.log(result)

var even=arr.filter((va1)=>va1%2===0);
console.log(even)

var sum=arr.reduce((add,va1)=>(add+va1),0);
console.log(sum)