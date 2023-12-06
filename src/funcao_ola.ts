const nome = "Arthur";
const saudacao = "olá";

function saudar(nome: string, saudacao: string): string {
    return  saudacao + ' ' + nome;
}

console.log(saudar(nome, saudacao));

//##Após reler o que pedia a atividade fiquei na dúvida ai fiz dessas duas formas##

const nome2 = "Arthur";

function saudar2(nome2: string): string {
    return  'Olá' + ' ' + nome;
}

console.log(saudar2(nome2));
