const people =["gane ","Meron","daniella"];
console.log({people});
//Adding items in an array
people.push("john");
people.unshift("adding item in the start");
people.shift();
people.pop();
console.log({people});
//Map,filter,forEach, for ,reduce,find
let nums =[10,20,30,40];
// const double =nums.map(number => number*2);
// const newNums=[];
// nums.forEach(number =>{
//     newNums.push(number*2)
// });
// console.log([newNums])
let count = 0;
for(let i=0; i<nums.length;i++){
    count +=nums[i];
}
console.log({count});
const sum = nums.reduce((acc,item) => acc + item,0); //initial
console.log(sum);

const digits = [1,2,3,4,5,6,7];
const even = digits.filter(item => Number( item%2 ===0));
console.log([even]);

const discover = digits.find(person => person===2);// the first charachter
console.log({discover});

const [a,b,c, ...rest] = digits;
console.log({a});
console.log({b});
console.log({c});
console.log({rest});