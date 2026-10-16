// const prompt = require("prompt-sync")();
// // 1.
// let count1=0
// let arr1=[28, 32, 25, 40, 18, 35];
// for(i=0; i<=arr1.length-1; i++){
//     temp=arr[i];
//     if (temp>=30){
//         count1+=1;
//     }
// };
// console.log(`the total number of hotter days are ${count1}.`)
// // 2.
// sum=0;
// let str="4279";
// for(i=0; i<=str.length-1; i++){
//     sum+=parseInt(str[i]);
// };
// console.log(sum);
// // 3.
// for(i=1; i<=100; i++){
//     if((i%3==0 && i%5==0) &&  i%7!=0 ){
//         console.log(i)
//     }
// };
// // 4.
// let str="JavaScript";
// for(i=0; i<=str.length-1; i++){
//     char=str[i]
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u") continue
//     console.log(char)
// };
// // 5.
// let arr5=[25,30,35,20,45];
// let count5=0;
// for(let i=0; i<=arr5.length-1; i++){
//     count5=0
//     for(let j=0; j<=arr5.length-1; j++){
//         if(arr5[i]>arr5[j]){
//             count5+=1
//         }
//     }
//     if (count5===1){
//         console.log(arr5[i])
//     }
// };
// // 6.
// let num6=28;
// let sum6=0;
// for(let i=0; i<=num6; i++){
//     if (num6%i===0){
//         sum6+=i
//     }
// }
// if(num6===sum6){
//     console.log(`The ${num6} is a perfect number.`)
// }else{
//     console.log(`The ${num6} is a perfect number.`)
// };
// // 7.
// let multiply=1;
// for(i=1; i<=7; i++){
//     multiply*=2
//     console.log(multiply)
// };
// // 8.
// let num1=0;
// let num2=1;
// console.log(num1);
// console.log(num2);
// for(let i=3; i<=20; i++){

// }
// // 9.
// let array=[45, 78, 90, 32, 56, 88];
// let count=0
// let total=0
// for(let i=0; i<=array.length-1; i++){
//     marks=array[i]
//     total+=marks
// };
// let average=total/array.length
// for(let j=0; j<=array.length-1; j++){
//     if(array[j]>=average)
//         count+=1
// };
// console.log(`The average marks is ${average}`)
// console.log(`The number of students wh secured marks more than average is ${count}`)
// 10.
// // 11.
// for(let i=1; i<=10; i++){
//     console.log(i)
//     if(i===7){
//         break
//     }
// }
// // 12.
// let password=String(prompt("Enter your Password: "));
// for (let i=1; i<=5; i++){
//     if(password=="admin123"){
//         console.log("Access Granted")
//         break
//     }else{
//         console.log("Access Locked")
//     }
// };
// // 13.
// let sum=0;
// for (let i=0; ; i++) {
//     sum+=i
//     if(sum>100){
//         console.log(i)
//         break;
//     }; 
// };
// // 14.
// let arr=["abhi","sanu",];
// for(i=0; i<=arr.length; i++){
//     name1=arr[i]
//     if(name1[0]=="s"){
//         console.log(name1)
//         break;
//     };
// };
// // 15.
// for(i=0; i<=50; i++){
//     j=i
//     if(j>20 && Math.sqrt(j)%1==0){
//         break
//     };
//     console.log(j)
// };
// // 16.
// for(i=1; i<=30; i++){
//     if(i%4==0)continue;
//     console.log(i)
// }
// // 17.
// let arr=[-8,-9,8,9,89,98,-89,-98];
// let sum=0;
// let len=arr.length;
// for(let i=0; i<=len; i++){
//     num=arr[i]
//     if (num>0){
//         sum+=num
//     };
// };
// console.log(sum);
// // 18.
// let str="Hello World";
// let len=str.length;
// for(let i=0; i<=len; i++){
//     word=str[i]
//     if(word==" ")continue;
//     console.log(word);
// };
// // 19.
// let num=6;
// for(i=0; i<=12; i++){
//     table=num*i
//     if(table%5===0)continue;
//     console.log(table);
// };
// // 20.
// let arr=[12, 18, 25, 15, 30, 17, 22];
// let len=arr.length;
// for(i=0; i<=len; i++){
//     num=arr[i]
//     if(num<18)continue;
//     console.log(num)
// };
// // 21.
// for(let i=50; i>=0; i--){
//     if(i%3==0 && i%9!=0){
//         console.log(i)
//     };
// };
// // 22.
// let arr=[12, 45, 7, 23, 56, 89, 34];
// for(let i=arr.length; i>=0; i--){
    
// }
// // 31.
// let start=1;
// for(let i=1; i<=4; i++){
//     let bag=""
//     for(let j=1; j<=i; j++){
//         bag+=start+" "
//         start+=1
//     };
// console.log(bag);
// };
// // 32.
// for(let i=1;i<=5;i++){
//     let bag=""
//     for(let j=1;j<=i;j++){
//         bag+=String.fromCharCode(64+j)+" "
//     };
// console.log(bag)
// }
// // 33.
// for(let i=1;i<=5; i++){
//     bag=""
//     for(let j=1;j<=i;j++){
//         if(j==1 || j==i || i==5){
//             bag+="*"+" "
//         }else{
//             bag+=" "+" "
//         };
//     };
// console.log(bag)
// };
// // 34.
// for(let i=1; i<=5; i++){
//     let bag=""
//     for(let j=5; j>=i; j--){
//         bag+="*"+" "
//     };
// console.log(bag)
// };
// // 35.
// for (let i=5; i>=1; i--){
//     let bag=""
//     for (let j=1; j<=i; j++){
//         bag+=i+" "
//     }
// console.log(bag)
// };
// // 36.
// for(let i=5; i>=1; i--){
//     let bag=""
//     for(let j=1; j<=i; j++){
//         bag+=j+" "
//     };
// console.log(bag)
// };
// // 37.
// let n=15;
// for(let i=5; i>=1; i--){
//     let bag=""
//     for(let j=1; j<=i; j++){
//         bag+=n+" "
//         n-=1
//     }
// console.log(bag)
// }
// // 38.
// for(let i=5; i>=1; i--){
//     let bag=""
//     for(let j=1;j<=i;j++){
//         if(i==5 || j==1 || j==i){
//             bag+="*"+" "
//         }else{
//             bag+=" "+" "
//         }
//     }
// console.log(bag)
// }
// // 39.
// for(let i=1; i<=5;i++){
//     let bag=""
//     for(let j=1; j<=5; j++){
//         if(i==j){
//             bag+=" "+" "
//         }else{
//             bag+="*"+" "
//         }
//     }
// console.log(bag)
// }
// // 40.
// for (let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         mul=i*j
//         if(mul%2==0){
//             console.log(`${i} X ${j} = ${mul}`)
//         }
//     }
// }
// // 41.
// let matrix=[];
// for (let i=1; i<=3;i++){
//     let arr=[];
//     for(let j=1; j<=3; j++){
//         let cellvalue=Math.abs(i-j);
//         arr.push(cellvalue);
//     }
//     matrix.push(arr)
// }
// console.log(matrix);
// // 42.
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         if(1 <= i < j<= 10 && (Math.sqrt(i + j) % 1 === 0)){
//             console.log(`${i} ${j}`)
//         }
//     }
// }
// 14.
//  1  2  3  4  5  6
// 20 21 22 23 24  7
// 19 32 33 34 25  8
// 18 31 36 35 26  9
// 17 30 29 28 27 10
// 16 15 14 13 12 11

let row=6;
let col=6;
mat=[
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];
let t=0;
let b=row-1;
let l=0;
let r=col-1;

let limit =row*col;
let num=1;
while(num<=limit){
    for(let j=l;j<=r;j++){
        mat[t][j]=num;
        num++;
    }
    t++;
    for(let i=t;i<=b;i++){
        mat[i][r]=num;
        num++;
    }
    r--;
    for(let j=r;j>=l;j--){
        mat[b][j]=num;
        num++;
    }
    b--;
    for(let i=b;i>=t;i--){
        mat[i][l]=num;
        num++;
    }
    l++;

};
console.log(mat)