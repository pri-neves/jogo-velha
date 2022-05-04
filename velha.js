var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
//var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor != null){
        return;
    }
    var quadrado = document.getElementById(id);
   if(quadrado.innerHTML !== '-'){
       return;
   }
    quadrado.innerHTML = jogador;
   quadrado.style.color= '#000';
   if(jogador === 'X'){
       jogador = 'O';
   } else jogador = 'X';
   //console.log("Clicou " + id);
   mudarJogador(jogador);
   checarVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    var q1 = document.getElementById(1);
    var q2 = document.getElementById(2);
    var q3 = document.getElementById(3);
    var q4 = document.getElementById(4);
    var q5 = document.getElementById(5);
    var q6 = document.getElementById(6);
    var q7 = document.getElementById(7);
    var q8 = document.getElementById(8);
    var q9 = document.getElementById(9);

    if(checarSequencia(q1,q2,q3)){
        mudaCorQuadrado(q1,q2,q3);
        mudarVencedor(q1);
        return;
    }
    if(checarSequencia(q4,q5,q6)){
        mudaCorQuadrado(q4,q5,q6);
        mudarVencedor(q4);
        return;
    }
    if(checarSequencia(q7,q8,q9)){
        mudaCorQuadrado(q7,q8,q9);
        mudarVencedor(q7);
        return;
    }
    if(checarSequencia(q1,q4,q7)){
        mudaCorQuadrado(q1,q4,q7);
        mudarVencedor(q1);
        return;
    }
    if(checarSequencia(q2,q5,q8)){
        mudaCorQuadrado(q2,q5,q8);
        mudarVencedor(q2);
        return;
    }
    if(checarSequencia(q3,q6,q9)){
        mudaCorQuadrado(q3,q6,q9);
        mudarVencedor(q3);
        return;
    }
    if(checarSequencia(q1,q5,q9)){
        mudaCorQuadrado(q1,q5,q9);
        mudarVencedor(q1);
        return;
    }
    if(checarSequencia(q3,q5,q7)){
        mudaCorQuadrado(q3,q5,q7);
        mudarVencedor(q3);
        return;
    }
    if(q1.innerHTML!='-' && q2.innerHTML!='-' &&
        q3.innerHTML!='-' && q4.innerHTML!='-' &&
        q5.innerHTML!='-' && q6.innerHTML!='-' &&
        q7.innerHTML!='-' && q8.innerHTML!='-' &&
        q9.innerHTML!='-'){
        alert("DEU VELHA!");
        reiniciar();
    }
}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

}

function mudaCorQuadrado(q1,q2,q3){
    q1.style.background = '#0f0';
    q2.style.background = '#0f0';
    q3.style.background = '#0f0';
}

function checarSequencia(q1,q2,q3){
    var eigual = false;

    if(q1.innerHTML != '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i<=9;i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = "#eee";
        quadrado.style.color="#eee";
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}