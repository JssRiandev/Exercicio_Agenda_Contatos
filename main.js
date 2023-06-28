const form = document.getElementById("Agenda-contatos");
let nome = [] ;
let numero = [];
let linhas = "";

form.addEventListener("submit",function(e){
    e.preventDefault();

    adiciona_linha();
    atualiza_tabela();
    
})

function adiciona_linha(){

    const input_nome_contato = document.getElementById("nome-contato");
    const input_numero_contato = document.getElementById("numero-contato");
    
    if(nome.includes(input_nome_contato.value) ){
        alert(`O contato ${input_nome_contato.value} já existe na sua lista`)

    } else if(numero.includes(input_numero_contato.value)){
        alert(`O número ${input_numero_contato.value} já pertence a um contato na sua lista`)
    } else{

        nome.push(input_nome_contato.value);
        numero.push(input_numero_contato.value);
        
        let linha ='<tr>';

        linha += `<td id ="nome">${input_nome_contato.value}</td>`; //Definindo que a primeira coluna irá receber o valor digitado no campo nome
        linha += `<td id ="numero">${input_numero_contato.value}</td>`; //Definindo que a segunda coluna irá receber o valor digitado no campo numero
        linha += "</tr>"; //Fechando a tag tr

        linhas += linha ;
    }

    input_nome_contato.value = ""; //Limpando os campos ao adcionar a linha na tabela
    input_numero_contato.value ="";

}

function atualiza_tabela(){

    const corpo_tabela = document.querySelector("tbody"); //A constante corpo_tabela irá receber o conteúdo da tag tbody
    corpo_tabela.innerHTML = linhas; // Inserindo o conteúdo da variável linhas dentro da tag tbody do html
}


