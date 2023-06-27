const form = document.getElementById("Agenda-contatos");
let tabela = document.querySelector("#tabela-agenda");
const nome = [];
const numero = [];
const img_apagar= '<img class="icone-lixeira" src="./Imagens/excluir.png" alt="ícone de uma lixeira"/>';



let linhas = "";

form.addEventListener("submit",function(e){
    e.preventDefault();

    adiciona_linha();
    atualiza_tabela();
    exlui_linha();
    
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
        numero.push(input_numero_contato.value)

        let linha ="<tr>";

        linha += `<td>${input_nome_contato.value}</td>`; //Definindo que a primeira coluna irá receber o valor digitado no campo nome
        linha += `<td>${input_numero_contato.value}</td>`; //Definindo que a segunda coluna irá receber o valor digitado no campo numero
        linha += `<td>${img_apagar}</td>`;
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

function exlui_linha(){
    tabela.addEventListener("click",function(event){ //criando um evento de clicar
    let elemento_clicado=event.target; //definindo que a variável elemento_clicado irá receber o elemento que foi clicado

    if(elemento_clicado.classList.contains("icone-lixeira")){ //condição para caso o elemento clicado for o icone de lixeira
        let elemento_pai = elemento_clicado.parentNode; //definindo que a variável elemento_pai receberá o elemento pai do ícone da lixeira, ou seja, a célula que ele está inserido
        let elemento_avo = elemento_pai.parentNode; //definindo que a variável alemento_avo receberá o pai do pai do ícone lixeira, ou seja, a linha que ele está inserido
        elemento_avo.remove(); // o elemento avô da lixeira será removido
    }
    
})
}

