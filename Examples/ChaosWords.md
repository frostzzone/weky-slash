# Example for Chaos Words

```js
await ChaosWords({
  message: message,
  slash: true,
  embed: {
    title: "Palavras em Caos | Weky Development",
    description:
      "Você tem **{{time}}** para encontrar as palavras escondidas na frase abaixo.",
    color: "#5865F2",
    field1: "Frase:",
    field2: "Encontrada/Restantes:",
    field3: "Palavras encontradas:",
    field4: "Palavras:",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  winMessage: "GG, Você ganhou! Você conseguiu em **{{time}}**.",
  loseMessage: "Boa sorta na próxima vez!",
  wrongWordMessage:
    "Errado! Você tem **{{remaining_tries}}** tentativa(s) restante(s).",
  correctWordMessage:
    "GG, **{{word}}** está correto! Você precisa encontrar mais **{{remaining}}** palavra(s).",
  time: 60000,
  words: ["ola", "isso", "sao", "palavras"],
  charGenerated: 17,
  maxTries: 10,
  buttonText: "Cancelar",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
});
```
