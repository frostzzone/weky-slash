# Example for Shuffle Guess

```js
await ShuffleGuess({
  message: message,
  slash: true,
  embed: {
    title: "Palavras Embaralhadas | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  word: ["sanduiche"],
  button: { cancel: "Cancelar", reshuffle: "Reembaralhar" },
  startMessage:
    "Eu embaralhei uma palavra que é **`{{word}}`**. Você tem **{{time}}** para encontrar a palavra correta!",
  winMessage:
    "GG, Era **{{word}}**! Você acertou em **{{time}}**.",
  loseMessage:
    "Boa sorte da próxima vez! A resposta correta era **{{answer}}**.",
  incorrectMessage: "Não {{author}}! A palavra não é `{{answer}}`.",
  othersMessage: "Apenas {{author}} pode usar os botões!",
  time: 60000,
});
```
