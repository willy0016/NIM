let jogador_atual = 1;
let palitos_restantes = 20;

function gerar_palitos() {
  let tabuleiro = document.getElementById("tabuleiro");
  for (let i = 0; i < palitos_restantes; i++) {
    let palito = document.createElement("div");
    palito.classList.add("palito");
    tabuleiro.appendChild(palito);
  }
}

function atualizar_estado_jogo(num_palitos) {
  for (let i = 0; i < num_palitos; i++) {
    let palito = document.getElementsByClassName("palito")[0];
    palito.remove();
  }

  palitos_restantes -= num_palitos;
  document.getElementById("palitos-restantes").innerHTML = palitos_restantes;

  if (palitos_restantes <= 0) {
    alert("Jogador " + jogador_atual + " perdeu!");
    document.getElementById("jogar-btn").style.display = "none";
    document.getElementById("jogar-novamente-btn").style.display = "block";
  } else {
    jogador_atual = (jogador_atual === 1) ? 2 : 1;
    document.getElementById("jogador-atual").innerHTML = jogador_atual;
    document.getElementById("num-palitos").value = "";
    alert("Jogador " + jogador_atual + ", é a sua vez.");
  }
}

function verificar_ganhador() {
  if (jogador_atual === 1) {
    alert("Jogador 2 ganhou!");
  } else {
    alert("Jogador 1 ganhou!");
  }
}

function jogar_novamente() {
  jogador_atual = 1;
  palitos_restantes = 20;
  gerar_palitos();
  document.getElementById("jogador-atual").innerHTML = jogador_atual;
  document.getElementById("palitos-restantes").innerHTML = palitos_restantes;
  document.getElementById("jogar-btn").style.display = "block";
  document.getElementById("jogar-novamente-btn").style.display = "none";
}

function turno_jogador() {
  let num_palitos = parseInt(document.getElementById("num-palitos").value);

  if (isNaN(num_palitos) || num_palitos < 1 || num_palitos > 3) {
    alert("Número de palitos inválido. Escolha um número entre 1 a 3.");
    return;
  }

  atualizar_estado_jogo(num_palitos);
}

gerar_palitos();
alert("Jogador " + jogador_atual + ", é a sua vez.");
document.getElementById("jogar-btn").addEventListener("click", turno_jogador);
document.getElementById("jogar-novamente-btn").addEventListener("click", jogar_novamente);
