class Paciente{
    constructor(nome, sobrenome, peso, altura){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.peso = peso;
        this.altura = altura;
    }
}
import { paciente } from "../models/paciente.js";

const tituloPrincipal = document.getElementById("titulo-principal")
tituloPrincipal.textContent = "Aoarecida Nutricionista";
let paciente = new Paciente("Maria", "Souza", 90, 1.85);
console.log(paciente.nome);
console.log(paciente.sobrenome);
console.log(paciente.peso);
console.log(paciente.altura);

