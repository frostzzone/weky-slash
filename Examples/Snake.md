# Example for Snake

```js
await Snake({
	message: message,
	slash: true,
	embed: {
		title: 'Jogo da Cobra | Weky Development',
		description: 'GG, você fez **{{score}}** pontos!',
		color: '#5865F2',
        footer: '©️ Weky Development',
		timestamp: true
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Apenas <@{{author}}> pode usar os botões!',
	buttonText: 'Cancelar'
});
```
