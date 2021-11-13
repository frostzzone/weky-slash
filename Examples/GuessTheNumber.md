# Example for Guess The Number

```js
await GuessTheNumber({
  message: message,
  slash: true,
  embed: {
    title: "Adivinhe o Número | Weky Development",
    description: "Você tem **{{time}}** para adivinhar o número correto.",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  publicGame: true,
  number: 189,
  time: 60000,
  winMessage: {
    publicGame:
      "GG, O número que eu pensei foi **{{number}}**. <@{{winner}}> completou em **{{time}}**.\n\n__**Estatísticas:**__\n**Duração**: {{time}}\n**Número de participantes**: {{totalparticipants}} participantes\n**Participantes**: {{participants}}",
    privateGame:
      "GG, O número que eu pensei foi **{{number}}**. Você completou em **{{time}}**.",
  },
  loseMessage:
    "Boa sorte da próxima vez! O número que eu pensei foi **{{number}}**.",
  bigNumberMessage: "Não {{author}}! Meu número é maior que **{{number}}**.",
  smallNumberMessage: "Não {{author}}! Meu número é menor que **{{number}}**.",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
  buttonText: "Cancelar",
  ongoingMessage:
    "Um jogo já está em andamento no canal <#{{channel}}>. Você não pode começar um novo agora!",
  returnWinner: false,
});
```
