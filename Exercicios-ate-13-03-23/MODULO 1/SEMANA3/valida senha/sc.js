//Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
//A senha válida é o número 1234. Devem ser impressas as seguintes mensagens: 
//ACESSO PERMITIDO caso a senha seja válida. ACESSO NEGADO caso a senha seja inválida.

let senha= prompt("Digite sua senha")
let senhaValida= 1234;

if(senhaValida != senha){
    alert("ACESSO NEGADO")
}
else{
    alert("ACESSO PERMITIDO")
}