let amigos = [];

function adicionarAmigo() {
    let nomes = document.querySelector('input').value;
    if (nomes == "") {
        alert('Por favor, insira um nome');
        return;
    }
    amigos.push(nomes);
    document.querySelector('input').value = "";
    
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert('Não há amigos cadastrados para sortear.');
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.querySelector('#resultado').innerHTML = 'O amigo sorteado é: ' + sorteado;

    amigos = amigos.filter(function(amigo) {
        return amigo !== sorteado;
    });

    if (amigos.length === 0) {
        alert('Todos os nomes foram sorteados!');
    }
}