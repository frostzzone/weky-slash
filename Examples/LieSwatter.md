# Example for Lie Swatter

```js
await LieSwatter({
  message: message,
  slash: true,
  embed: {
    title: "Mata-Mentiras | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  thinkMessage: "Estou pensando",
  winMessage: "GG, Era uma **{{answer}}**. Você acertou em **{{time}}**.",
  loseMessage: "Boa sorte da próxima vez! Era uma **{{answer}}**.",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
  buttons: { true: "Verdade", lie: "Mentira" },
});
```
