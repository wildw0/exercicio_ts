"use strict";
//funcao de saudacao que deverá receber um nome e retornar a concatenação "olá" +nome
const nome = "Arthur";
const saudacao = "olá";
function saudar(nome, saudacao) {
    return saudacao + ' ' + nome;
}
console.log(saudar(nome, saudacao));
const nome2 = "Arthur";
function saudar2(nome2) {
    return 'Olá' + ' ' + nome;
}
console.log(saudar2(nome2));
