// // 1.
// // functions are reusable block of code,which can be used anywhere when called. 
// // ->reusability
// // ->cleaner code 
// // -> less space consuption
// // ->better structure 
// // 2.
// function greetStudent(name){
//     return "Hello" + name +"welcome to CodingGita!"
// };
// console.log(greetStudent(" Abhi "));
// console.log(greetStudent(" Abhishek "));
// // 3.
// // hoisting is a concept that states that if a function is declared anywhere in the code called anywhere in the code it will work because
// // javascript compiler accesses it in the very starting and thus if we call the function 
// // it can still give us the output.
// // for eg:-
// console.log(calculateAverage(10,20,30))
// function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// };
// // 4
// let average=function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// };
// console.log(average(10,20,30))
// // // 5.
// // function multiply(x, y) {
// //     return x * y;
// // }
// // console.log(multiply(12, 5));
// // here parameter=x,y 
// // argument=12,5
// // 6.
// function isEven(num){
//     if(num%2==0){
//         return true
//     }else{
//         return false
//     };
// };
// console.log(isEven(8));
// // 7.
// function findPercentage(obtainedMarks,totalMarks){
//     percentage=(obtainedMarks*100)/totalMarks
//     return(`${percentage}%`)
// };
// console.log(findPercentage(456,500))
// // 8.
// // it does not return anything instead it returns undefined.
// // for example... 
// function fndPercentage(obtainedMarks,totalMarks){
//     percentage=(obtainedMarks*100)/totalMarks
// };
// console.log(fndPercentage(456,500))
// // 9.
// function calculateSimpleInterest(principal, rate, time){
//     SI = (principal * rate * time) / 100;
//     return SI;
// };
// console.log(calculateSimpleInterest(10000,5,2))
// // 10.
// // I.

// // II.
// function studentData(studentName,marks){
//     return "Hello"+studentName+", You have seured"+marks+"marks."
// };
// console.log(studentData("Abhishek","89"))
// console.log(studentData("Abhi","89"))
// // 11.
// // local scope is accessible anywhere in the program and functional scope
// //  is not callable inside the function.
// // This is just for the example:-
// // function displayAge(){
// //     let age=20
// //     console.log(age)
// // }
// // console.log(age)
// // 12.
// function analyzeStudent(name,m1,m2,m3){
//     totalMarks=m1+m2+m3
//     avg=totalMarks/3
//     return (`${name} scored total ${totalMarks} with average ${avg}.`)
// };
// console.log(analyzeStudent("Abhishek",89,89,89));
// // 13.
// // a function inside a fn. is called nested fn.
// function studentReport(name,m1,m2){
//     function total(m1,m2){
//         return total=m1+m2
//     }
//     const t=total(m1,m2)
//     return `${name} has got total marks =${t}`
// };
// console.log(studentReport("Abhishek",89,89))
// // 14.
// function generateReport(name, m1, m2, m3){
//     total=m1+m2+m3
//     avg=total/3
//     result=""
//     if(avg>40){
//         result+="Pass"
//     }else{
//         result+="Fail"
//     };
//     return (`The student ${name} has secured average of ${avg} and is ${result}.`)
// };
// console.log(generateReport("someone",89,89,89))
// console.log(generateReport("me",0,0,0))
// // 15.
// // I
// function sumOfThree(a, b, c){
//     sum=a+b+c
//     return sum
// };
// console.log(sumOfThree(1,2,3))

// function averageOfTwo(x, y){
//     avg=(x+y)/2
//     return avg
// };
// console.log(averageOfTwo(1,2))

// function maxOfTwo(a, b){
//     if(a>b){
//         return a
//     }else{
//         return b
//     };
// };
// console.log(maxOfTwo(-9,8))

// function fullName(first, last){
//     return (first + last)
// };
// console.log(fullName("ABHISHEK ","THAKUR"))
// // 16.
// function calculateGrade(percentage) {
//     if (percentage >= 90 && percentage <= 100) {
//         return "A+";
//     } else if (percentage >= 80) {
//         return "A";
//     } else if (percentage >= 70) {
//         return "B";
//     } else if (percentage >= 60) {
//         return "C";
//     } else if (percentage >= 40) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// console.log(calculateGrade(95));
// console.log(calculateGrade(82));
// console.log(calculateGrade(67));
// console.log(calculateGrade(45));
// console.log(calculateGrade(32));
// // 17.
// function calculateFinalPrice(price,discountPercent){
//     finalPrice = price - (price * discountPercent / 100)
//     return finalPrice;
// };
// console.log(calculateFinalPrice(2500,15))
// // 18.
// function celsiusToFahrenheit(c){
//     f=((c * 9)/5)+ 32
//     return f
// }
// console.log(-40)
// function fahrenheitToCelsius(f){
//     c=(f - 32) * 5/9
//     return c
// };
// console.log(fahrenheitToCelsius(-40))
// 19.
// yes it can be called before its defined and the reason is the hosting 
// feature of code in javascript
// 20.
let avg1=0
function processStudent(name, m1, m2, m3){

    function calc(){
        let total=m1+m2+m3;
        let avg=total/3;
        let arr=[total,avg];
        return(arr);
    };
    let [studentTotal, studentAvg]=calc();

    return(`Student ${name} has scored total and average ${arr} marks respectively`)
};
console.log(processStudent("Abhishek",89,89,89));