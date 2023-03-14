/* ARRAY TUDO DENTRO DAS CHAVES []

let linguagens = ["Javascript", "PHP" ,"cobol", "Java"];
console.log(linguagens);

*PUSH - puxa o final da lista entre parentes("")*
linguagens.push("Java");
console.log(linguagens);

*UNSHIFT - retorna o começo da lista entre parentes ("")*
linguagens.unshift("python"); 
console.log(linguagens);

*SPLICE - substitui, adiciona ou remove ()*
let posicao = 1;
linguagens.splice(posicao, 1);
console.log(linguagens);

*POP - remove ultimo elemento da Array*
linguagens.pop();
console.log(linguagens);*/


/*
*MAP - mapea, percorre e retorna valor*
let numeros = [2,4,6];
let dobro = numeros.map(numero => {
    return numero * 2;
});

console.log(dobro);*/

/*
*FILTER - filtra a lista*
let numeros = [2,5,7,12,14,18];
let filtrarNumeros = numeros.filter(numero =>{
    return numero >10;
});
console.log(filtrarNumeros);*/

/*
*REDUCE - passa cada numero ou elemento da lista*
const euros = [29.76, 41.35, 46.50];
const soma = euros.reduce((total, quatidade) => total + quantidade);

console.log(soma);*/

/* 
* SPREAD -  copia conteudo de Array e cria outro Array ... simbolo do spread
const num1 = [2,4,6,8];
console.log(num1);

const num2 = [1,3,5,7];
console.log(num2);

const newArray = [1,3,5,7, ...num1];
console.log(newArray);

const newArray2 = [...num2,...num1];
console.log(newArray2);*/









