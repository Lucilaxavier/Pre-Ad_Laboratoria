function myfunction () {
    let nome = prompt("Digite seu nome:");
   
    
    document.getElementById("saudacao").innerHTML= "Olá " + nome;
    console.log(nome);





let opcao = prompt("Quer iniciar o teste? 1.sim, 2.nao" ) 
if (opcao == "1") {
    let pergunta1 = prompt("Apresenta falta de ar?" ) 
    document.getElementById("resposta").innerHTML=pergunta1;
}

}


myfunction();
