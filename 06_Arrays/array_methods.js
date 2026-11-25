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