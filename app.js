var ele = document.body.querySelector(".ele");

var numOne =Number(prompt("Enter a number"));


if(Number.isNaN(numOne)){
    ele.innerHTML="Invalid number, try again";
}

var qTwo=(prompt("Enter an operator"));
if(qTwo=="+"||qTwo=="-"||qTwo=="*"||qTwo=="/"){

}else{
    ele.innerHTML="That is not an operator, sorry!";
}

var qThree=Number(prompt("Enter a second number"));
if(Number.isNaN(qThree)){
    ele.innerHTML="Invalid number, try again";
}
if(qTwo=="+") {
    var finalAdd=(numOne + qThree);
    ele.innerHTML=`The answer is ${finalAdd}`;
}else if(qTwo=="-") {
    var finalSub=(numOne - qThree);
    ele.innerHTML=`The answer is ${finalSub}`;
}else if(qTwo=="*") {
    var finalMult=(numOne * qThree);
    ele.innerHTML=`The answer is ${finalMult}`;
}else if(qTwo=="/") {
    var finalDiv=(numOne / qThree);
    ele.innerHTML=`The answer is ${finalDiv}`;
}