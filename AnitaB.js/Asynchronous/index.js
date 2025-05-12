// Asynchonouts, call back function
// const hello = (age)=>{
//     console.log(`Hello there ${age}`);
    
// };
// const greet = (name, age,hello) =>{
//     console.log(`hello ${name}`);
//     hello(age);
    
// }
// greet ("Meron",23,hello)

// set time oy
// it prints after the second youinput
//we do 
// setTimeout(()=>{
//     console.log("Thisis a time out");
    
// },3000);
// // in mili second
// setInterval(() => {
//     console.log("THis is interval");
    
// }, 1000);

//closure

const outerFunction =() =>{
    // it forgry]ts th e variable
    let person = "john";
    function innerFunction () {
console.log(`hi ${person}`);

    }
    return innerFunction
}
// we don consoloe here
const callOuterFunction = outerFunction();
callOuterFunction()

//promises takes one call backfunction that takes twoo call back function as an argument
// .then() if it pass,catch() fail, finally()
const internship= false
const promises = new Promise(function (resolve,reject){
    if (internship){
        resolve('Your baby girl got a job');
    }
    else{
        reject('Still finding');
    }
});
promises.then(()=>{
    console.log("I have an Internship");
})
.catch((response)=>{
    console.log(response);
    
})
.finally(()=>{
    console.log("I enjoyed my time at AkiraChix");
    
});
console.log(promises);

const tour = new Promise ((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("I want to tour Netherlands");
    // },1000)
    setTimeout(()=>{
        reject("I do not want");
    },1000)
});
// if we do not use async it says pending
async function visitPlaces() {
    // console.log({visit});
    try{

        const visit = await tour;
        console.log({visit});
        
    }catch (error) {
        console.log(error);
        
    }
}
visitPlaces();



