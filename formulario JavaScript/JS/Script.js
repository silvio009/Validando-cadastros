import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeidade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll('[required]') // puxar a lista de elementos do HTML 

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // blur = tirar o foco do input (ex: foi para outro campo do formulario)  --> depois disso a funcion verifica campo fará a verificação!
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name = "aniversario" && campo.value !=""){
        ehMaiorDeidade(campo);
    }
}