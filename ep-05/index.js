// // function declaration
// function sum(num1, num2){
//    console.log(num1+num2);
// }
 
// sum(100,200); // call

// // function expression

// const sumOfTwoNumber = function (num1, num2){
//     console.log(num1+num2);
// };

// sumOfTwoNumber(1,2);

// // callback function

// const doSomething = function(callback){
//     console.log("samose ban rhe hai...");
//      setTimeout(function(){
//         callback();
//      }, 3000);
// }

// const callback = function(){
//     console.log("samose ready hai");
// }

// doSomething(callback);



// Higher order functions

const radius = [1,2,3,4];

const area = function(radiusArray){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){
        const a = Math.PI * radiusArray[i] * radiusArray[i];
        result.push(a);
    }
    return result;
}

const ans = area(radius);
console.log(ans);

const circumference = function(radiusArray){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){
        const a = 2 * Math.PI * radiusArray[i];
        result.push(a);
    }
    return result;
}

const ans2 = circumference(radius);
console.log(ans2);


// 

const formulaOfArea = function(r){
    return Math.PI * r * r;
}

const formulaOfCircumference = function(r){
    return 2 * Math.PI * r;
}


const calculate = function(radiusArray, formula){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){
        const a = formula(radiusArray[i]);
        result.push(a);
    }
    return result;
}
const ans3 = calculate(radius, formulaOfArea);
const ans4 = calculate(radius, formulaOfCircumference);
console.log(ans3);
console.log(ans4);

// Arrow function 

const multiply = (num1, num2) => {
   return num1*num2;
}
console.log(multiply(2,3));


// import  name  from "../ep-07";
// console.log(name);

 