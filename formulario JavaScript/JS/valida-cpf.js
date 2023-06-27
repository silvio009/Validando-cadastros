export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g,"");   // replace = substituir caracteres especiais por nada (remove os caracteres especiais)
    if (validaNumerosRepetidos(cpf)|| validaPrimeiroDigito(cpf)|| validaSegundoDigito(cpf)){
        campo.setCustumValidity('Esse CPF não é valido')
    }
   
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

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}
