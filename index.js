//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5;i <=100; i++){
        console.log(i);
    }
};


//Write a function fiveToOneHundred that console logs all numbers from 5 to 100.

fiveToOneHundred();

function multiplesOfThree(){
    for(let i = 3; i<=100; i= i + 3){
        console.log(i);
    }
    
}

multiplesOfThree();

console.log("____________________________");

function multiplesOfThreeOrFive(){
     for(let i = 3; i<=100; i++){
        if (i % 3 == 0 || i % 5 ==0 ){
            console.log(i);
        }
     }

}

multiplesOfThreeOrFive();

console.log("____________________________");