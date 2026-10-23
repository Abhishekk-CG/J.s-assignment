// 1.
//1. arrays store data in javascript having an ordered collection of values 
// 2. index
// 3. 0
// 4. 30
// 5. 3

// // 2.
// // 1.
// // the first one is 
// const num=['abhi','janil','mahir']
// // second one
// const marks=new Array(89,98,88,99);
// // 3.
// const student=["Jenil", "Mahir", "Priyesha", "Yashvi"]
// // 4.

























// // 6.
// // 1.
// for loop and while loop
// // 2.
// arr.length
// 3.
// after the array access statement
// // 4.
// const students=["Abhi","Avi","Abhishek"]
// for(let student of students){
//     console.log(student);
// }
// // 5.
// const students=["Abhi","Avi","Abhishek"]
// for(let i=0; i<students.length; i++){
//     console.log(student);
// };
// it will give reference error.
// // 6.
// const subject=["hindi","eng","Maths"];
// for(const sub of subject){
//     console.log(sub);
// };
// 7.
// it lets us reduce errors by directly using for of loop where let us not put 
// the limit it will automatically under the limit.
// // 8.
// const colors = ["Red", "Blue", "Green"];
// for (const color of colors) {
//     console.log(color,indexOf(color));
// }
// error.

// 7.
// //1.  .push()
// // 2. .unshift()
// // 3. 
// let nums = [1, 2, 3];
// nums.push(4);
// console.log(nums);
// // 4.
// let nums = [1, 2, 3];
// nums.unshift(0);
// console.log(nums);
// // 5. true

// // 8.
// // 1. pop()
// // 2. shift()
// // 3.
// let nums = [100, 200, 300, 400, 500];
// nums.pop();
// console.log(nums);
// // 4.
// let nums = [100, 200, 300, 400, 500];
// nums.shift();
// console.log(nums);
// 5.
// they modify the Array.

// // 9.
// // 1. it returns the index of the element.
// // 2. -1
// // 3.
// const names = ["Jenil", "Mahir", "Arjun"];
// console.log(names.indexOf("Mahir"));
// output:- 1
// // 4.
// console.log(names.indexOf("Krishna"));
// output:- -1
// // 5.
// const named = ["Jenil", "Mahir", "Arjun", "Priyesha"];
// console.log(named.indexOf("Priyesha"));

// // 10.
// // 1. yes
// // 2. 
// const data=["Abhishek", 89, -98, true];
// // 3.
// const datae=["Abhishek", 89, -98, true];
// console.log(typeof(datae[0]))
// // 4.
// // Number
// // 5.
// // boolean/bool

// // 11.
// //1.
// //  used in table data storing and games etc 
// // 2.
// // output- 6
// // 3.
// const matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[1][2])
// // 4.
// const arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// console.log(arr[2])
// // 5.
// const matriix=[
//     [1,2,3],
//     [8,7,6]
// ];
// matriix[1][1]=100
// console.log(matriix)
// // 6.
// const matrix6=[
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]
// ];
// console.log(matrix6[1]);
// // 7.
// const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];
// console.log(marks[2]);
// // 8.
// const num8=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ];
// row=num8.length
// col=num8[0].length
// console.log(row*col)
// // 9.
// const num9=[
//     [1,2,3],
//     [4,5,6,],
//     [7,8,9]
// ];
// num9[1][1]=0;
// console.log(num9)
// // 10.
// const num10=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(num10[0][2]);

// 12.
// 1. it represents marks of the first student.
// 2. to make the program dynamic meaning if user adds more students data then the loop will run through the entire matrix.
// 3. when there is no value defined for the third subject then it becomes undefined and thus the average also becomes undefined(NaN).

// // 13.
// // 1.
// // undefined
// // 2.
// // because the index of the array is not defined. 
// // 3.
// let arr = [10, 20, 30];
// arr[arr.length-1] = 40;
// console.log(arr)
// 4.
// the sparese array is a kind of data where the element is not stored in the block of memory.
// for e.g.
// const colors = ["red", "blue"];
// colors[5] = "green";
// 5.
// true 
// 6.
// array stores data separated by comma but the object stores data in the form of key value pair.

// // 14.
// //1.
// const numbers = [12, 7, 18, 25, 4, 9, 30];
// for (let number of numbers){
//     console.log(number)
// };
// // 2.
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
// for(let i=4; i>=0; i--){
//     city=cities[i]
//     console.log(city)

// };
// // 3.
// const scores = [12, 45, 7, 89, 23];
// let largest=0;
// let secLargest=0;
// for(let i=0; i<scores.length; i++){
//     current=scores[i]
//     if (current>largest){
//         secLargest=largest
//         largest=current
//     }else if (current>secLargest && current!=largest){
//         secLargest=current
//     }
// };
// console.log(secLargest)
// // 4.
// const colors = ["Red", "Blue", "Green", "Yellow"];
// colors.push("Purple")
// colors.unshift("Black")
// console.log(colors)
// // 5.
// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];
// let total=0;
// for(row of matrix){
//     for(num of row){
//         total+=num
//     };
// };
// console.log(total)
// // 6.
// const marks = [45, 67, 89, 32, 76, 91, 54];
// let count=0;
// for(numb of marks){
//     if(numb>50){
//         count+=1
//     };
// };
// console.log(count)
// // 7.
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let arr=[matrix[0][0],matrix[1][1],matrix[2][2]]
// console.log(arr)

// 15.
// 1.D
// 2.c
// 3.c
// 4.c
// 5.B
// 6.D
// 7.B

// 16.
