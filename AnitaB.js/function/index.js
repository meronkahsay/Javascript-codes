function add(num1 ,num2){
    const sum=num1+num2;
  return sum;
};
console.log(add(10,20));
//scopes

function subtract(num1,num2){
    const subtract=num1-num2;
    return subtract;

};
console.log(subtract(20,5))

function greetings(name){
    return `hello${name}`
}

const age1 = new Date().getFullYear();
const age =(birthyear)=>{
    const currentyear =new Date().getFullYear();
    const personage = currentyear-birthyear;
    return personage
}
console.log(age(2004));

(function(num1,num2) {
    const sum = num1 + num2;
    console.log({sum})
})(30,20);


personalbar()
function personalbar(){
    console.log("Meron");
}