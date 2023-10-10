function comprar() {
    //recuperar as seguintes informações: tipo de ingresso e quantidade
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
        
    //subtrair da quantidade disponível
    if (tipoDeIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoDeIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    } 

    //limpar a quantidade
    document.getElementById('qtd').value = '';
}

function comprarPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (quantidade > pista) {
        alert('Quantidade indisponível para o tipo Pista!');
    } else {
        pista -= quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso!');
    }       
}

function comprarSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > superior) {
        alert('Quantidade indisponível para o tipo Cadeira supeior!');
    } else {
        superior -= quantidade;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > inferior) {
        alert('Quantidade indisponível para o tipo Cadeira supeior!');       
    } else {
        inferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso!');
    }
}
