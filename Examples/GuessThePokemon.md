# Example for Guess The Pokemon

```js
await GuessThePokemon({
  message: message,
  slash: true,
  embed: {
    title: "Adivinhe o Pokémon | Weky Development",
    description:
      "**Tipo:**\n{{type}}\n\n**Habilidades:**\n{{abilities}}\n\nVocê tem apenas **{{time}}** para adivinhar o pokémon correto.",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  thinkMessage: "Estou pensando",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
  winMessage: "GG, Era um **{{answer}}**. Você acertou em **{{time}}**.",
  loseMessage: "Boa sorte da próxima vez! Era um **{{answer}}**.",
  time: 60000,
  incorrectMessage: "Não {{author}}! O pokémon não é `{{answer}}`",
  buttonText: "Cancelar",
});
```
