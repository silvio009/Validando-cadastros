const campoDoFormulario = document.querySelectorAll("[required]"); // puxar a lista de elementos do HTML 

campoDoFormulario.forEach((campo)=>{
   campo.addEventListener("blur", ()=> verificaCampo(campo)) // blur = tirar o foco do input (ex: foi para outro campo do formulario)  --> depois disso a funcion verifica campo fará a verificação! 
})
function verificaCampo(campo){

}