// DJSv13
const Discord = require("discord.js");
const client = new Discord.Client();
const { Calculator } = require("../index");

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
	if (interaction.commandName === "calculator") {
		await interaction.deferReply()

    await Calculator({
      message: interaction,
      slash: true,
      embed: {
        title: "Calculator | Weky Development",
        color: "#5865F2",
        footer: "©️ Weky Development",
        timestamp: true,
      },
      disabledQuery: "Calculator is disabled!",
      invalidQuery: "The provided equation is invalid!",
      othersMessage: "Only <@{{author}}> can use the buttons!",
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "!calculator") {
    await Calculator({
      message: message,
      embed: {
        title: "Calculator | Weky Development",
        color: "#5865F2",
        footer: "©️ Weky Development",
        timestamp: true,
      },
      disabledQuery: "Calculator is disabled!",
      invalidQuery: "The provided equation is invalid!",
      othersMessage: "Only <@{{author}}> can use the buttons!",
    });
  }
});

client.login("YOUR_BOT_TOKEN");
