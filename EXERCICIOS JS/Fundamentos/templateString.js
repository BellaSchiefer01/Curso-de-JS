const nome = 'Rebeca'
const contanecacao = "Olá " + nome + "!"

const template = `
    Olá
    ${nome}!`

    console.log(contanecacao, template)

//expressões
console.log(`1 + 1 = ${1 + 1} `)
//Aqui ele só vai somar, pois está dentro da expressão, ou seja, dentro do ${}

const up = s => s.toUpperCase() //Irá transformar para letra maiuscula.
console.log(`Eiii... ${up('cuidado')}!` )

/* TEMPLATE STRING
    Seu uso simplifica a concatenação de strings e ajuda na criação de textos que envolvem,
    múltiplas linhas ou variáveis, melhorando a legibilidade do código.
*/