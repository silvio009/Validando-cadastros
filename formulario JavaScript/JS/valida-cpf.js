export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g,"");   // replace = substituir caracteres especiais por nada (remove os caracteres especiais)
    validaNumerosRepetidos(cpf);

    console.log(validaNumerosRepetidos(cpf))
}

function validaNumerosRepetidos(cpf){   // funcion para verificar se o CPF passado pelo clinete é valido e não tenha nenhum número que esteja se repetindo
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
        
    ]
     return numerosRepetidos.includes(cpf);
}
