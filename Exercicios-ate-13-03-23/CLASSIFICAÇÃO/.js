let bonus = prompt('Qual é o valor da bonificação?');
debugger
if (bonus <= 10000){
    alert ("bronze");
}
else if (bonus>10000 && bonus<=50000) {
    alert("prata");
}
else if (bonus>= 100000 && bonus <=500000) {
    alert("ouro");
}
else if (bonus>  500000) {
    alert("platinum");
} 
