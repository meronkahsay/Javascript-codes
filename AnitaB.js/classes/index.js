// Adding anew property /method to a class
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.greet = function(){
//         return `Hello my name is ${this.name} and my age is ${this.age}`
//     }

// };
// const name = new Person("Meron",45);
// console.log({name});

// Person.prototype.nationality="Kenyan";
// console.log({name});
// name.nationality="Kenyan";
// console.log(name);
// function Driver(name,carMOdel,rating){
//     this.name=name;
//     this.carmodel=carMOdel;
//     this.rating=rating;
//     this.getDetails=this.getDetails
// }
// Driver.prototype.getDetails= function(){
//     return `This drivers name is ${this.name} and the car model is ${this.carmodel}.`

// }
// Driver.prototype.isTopRated=function(){
// return this.rating>4.5
// }
// const driverOne= new Driver("Abebe","subaru",8);
// const driverTwo = new Driver("Kamaue","Toyota",3);
// console.log(driverOne);
// console.log(driverOne.getDetails());
// console.log(driverOne.isTopRated());

// console.log(this.getDetails());

// console.log(driverTwo);
// console.log(driverTwo.getDetails());
// console.log(driverTwo.isTopRated());

// class Car{
//     constructor (model,color,platenumber){
//     this.model=model;
//     this.color= color;
//     this.platenumber=platenumber;
// }
// accelerate(speed){
// return `${this.model} accelerates at${speed}`
// }
// }
// const toyota = new Car("model","bue",90000);
// console.log(toyota);
// console.log(toyota.accelerate(67));


// class Student{
//     constructor (name,course,scores){
//         this.name=name;
//         this.course=course;
//         this.scores= scores;
   
//     }
// }
// const name=new Student("Meron","javascript",[98,99,89])


// Student.prototype.getAverageScore = function(){
//     return this.isPassing()>50
// }
//  Student.prototype.isPassing= function(){
//     const sum= this.scores.reduce((sum,element)=>sum+element,0);
//     const average=sum/this.scores.length
//     return average>50;
// }




// console.log(name.getAverageScore())
// console.log(name.isPassing());
// class Bus extends Car{
//     constructor(model,car,plateNumber,seats){
//         super(model,car,plateNumber);
//         this.seats= seats;
//     }
// }
// const matatu = new Bus("MAzada","grey","Kbv 004",14)
// console.log(matatu);
// console.log(matatu.accelerate(65));
//ascynchronous function
// class Bank{
//     constructor(name, account){
//         this.name = name;
//         this.account=account;
//     }
//         addAccount(newAccount,accountNumber){
//       account.push({newAccount,accountNumber})
// return account;
//         }
//         removeAccount(newAccountNumber){
//             return account.filter(element => element.accountNumber!== newAccountNumber)
//         }

//         printAccount(accountNumber){
//             return account.filter(element => element.accountNumber==accountNumber)
//         }
    
// // }
// const account = [{accountName:"bank",accountNumber:1235},{accountName:"ussd",accountNumber:4567}]
// // const bank = new Bank("Wegagen",account)
// // console.log(bank.addAccount("abebe",5678));
// // console.log(bank.removeAccount(4567));
// // console.log(bank.printAccount(4567));
// console.log(account.accountNumber);

class Student{
    constructor(name,course,scores){
      this.name=name;
      this.course=course;
      this.scores=scores;
    }
}
Student.prototype.add = function(){
    return this.scores.reduce((sum,score)=>sum+score,0);
}
Student.prototype.getAverageScore=function(){
   return this.add()/this.scores.length;
}
Student.isPassing =function(){
  return this.getAverageScore() >= 50 ? true : false;
}
Student.totalScore =function(){
    return this.getAverageScore()*this.scores.length;
}
const student= new Student("Alem","Python",[20,30,40,]);
console.log({student});
console.log( `Hello ${student.name} here is your sum result is ${student.add()} `);
console.log(`Hello ${student.name} here is your ${student.getAverageScore()}`);
console.log(`${student.name} your status is ${student.isPassing()}`);
console.log(`${student.name} your total Score is here ${student.totalScore()}`);

