# Example for Trivia

```js
await Trivia({
	message: message,
	slash: true,
	embed: {
		title: 'Conhecimentos Gerais | Weky Development',
		description: 'Você tem apenas **{{time}}** para adivinhar a resposta!',
		color: '#5865F2',
        footer: '©️ Weky Development',
		timestamp: true
	},
	difficulty: 'hard',
	thinkMessage: 'Estou pensando',
	winMessage:
		'GG, A resposta era **{{answer}}**. Você acertou em **{{time}}**.',
	loseMessage: 'Boa sorte da próxima vez! A resposta correta era **{{answer}}**.',
	emojis: {
		one: '1️⃣',
		two: '2️⃣',
		three: '3️⃣',
		four: '4️⃣',
	},
	othersMessage: 'Apenas <@{{author}}> pode usar os botões!',
	returnWinner: false
});
```
