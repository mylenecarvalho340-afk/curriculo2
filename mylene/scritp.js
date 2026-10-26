const btnEditar = document.getElementById("btnEditar");
const btnEditar = document. getElementById("btnSair")

const nome = document.querySelector(".cabecalho h1");
const cidade = document.getElementById("cidade");

btnEditar.addEventlistener("click", function() {
  const novoNome = prompt("digite seu nome:"); 

     if (novoNome) !== null && novoNome.trim() !=="") {
       nome.textContent = novoNome.trim(); 

    }
  
    const novaCidade = prompt("Digite seu endereço:");

if (novaCidade && novaCidade.trim() !=="") {
    cidade.innerHTML = "<strong>Endereço:</strong>" + novaCidade.trim();

   };
 
botaoSair.addEventlistener("click", function(){
    const resposta = confirm("Deseja sair  do perfil");

    if(resposta){
        alert("voce saiu do perfil");

    if(confirmar){
      alert( voce saiu do perfeil);
    }
});




