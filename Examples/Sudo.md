# Example for Sudo

```js
await Sudo({
	message: message,
	slash: true,
	member: message.mentions.members.first(),
	text: 'This is text!',
	deleteMessage: false
});
```
