# Example for Quick Find

```js
await QuickFind({
  message: message,
  slash: true,
  embed: {
    title: "Pense Rápido | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  backgroundhex: "f5f5f5", // Without "#"
  texthex: "5865F2", // Without "#"
  textlength: 7,
  time: 60000,
  waitMessage: "Os botões podem aparecer a qualquer momento!",
  startMessage:
    "Primeira pessoa a apertar o botão ganha. Você(s) tem **{{time}}**!",
  winMessage:
    "GG, <@{{winner}}> apertou o botão correto em **{{time}} segundos**.",
  loseMessage: "Ninguém apertou o botão a tempo.",
  ongoingMessage:
    "Um jogo já está em andamento no canal <#{{channel}}>. Você não pode começar um novo agora!",
});
```
