# Example for Rock Paper Scissors

```js
await RockPaperScissors({
  message: message,
  slash: true,
  opponent: message.mentions.users.first(),
  embed: {
    title: "Pedra Papel Tesoura | Weky Development",
    description: "Aperte o botão abaixo para escolher.",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  buttons: {
    rock: "Pedra",
    paper: "Papel",
    scissors: "Tesoura",
    accept: "Aceitar",
    deny: "Negar",
  },
  time: 60000,
  acceptMessage:
    "<@{{challenger}}> desafiou <@{{opponent}}> para um Pedra Papel Tesoura!",
  winMessage: "GG, <@{{winner}}> ganhou!",
  drawMessage: "Deu empate!",
  endMessage: "<@{{opponent}}> não escolheu a tempo.",
  timeEndMessage: "Ninguém escolheu a tempo.",
  cancelMessage:
    "<@{{opponent}}> se recusou a jogar Pedra Papel Tesoura com você!",
  choseMessage: "Você escolheu {{emoji}}",
  noChangeMessage: "Você não pode mudar sua escolha!",
  othersMessage: "Apenas {{author}} pode usar os botões!",
  returnWinner: false,
});
```
