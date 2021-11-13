# Example for Never Have I Ever

```js
await NeverHaveIEver({
  message: message,
  slash: true,
  embed: {
    title: "Eu Nunca | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  thinkMessage: "Estou pensando",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
  buttons: { optionA: "Eu já", optionB: "Eu nunca" },
});
```
