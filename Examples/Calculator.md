# Example for Calculator

```js
await Calculator({
  message: message,
  slash: true,
  embed: {
    title: "Calculadora | Weky Development",
    color: "#5865F2",
    footer: "©️ Weky Development",
    timestamp: true,
  },
  disabledQuery: "A calculadora está desativada!",
  invalidQuery: "A equação fornecida é inválida!",
  othersMessage: "Apenas <@{{author}}> pode usar os botões!",
});
```
