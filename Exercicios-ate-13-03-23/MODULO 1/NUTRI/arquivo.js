import { PacienteController } from "../controllers/paciente-controller.js";

let controller = new PacienteController();
let formulario = document.querySelector('.form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.criarPaciente();
});

import { Paciente } from "../models/paciente.js";
import { PacienteList } from "../models/paciente-list.js";

export class PacienteController {
    #inputNome;
    #inputSobrenome;
    #inputPeso;
    #inputAltura;
    #listaPacientes;

    constructor() {
        this.#inputNome = document.querySelector('#nome');
        this.#inputSobrenome = document.querySelector('#sobrenome');
        this.#inputPeso = document.querySelector('#peso');
        this.#inputAltura = document.querySelector('#altura');
        this.#listaPacientes = new PacienteList();
    }

    criarPaciente() {
        let nome = this.#inputNome.value;
        let sobrenome = this.#inputSobrenome.value;
        let peso = this.#inputPeso.value;
        let altura = this.#inputAltura.value;
        let paciente = new Paciente(nome, sobrenome, peso, altura);
        this.#listaPacientes.adiciona(paciente);
        console.log(this.#listaPacientes.pacientes);
        this.#listaPacientes.remove(paciente);
        console.log(this.#listaPacientes.pacientes)
    }

}

export class Paciente {
    #nome;
    #sobrenome;
    #peso;
    #altura;

    constructor(nome, sobrenome, peso, altura) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#peso = peso;
        this.#altura = altura;
    }

    equals(outroPaciente) {
        if (!outroPaciente instanceof Paciente) {
            return false;
        }
        return this.#nome === outroPaciente.#nome && this.#sobrenome === outroPaciente.#sobrenome;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get peso() {
        return this.#peso;
    }

    get altura() {
        return this.#altura;
    }

    set peso(peso) {
        this.#peso = peso;
    }

}