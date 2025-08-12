let listaDeAmigos = [];

function nomeDoAmigo() {
    let nome = document.querySelector('input').value
        if (nome == ""){
            mostrarMensagem('h2', 'Por favor, Digite um nome válido!')
        }
        else{
            listaDeAmigos.push(nome);
            mostrarMensagem ('h2', 'Digite o nome dos seus amigos')
        }
        limparCampo()
        
console.log  (listaDeAmigos);

}

function mostrarMensagem(tag, texto) {
    let mudarTexto = document.querySelector(tag);
    mudarTexto.innerHTML = (texto)
}

function limparCampo() {
    let limpaCampo = document.querySelector('input').value = "";
    
}

function adicionarAmigo() {
    nomeDoAmigo()
}

function mostrarListaNaTela(){
    let lista = document.getElementById('listaAmigos');
    let novoItemLista = listaDeAmigos
    lista.appendChild(novoItemLista);
}