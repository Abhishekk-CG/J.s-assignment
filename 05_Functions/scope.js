// // 5.
// let fir=8;
// function first() {
//     let number = 108;
//     console.log(number);
//     console.log(fir);
// };
// first();
// // 10.
// let school="Sunrise School";
// function showSchool(){
//     console.log(school)
// }
// function updateSchool(){
//     school="Green Valley School"
//     console.log(school)
// }
// showSchool();
// updateSchool();
// // 15.
// function calculateArea(){
//     let length=8;
//     let width=4;
//     let area=(length*width)
//     return(area)
// };
// console.log(calculateArea());
// // 20.
// if (true) {
//     let secret = "Hidden";
// }
// console.log(secret);
// // 25.
// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step);
// // 30.
// function printNumbers(){
//     for(var i=1; i<=5; i++){
//         console.log(i)
//     };
//     console.log("Final num: ",i)
// };
// printNumbers()
// console.log(i)
// 35.
// I. Undefined
// II. 100
// III. It prints undefined because of the hoisting of the var keyword the variable is hoisted but its value is not hoisted.
// // 40.
// var msg="Hello There!"
// greetMe();
// function greetMe(){
//     console.log(msg)
// }
// 45.
// var string="Itsme"
// function first(){
//     var string="Itsme1"
//     function second(){
//         var string="Itsme2"
//         console.log(string)
//         function third(){
//             var string="Itsme3";
//             console.log(string);
//         };
//         third();
//         console.log(string)
//     };
//     second();
//     console.log(string)
// };
// first();
// console.log(string)
// 46.
// when a variable declared within a specific scope (like a block, loop, or function) has the exact same name as a variable in an outer scope.
// // 50.
// var marks=70;
// function shadow(){
//     console.log(marks);
//     var marks=95;
//     console.log(marks);
// };
// shadow();
// console.log(marks);
// // 53.
// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
//     inner();
// }
// outer();
// // 56.
// function test() {
//    var x = 100;
//     console.log(x);
// }
// test();
// // 60.
// function calculate() {
//     var total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     };
//     console.log(total);
// }
// calculate();
// console.log(total); 