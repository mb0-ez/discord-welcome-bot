require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.systemChannel; // auto uses system channel
  if (!channel) return;

  channel.send(
    `👋 Welcome <@${member.id}> to **${member.guild.name}**!`
  );
});

client.login(process.env.TOKEN);
