# Discord Welcomer Bot Template

A simple, lightweight Discord bot that sends a welcome message when a new member joins a server.

---

## 📌 Features
- Automatic welcome messages for new members
- Uses server system channel (fallback ready)
- Built with discord.js v14
- Easy to customize
- Template-friendly for GitHub

---

## 🚀 Setup

### 1. Install dependencies
npm install

---

### 2. Setup environment

Rename `.env.example` → `.env`

Add your bot token:

TOKEN=YOUR_DISCORD_BOT_TOKEN

---

### 3. Enable required intents

Go to Discord Developer Portal → Bot → Privileged Gateway Intents

Enable:
- SERVER MEMBERS INTENT

---

### 4. Run the bot

npm start

or

node src/index.js

---

## 📁 Structure

discord-welcomer-bot-template/
│── src/
│   └── index.js
│── .env.example
│── .gitignore
│── package.json
│── README.md

---

## ⚙️ Configuration

Default welcome channel:
- Uses system channel automatically

To change it:

const channel = member.guild.channels.cache.get("CHANNEL_ID");

---

## 🔐 Security

- Never upload `.env`
- Keep your token private
- Use `.env.example` for sharing setup format only

---

## 🛠 Requirements

- Node.js 16+
- Discord bot account
- SERVER MEMBERS INTENT enabled

---

## 📄 License

Free to use and modify.
