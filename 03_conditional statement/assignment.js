// [A] if statement:-
const prompt = require("prompt-sync")();
// 1.
let num=Number(prompt("Enter a number: "));
if (num%5==0){
    console.log("Divisible by 5.")
};
// 2.
let age=65;
if (age>=60){
    console.log("Senior citizen")
};
// 3.
let num1=134;
if (num>=100){
    console.log("Big number")
};
// 4.
let temp=10;
if (temp<=10){
    console.log("Very cold")
};
// 5.
let score=100;
if (score<=100){
    console.log("Perfect score")
};
// 6.
let num2=-89;
if (num2<0){
    console.log("Negative number")
};
7.
let str="";
if (str=="" || str==''){
    console.log("No input provided")
};
// 8.
let year=1900;
if (year%100==0){
    console.log("Century year")
};
// 9.
let num4=10;
if(num%2==0 && num>=0){
    console.log("positive even number")
};
10.
let marks1=89;
if (marks1<=100 && marks1>=35){
    console.log("Valid marks")
};
// [B] if.. else statement
1.
let num7=89;
if (num7%2==0){
    console.log("Even no.")
}else{
    console.log("Odd no.")
};
// 2.
let age3=21;
if (age3>=18){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
};
// 3.
let num8=45;
if (num8>=0){
    console.log("Positive")
}else{
    console.log("Negative")
};
// 4.
let marks4=45;
if (marks4>=35){
    console.log("Pass")
}else{
    console.log("Fail")
};
// 5.
let character="S";
if(character>="A"||character<="Z"){
    console.log("Uppercase letter")
}else{
    console.log("Not an uppercase letter")
};
// 6.
let num9=57;
if (num9%3==0){
    console.log("No. is divisible by 3")
}else{
    console.log("Its not divisible by 3.")
};
// 7.
let password=String(prompt("Enter your Password: "));
if (password=="admin123"){
    console.log("Login successful")
}else{
    console.log("Incorrect password")
};
// 8.
let year2=Number(prompt("Enter the year: "));
if(year2%4==0){
    console.log("leap year")
}else{
    console.log("Non leap year")
};
// 9.
let a=8;
let b=9;
if(a>8){
    console.log("a is greater")
}else{
    console.log("b is greater")
};
// 10.
let numb1=Number(prompt("Enter the number: "));
if (numb1>0){
    console.log("Positive number")
} else if (numb1<1){
    console.log("Negative ")
}else{
    console.log("Zero")
};