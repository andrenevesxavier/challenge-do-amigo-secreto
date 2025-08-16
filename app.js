let listaDeAmigos = [];
let ul = document.getElementById('listaAmigos');

function nomeDoAmigo() {
    let nome = document.querySelector('input').value.trim();
        if (nome == ""){
            mostrarMensagem('h2', 'Por favor, Digite um nome válido!')
        }
        else{
            listaDeAmigos.push(nome);
            mostrarMensagem ('h2', 'Digite o nome dos seus amigos')
        limparCampo()
        listaAmigos()   
        }
        
        
console.log  (listaDeAmigos);

}

function mostrarMensagem(tag, texto) {
    let mudarTexto = document.querySelector(tag);
    mudarTexto.innerHTML = (texto)
}

function limparCampo() {
    let limpaCampo = document.querySelector('input').value = "";
    
}

//
function adicionarAmigo() {
    nomeDoAmigo();
}

function listaAmigos() {
    ul
    ul.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement('li');
        li.textContent = (listaDeAmigos[i]);
        ul.appendChild(li);
        console.log (li)
    }  
}

function sortearAmigo () {
    if (listaDeAmigos == ""){
        mostrarMensagem ('h2', 'Adicione seus amigos antes de sortear');
    }
    else{
        let posição = parseInt(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[posição];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`O amigo secreto sorteado é :  ${amigoSorteado}`);
        ul.innerHTML = ''
    }
    
}
