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