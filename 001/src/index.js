//JOGADORES

const player1 = {
  NOME: "Mario",
  VELOCIDADE: 10,
  MANOBRABILIDADE: 10,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

//Rodar o dado
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Selecionar o tipo de partida
async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;

    case random < 0.66:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

// durante a corrida
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // Sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //Rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block == "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        block,
        diceResult1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        block,
        diceResult2,
        character2.VELOCIDADE
      );
    }
    if (block == "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
      await logRollResult(
        character1.NOME,
        block,
        diceResult1,
        character1.MANOBRABILIDADE
      );
      await logRollResult(
        character2.NOME,
        block,
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }
    if (block == "CONFRONTO") {
      totalTestSkill1 = diceResult1 + character1.PODER;
      totalTestSkill2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}!`);
      await logRollResult(
        character1.NOME,
        block,
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character2.NOME,
        block,
        diceResult2,
        character2.PODER
      );
    }
    if (totalTestSkill1 > totalTestSkill2) {
      if (character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      }
    }
    if (totalTestSkill1 < totalTestSkill2) {
      if (character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      }
    }
    if (totalTestSkill1 == totalTestSkill2) {
      console.log("Deu empate, nada aconetce");
    }

    //Verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto !`);
      character1.PONTOS++;
    } else if (totalTestSkill1 < totalTestSkill2) {
      console.log(`${character2.NOME} marcou um ponto !`);
      character2.PONTOS++;
    } else {
      console.log("Empate");
    }
  }
}
// Exibi a msg de dados do corredor
async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute}: ${
      diceResult + attribute
    }`
  );
}

// Exibi quem venceu
async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`\n ${character1.NOME} venceu a corrida! Parabéns 🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`\n ${character2.NOME} venceu a corrida! Parabéns 🏆`);
  } else {
    console.log(`\n A Corrida terminou em empate`);
  }
}
//Onde tudo acontece
(async function main() {
  console.log(
    `🚗Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  );
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
