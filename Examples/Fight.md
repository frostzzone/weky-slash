# Example for Fight

```js
await Fight({
  message: message,
  slash: true,
  opponent: message.mentions.users.first(),
  embed: {
    title: "Luta | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  buttons: {
    hit: "Soco",
    heal: "Cura",
    cancel: "Parar",
    accept: "Aceitar",
    deny: "Negar",
  },
  acceptMessage: "<@{{challenger}}> desafiou <@{{opponent}}> para uma luta!",
  winMessage: "GG, <@{{winner}}> ganhou a luta!",
  endMessage: "<@{{opponent}}> não respondeu a tempo!",
  cancelMessage: "<@{{opponent}}> se recusou a lutar contra você!",
  fightMessage: "{{player}} você primeiro!",
  opponentsTurnMessage: "Espere pelo movimento de seu oponente!",
  highHealthMessage: "Você não pode curar se seu HP estiver maior que 80!",
  lowHealthMessage:
    "Você não pode cancelar a luta se seu HP estiver menor que 50!",
  returnWinner: false,
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
});
```
