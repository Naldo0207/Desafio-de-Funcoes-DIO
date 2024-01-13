let nivel
CalcularPantidasRankeadas(100,10);

function CalcularPantidasRankeadas(vitorias,derrotas){
    let SaldoVitorias = vitorias - derrotas
    if(SaldoVitorias < 10){
        nivel = "Ferro"  

    }else if(SaldoVitorias>=11 && SaldoVitorias <= 20){
        nivel = "Bronze"

    }else if(SaldoVitorias>=21 && SaldoVitorias <= 50){
        nivel = "Prata"

    }else if(SaldoVitorias>=51 && SaldoVitorias <= 80){
        nivel = "ouro"

    }else if(SaldoVitorias>=81 && SaldoVitorias <= 90){
        nivel = "Diamante"

    }else if(SaldoVitorias>=91 && SaldoVitorias <= 100){
        nivel = "Lendário"

    }else if(SaldoVitorias >= 101){
        nivel = "Imortal"

    }

    console.log("O herói tem de saldo de vitórias " + SaldoVitorias + " e esta no nivel de " + nivel)
}


