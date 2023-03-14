let nome = window.prompt("Digite o seu nome:");
console.log(nome);

let idade = window.prompt("Digite a sua idade:");
console.log(idade);

let cidade = window.prompt("Digite a sua cidade:");
console.log(cidade);

document.getElementById("nome").innerHTML = nome;
document.getElementById("idade").innerHTML = idade;
document.getElementById("cidade").innerHTML = cidade;
