# Example for Fast Type

```js
await FastType({
  message: message,
  slash: true,
  embed: {
    title: "Digitação Rápida | Weky Development",
    description: "Você tem **{{time}}** para digitar a frase abaixo.",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  sentence: "Isso é uma frase!",
  winMessage:
    "GG, você possui o WPM (PPM) **{{wpm}}** e você digitou em **{{time}}**.",
  loseMessage: "Boa sorte da próxima vez!",
  cancelMessage: "Você cancelou o jogo!",
  time: 60000,
  buttonText: "Cancelar",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
});
```
