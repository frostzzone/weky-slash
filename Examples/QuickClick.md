# Example for Quick Click

```js
await QuickClick({
  message: message,
  slash: true,
  embed: {
    title: "Clique Rápido | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  time: 60000,
  waitMessage: "Os botões podem aparecer a qualquer momento!",
  startMessage:
    "Primeira pessoa a apertar o botão ganha. Você(s) tem **{{time}}**!",
  winMessage: "GG, <@{{winner}}> apertou o botão em **{{time}} segundos**.",
  loseMessage: "Ninguém apertou o botão a tempo.",
  emoji: "👆",
  ongoingMessage:
    "Um jogo já está em andamento no canal <#{{channel}}>. Você não pode começar um novo agora!",
});
```
