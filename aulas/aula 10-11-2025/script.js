console.log("Olá mundo");
        //alert("bem vindo a pagina");

        function mudarTexto(){

            console.log("clicou!");
            let texto = window.prompt("digite uma frase: ");
            console.log(texto);

            document.getElementById("texto").innerText = texto;


        }

let botao = document.getElementById("verificarButton");
console.log(botao);

botao.onclick = function(e) {
    
    e.preventDefault(); // evitar que dados seejam recarregados

    console.log("clicou - funcionou");
    
    let idade = document.getElementById("idadeInput").value;
    
    console.log(idade);

    let resultado = document.getElementById("resultado");
    
    
    if(idade >=18){
        resultado.textContent = "voce é maior de idade";
    } else if (idade < 0){
        resultado.textContent = "idade invalida";
    } else {
        resultado.textContent = "voce é de menor";
    }

}