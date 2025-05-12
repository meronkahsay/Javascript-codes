// let name = " ALICE " ;
// let purename = name.trim()
// let finalname =purename.charAt(0).toUpperCase()+purename.slice(1).toLowerCase();

// // console.log(`Wellcome, ${finalname}`);
// let helprequest ="Help";;
 
// console.log(typeof(helprequest))
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a,b) => (0.5 - Math.random()));
// console.log(condition)

// let array =["a","G","w","e","A","b","g"];

// console.log(array.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())));
// let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
// let unique = arr.filter((item ,index) => arr.lastIndexOf(item)==arr.indexOf(item));
// let duplicates = arr.filter((item,index)=>arr.indexOf(item)!==index);
// console.log(unique)
// console.log(duplicates);


// let arr5 = ["the", "way", "x", 4];
// let check = arr5.match(`/food/gi`)? "matchfounds":"did not found";
// console.log(check)

// let name =" Alice ";
// let namecorrect =name.trim();
// let correct = namecorrect.charAt(0).toUpperCase() + namecorrect.slice(1);
// console.log(`Wellcome ${correct}`);
//  let email ="user@gmail.com";
//  let emailvalid=/^[A-Za-z0-9_.-]+@+[A-Za-z0-9.-]+\.com$/;
//  let condition = emailvalid.test(email)? "Challenge accepted": "not working";
//  console.log(condition);
// let name = "88 88";
// let character = 15>=name.length>=5 && !name.includes(" ")?true : false;
// console.log(character);
// let string="Yes";

// let check = string.toLowerCase().includes("yes")||string.includes("yep") ?true :false;
// console.log(check)
//Answer the following questions and submit your repository link:
// - Write a program in JS that converts the first letter of a string to uppercase given: "The child walked to the market
// - Given a string in JS, write a program to add a character at the third index
// - Given this string, "hello world, hello JavaScript!" write a program to count the occurence of 'hello".
// Write a program that will get the last three characters in a string in JS
// - Write a program that will log the first three characters in a string in JS
// -Given a string in JS, write a program to sort the characters in ascending order Write a program in js that will remove all the spaces in a string
// - Given a string 'greeting', find the index of "t".
// Write a program that will delete the first two characters in a string.
// - Write a program that will felete the last 2 characters in string
// let name = "a nsd sjd ndf";
// console.log(name.replaceAll(" ", ""))
// let edit = name.split(" ");
// let first =edit.map(element=>
//     element[0].toUpperCase()+element.slice(1)
// );
// // edit.forEach((element,index,array )=> {
// //      array[index]= element[0].toUpperCase()+element.slice(1)
// // });
// // let first = edit.map(item=> item[0].toUpperCase() + item.slice(1));
// edit.forEach((element,index,array)=>
// {
//     edit[index]=element[0].toUpperCase() + element.slice(1)
// });
// console.log(edit.join(" ")) 






// Given an array of strings, use a function to reverse all the elements in the string in ascending order 
// and the specific elements in descending order Using JS functions and an array of numbers, return positive
//  if an element within the array is positive,
//  negative if an element is negative, else zero Given an array of objects, 
// where each object represents an employee with an id, name, and salary property, write a function that returns 
// a new array of employee objects sorted by their salary in ascending order. 
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number 
// multiplied by 2. Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values


// let arr= ["sd","df","njs"];
// let newsttr='';
// arr.forEach((item,index)=>{
//  if(index==0){
// newsttr=item;
//  }
//  else{
//    newsttr+=`+${item}`;
//  }
// });
// console.log(newsttr);

// let arr =[3,5,6];
// arr.forEach(num=>console.log(num*2))



// let arr2 = [7,9,8];
// let arr3=arr2.forEach(num=> {
//   if (num%2==0){
//   return num*2;
//   }
//   })
// console.log(arr3);undefined


// let arr2 = [7,9,8];
// let arr3=arr2.map(num=> {
//   if (num%2==0){
//   return num*2;
//   }
//   })
// console.log(arr3);//[ undefined, undefined, 16 ]


// let arr =[1,2,9,6,7];
// let arr2 = arr.reduce((sum,cv) => { return 
//    sum + cv},0)
// console.log(arr2);


function capaitalizeword(str){
   let x = str.trim().toLowerCase();
   return x.charAt(0).toUpperCase()+ x.slice(1);
}
console.log(capaitalizeword("meron"));








