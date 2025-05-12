// // const person ={//objects are instances of class and classes are the prototype
// //     age:20,
// //     name:'Jane',
// //     gender:'Female',
// //     greet:  ()=>{
// //         console.log('Hello there');
// //     console.log('inside text',this);//refers to the object above it
// //     console.log(`your name is ${this.name}`);

// //     }
// // };


// // console.log(person.name);
// // console.log(person['age']);
// // person.country='kenya'
// // console.log({person});
// // person.age=24;
// // console.log(person);//it is mutable
// // delete person.country;//deleting
// // console.log({person});
// // person.greet();
// // // console.log("Out side ",this);//if it is inside to the out side object 
// //  //if we use an arrow function the this function it finds for the global so if we want to use this method we should not use arrow function
// // person.introduction = ()=>{
// //     console.log();

// // console.log(`My name is ${person.name} and ${person.age}`);

// // }
// // person.introduction()



// // const scores = [{ name: 'Max', score: 20 }, { name: "jane", score: 50 }];
// // function topScorer(scores) {
// //   return  scores.forEach(element => {
// //         if (element.score > 50) {
// //             console.log("sddf");
// //         }
// //         else {
            
// //             console.log("hjj");
// //         }
// //     });
// // };
// // topScorer(scores);


// // function Car(model ,color,brand){
// //     this.model=model;
// //     this.color=color;
// //     this.brand=brand
// // }
// // const car =new Car('maybach','black','mercedes');
// // console.log({car});
// // console.log(car.color);
// // car.description = function(){
// //     console.log(`This is a ${this.brand}`);
// // }
// // car.description()


// // Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees. Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. (5 pts)
// function Employee(name,price,salary){

// }
// const employees =new Employee({name:"Berihu",position:"Farmer",salary:200},{name:"Kamaue",position:"Teacher",salary:300},{name:"Steve",position:"Developer",salary:500},{name:"Rose",position:"Developer",salary:600},{name:"Lily",position:"Developer",salary:700})
// employees.updated= function () {
//     Employee.forEach(employe=>{
//         if (Employee.position=="Developer"){
//             Employee.salary+=(Employee.salary*0.1)
//             console.log(`The updated employee list is:${employees}`);
//         };
//     })
// };
// employees.updated(employees)







// // Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order. (5 pts)
// // Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)
// // Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)
// // You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance". (5 pts)







