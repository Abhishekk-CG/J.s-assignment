// // 1.
// const colors=["Green","Red","Blue"];
// colors.push("Yellow")
// colors.push("Orange")
// console.log(colors)

// // 2.
// const numbers=[];
// numbers.push(5,10,15)
// console.log(numbers)

// // 3.
// const stationary=["Pen", "Book"]
// stationary.push("Eraser","scale")
// console.log(stationary)

// 4.
// at the end of it 

// 5.
// yes it changes the array by adding the element at the last of it. 

// // 6.
// const sixth=[1,2,3,4,5]
// sixth.pop() //5
// sixth.pop() //4
// console.log(sixth) //[1, 2, 3]

// // 7.
// const seventh=["Red", "Blue", "Green"]
// var removed=seventh.pop();
// console.log(seventh)
// console.log(removed)

// // 8.
// const eighth=[100, 200, 300, 400];
// var removed=eighth.pop()
// console.log(eighth)
// console.log(removed)

// 9.
// pop returns the array by removing the last Element of it. 

// 10.
// it simply gives us undefined. 

// // 11.
// var eleventh=["CSS", "JavaScript"]
// eleventh.unshift("HTML")
// console.log(eleventh)

// // 12.
// var twelveth=[20, 30];
// twelveth.unshift(5,10)
// console.log(twelveth)

// // 13.
// var thirteenth=[];
// thirteenth.unshift("puna","Goa","Gaya")
// console.log(thirteenth)

// 14.
// Unshift adds the new element at the very starting of the Array. 
// 15.
// yes it can add more than one element in the Array. 

// // 16.
// var sixxteenth=["puna","Goa","Gaya","purnia"]
// sixxteenth.shift()
// console.log(sixxteenth)

// // 17.
// var seventeenth=[10, 20, 30, 40]
// var removed=[seventeenth.shift()]
// removed.push(seventeenth.shift())
// console.log(seventeenth)
// console.log(removed)

// // 18.
// var athara=["Apple", "Banana", "Mango"];
// var removed=[athara.shift()]
// console.log(athara)
// console.log(removed)

// 19.
// shift() removes the first element from the array having index 0 but pop() removes
// the last element having index array.length-1.

// 20.
// shift() returns the array by removing its first element. 

// // 21.
// var ikkis=["Apple", "Banana", "Mango","grapes","Guava","lichi"];
// console.log(ikkis.indexOf("Banana"))

// // 22.
// var bais=["A", "B", "C", "B", "D"];
// console.log(bais.indexOf("B"))

// // 23.
// var teis=["Abhishek","Abhinav","Abhinash","Abhishek"];
// console.log(teis.indexOf("Abhishek"))

// 24.
// if the element is not found it returns -1. 

// 25.
// if the same element exists twice it returns the index of the first occuring 
// element inside the Array. 

// // 26.
// var chabbis=["X", "Y", "X", "Y", "X"];
// console.log(chabbis.lastIndexOf("X"))

// // 27.
// var sattais=["X", "Y", "Z", "Y", "X"];
// console.log(sattais.lastIndexOf("X"));
// console.log(sattais.lastIndexOf("Y"));

// // 28.
// var atthais=["S","S","S","S","S"];
// console.log(atthais.lastIndexOf("S"))

// 29.
// The lastIndexOf() counts the index from the opposite side of the normal traversing 
// like it checks the index from right to left but indexOf() gives us the index from 
// LTR and lastIndexOf() give us the last index of repeating element but indexOf()  
// gives the index of first time occuring object in repeating element. 

// 30.
// when we need the last index of repeating element of an array we prefer lastIndexOf(). 

// // 31.
// let iktis=["Abhi","Abhishek"];
// if(iktis.includes("Abhishek ")){
//     console.log("Present")
// }else{
//     console.log("Absent")
// };

// // 32.
// let battis=[11, 22, 33, 44];
// console.log(battis.includes(33,55))

// // 33.
// let tetis=["Hindi","Hindi","Hindi","English"];
// console.log(tetis.includes("Hindi","Sanskrit"))

// 34.
// includes return the boolean value of the result of finding element in any Array. 

// 35.
// No, for string includes return true if any one condition is satisfied but for 
// number to get true it will have to satisfy all the condition. 

// // 36.
// let chattis=[1,2,3,4,5];
// console.log(chattis.reverse());

// // 37.
// let sentis = ["A", "B", "C", "D"];
// console.log(sentis.reverse());

// // 38.
// let city=["UAE","Gaya","Puna","Goa"];
// console.log(city.reverse())

// 39.
// It modifies the original one. 

// 40.
// in-place means it modifies the original one instead of creating a new copy in  a 
// separate memory. 

// // 41.
// var ektalis=["Abhishek","Abhinav","Abhinash","Abhishek"];
// console.log(ektalis.sort());

// // 42.
// var bayalis=["Dog", "Cat", "Elephant", "Ant"];
// console.log(bayalis.sort());

// // 43.
// var tetalis=[40, 100, 5, 25];
// console.log(tetalis.sort());

// 44.
// because while sorting when it checks the first digit from the lest it see that 
// 1 is the smallest and so it plaves at the starting position so we can say that 
// sort() in the case of number it starts the process from left to right. 

// 45.
// sort() modifies tyhe original array in place.

// // 46.
// let chiyalis=["HTML", "CSS", "JavaScript","Python"];
// console.log(chiyalis.join("|"))

// // 47.
// let setalis=["HTML", "CSS", "JavaScript"];
// console.log(setalis.join("-"))

// // 48.
// let artalis=["Hindi","English","Sankrit"];
// console.log(artalis.join("/"))

// 49.
// It automatically takes comma as a separator. 

// 50.
// it will simply return that String. 

// // 51.
// let arr1=[1,2];
// let arr2=[8,9];
// let arr3=arr1.concat(arr2);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// // 52.
// let arr1=[1,2];
// let arr2=[3,4];
// let arr3=arr1.concat(arr2);
// console.log(arr3)

// // 53.
// let arr1=[1,2];
// let arr2=[3,4];
// let arr3=[5,6];
// let arr4=arr1.concat(arr2,arr3);
// console.log(arr4)

// 54.
// no concat doesnt changes the original array inbstead it creates a new array and 
// stores the data insode it.

// 55.
// yes we can combine as many array as we can. 

// // 56.
// let arr=[5, 10, 15, 20, 25, 30];
// console.log(arr.slice(2,5));

// // 57.
// let arr=[10, 20, 30, 40, 50];
// console.log(arr.slice(1,4));

// // 58.
// let arr=[10, 20, 30, 40, 50, 60];
// console.log(arr.slice(0,4));

// 59.
// no slice() does'nt modify the original array. 

// 60.
// it will silce from the starting index till the end of the Array. 

// // 61.
// let studdent=["Jenil", "Mahir", "Arjun"];
// studdent.splice(1,0,"Krishna")
// console.log(studdent)

// // 62.
// let num=[10, 20, 30, 40, 50];
// num.splice(1,2,89,98);
// console.log(num)

// // 63.
// let num=[100, 200, 300];
// num.splice(1,1,250);
// console.log(num);

// 64.
// slice() returns a portion of sn array but splice() modifies the array 
// by taking the deletingstating index number of deletion and input. 

// 65.
// yes it changes the original Array(). 

