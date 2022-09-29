//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5;i <=100; i++){
        console.log(i);
    }
};

console.log("____________________________");
//Write a function fiveToOneHundred that console logs all numbers from 5 to 100.

fiveToOneHundred();

function multiplesOfThree(){
    for(let i = 3; i<=100; i= i + 3){
        console.log(i);
    }
    
}
console.log("____________________________");
multiplesOfThree();


function multiplesOfThreeOrFive(){
     for(let i = 3; i<=100; i++){
        if (i % 3 == 0 || i % 5 ==0 ){
            console.log(i);
        }
     }

}

multiplesOfThreeOrFive();

console.log("____________________________");

function untilNum(num){
    for(let i = 1;i <= num; i++){
        console.log(i);
    }
}

untilNum(42);
console.log("____________________________");

function multiply(num1,num2){
    return num1 * num2;
}

console.log(multiply(2,4));
console.log(multiply(10,-5));
console.log(multiply(3,7.5));
console.log("____________________________");

function add(num1, num2){
    if (num1 === num2){
        return num1 * 6;
    } else {
        return num1 + num2;
    }
}

console.log(add(2,4));
console.log(add(10, -5));
console.log(add(3, 7.5));
console.log(add(5, 5));
console.log(add(6, 6));
console.log("____________________________");

function isNegative(num){
    if (num < 0){
        return true;
    }else{
        return false;
    }
}

console.log(isNegative(3))         //returns false
console.log(isNegative(-2))        //returns true
console.log(isNegative(Math.PI))   //returns false

console.log("____________________________");

function triangleArea(height, base){
    return .5*height*base;
}

console.log(triangleArea(5, 7));
console.log(triangleArea(6, 8));

console.log("____________________________");

function betweenTwentyAndFourty(num){
    if (num >= 20 && num <= 40){
        return true;
    }else{
        return false;
    }
}
console.log(betweenTwentyAndFourty(4))      //return false
console.log(betweenTwentyAndFourty(21))     //return true
console.log(betweenTwentyAndFourty(99))     //return false
console.log(betweenTwentyAndFourty(101))    //return false


console.log("____________________________");

function largest(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
      return num1;
  } else if (num2 > num1 && num2 > num3) {
      return num2;
  } else {
      return num3;
  }
}

console.log(largest(4, 6, 8));
console.log(largest(30, 22, 17));
console.log(largest(41, 108, 86));

console.log("____________________________");

function printTime(){
    let time = new Date()
    let formattedTime= time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    console.log(formattedTime)
}

printTime()

console.log("____________________________");

function isLeapYear(year){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else {
        return false;
    }
}

console.log([isLeapYear(2000), isLeapYear(1900), isLeapYear(2020), isLeapYear(1999)]);

console.log("____________________________");

function getExtention(fileName){
    
    let extention = fileName.split(".")
    return "." + extention[1]
}

console.log([getExtention("hello.txt"),getExtention("app.js"),getExtention("README.md")])

console.log("____________________________");

function absoluteNineteen(num){
    const absolute = Math.abs(num - 19);
    if (num > 19){
        return absolute * 3;
    } else {
        return absolute;
    }
}

console.log(absoluteNineteen(25));
console.log(absoluteNineteen(0));
console.log(absoluteNineteen(-6));
console.log(absoluteNineteen(20));

console.log("____________________________");

console.log("____________________________");
