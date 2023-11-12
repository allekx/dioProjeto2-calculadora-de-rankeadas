// Projeto calculadora de partidas Rankeadas
// entrada da quantidade de vitórias e derrotas
vitoria = 70
derrotas = 16

// Utilizando função para subtrair e retornar resultado
function calculadora(vitoria, derrotas){
    return vitoria - derrotas
}

// Utilizando estrutura de decisão para determinar saldo de vitórias e nível do herói
let resultado = calculadora(vitoria, derrotas)

if (resultado <= 10){
    nivel = "Ferro"
}
else if (resultado >= 11 && resultado <= 20){
    nivel = "Bronze"
}
else if (resultado >= 21 && resultado <= 50){
    nivel = "Prata"
}
else if (resultado >= 51 && resultado <= 80){
    nivel = "Ouro"
}
else if (resultado >= 81 && resultado <= 90){
    nivel = "Diamante"
}
else if (resultado >= 91 && resultado <= 100){
    nivel = "Lendário"
}
else if (resultado >= 101){
    nivel = "Imortal"
}


// exibindo mensagem final
console.log("O Herói tem saldo de " + resultado, "está no nivel de " + nivel)