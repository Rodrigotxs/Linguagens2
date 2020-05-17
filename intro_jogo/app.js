//pontuacao dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
//jogador atual
var jogadorAtual = 0;
//jogadores
var jogadores = document.querySelector('#jogadores');
//botão lançar dado
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
//passar a vez
var botaoPassarVez = document.querySelector('#botao-passar-vez');
//botao novo jogo
var botaoNovoJogo = document.querySelector('#botao-novo-jogo');
//rodada 0
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
//rodada 1
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');


var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');


var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

botaoPassarVez.addEventListener("click", function () {
    jogadorAtual = 1 - jogadorAtual;
})

botaoNovoJogo.addEventListener("click", function () {
    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];

    jogadorAtual = 1 - jogadorAtual;

    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
})

botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
    }
    else {
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
    }
})
