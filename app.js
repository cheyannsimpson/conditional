var ele = document.body.querySelector(".box");
var eleAnswer =document.body.querySelector(".answer");

var question =prompt("Enter a number");

function milliseconds(x){
    if (isNaN(x)){
        return "Not a number!"
    }

}else{
    ele.innerHTML="Invalid number, try again";
}

var qTwo=Operator(prompt("Enter an operator"));
var qThree=Number(prompt("Enter a second number"));

if(qOne>2&&qTwo<50){
    eleAnswer.innerHTML="The answer is 50";
}else{
    eleAnswer.innerHTML="Invalid number"
}