var idade = prompt('Qual a sua idade?');

if (idade >=0 && idade <=12){
    alert ("Criança");
}
else if (idade>=13 && idade <=17) {
    alert("Adolescente");
}
else if (idade>= 18 && idade <=65) {
    alert("Adulto");
}
else if (idade>= 66 && idade <=110) {
    alert("Sênior");
} else {
    alert("idade invalida");
}