const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`Shyne - Estamos com ${client.users.size} no servidor! Que bom! `);
// caso queira o bot trasmitindo use:
/*
   client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/ladonegro'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
      */
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Shyne - Um servidor para se divertir com amigos, além de conhecer pessoas novas! Vários chats e canais de voz de diferentes jogos!`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // comando report
  if(comando === "report") {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if($rUser) return message.channel.send("Usuário inválido!");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Uusário reportado")
    .setColor("#15f153")
    .addField("Usuário Reportado", `${rUser} ID: ${rUser.id}`)
    .addField("Reportado por", `${message.author} ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Tempo", message.createdAt)
    .addField("Razão", reason)
    .setFooter("Footer", client.user.avatarURL)
    .setTimestamp();
    
    let reportschannel = message.guild.channels.find(`nome`, "denuncias");
    if(!reportschannel) return message.channel.send("Canal de denuncias não encontrado!");

      messmage.delete().cath(O_o=>{});
      message.channel.send(Embed);

    return;
  }
  // comando regras
  if(comando === "rules") {
    let embed = new Discord.RichEmbed()
    .setColor([(159, 254, 255)])
    .setAuthor("Rules", client.user.avatarURL)
    .setDescription("Rules of the server")
    .addField("Flood", "Not allowed",  true)
    .addField("Spam", "Not allowed ", true)
    .addField("Disclosure", "Not allowed", true)
    .addField("Pornography", "Not allowed", true)
    .addField("Offenses", "Not allowed", true)
    .setFooter("Toxic Rewards", client.user.avatarURL)
    .setTimestamp();

    message.channel.send(embed);
  }
  // comando info
  if(comando === "info") {
    let embed = new Discord.RichEmbed()
    .setColor([(159, 254, 255)])
    .setAuthor("Informations", client.user.avatarURL)
    .setDescription("Informations")
    .addField("Channels", ":desktop: " + client.channels.size, true)
    .addField("Members", ":leaves:  " + client.users.size, true)
    .addField("Version of the bot", "2.0", true)
    .addField("Creator of the bot", "yLucasz#7768", true)
    .setFooter("Toxic Rewards", client.user.avatarURL)
    .setTimestamp();

    message.channel.send(embed);
  }
  // comando ajuda
  if(comando === "help") {
    let embed = new Discord.RichEmbed()
    .setColor([(159, 254, 255)])
    .setAuthor("Help", client.user.avatarURL)
    .setDescription("Informations")
    .addField("Rewards Minecraft", "#rewards-minecraft ", true)
    .addField("Rewards Regedit", "#rewards-regedit ", true)
    .addField("Rewards Spotify", "Coming Soon! ", true)
    .setFooter("Toxic Rewards", client.user.avatarURL)
    .setTimestamp();

    message.channel.send(embed);
  }
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Calculando...");
    m.edit(`**Pong! :ping_pong:** \n**A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.** \n**A Latencia da API é ${Math.round(client.ping)}ms**`);
  }
//comando apagar
  if(comando === "apagar") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    if(!message.member.roles.some(r=>["👑 ›› Founder's", "🔥 ›› Sub-Founder's"].includes(r.name)) )
    if(!message.member.roles.some(r=>["🎓 ››  Administrators", "💣 ›› Moderators"].includes(r.name)) )
    if(!message.member.roles.some(r=>["⚙️ ›› Support"].includes(r.name)) )
    return message.reply("Desculpe-me! \nvocê não tem permissão para usar isto!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Por favor, fale um numero entre ```2``` e ```100``` para as mensagens serem apagadas. \n**(obs: Caso aconteca algum erro com este comando \nChame: yLucasz)**");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
  }
  // comando chutar 
  if(comando === "kick") {
//adicione o nome dos cargos que vc quer que use esse comando!
    if(!message.member.roles.some(r=>["Nome do cargo 1", "Nome de outro cargo 2"].includes(r.name)) )
    if(!message.member.roles.some(r=>["👑 ›› Founder's", "🔥 ›› Sub-Founder's"].includes(r.name)) )
    if(!message.member.roles.some(r=>["🎓 ››  Administrators", "💣 ›› Moderators"].includes(r.name)) )
    if(!message.member.roles.some(r=>["⚙️ ›› Support"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Por favor mencione um membro **Válido** deste servidor");
    if(!member.kickable) 
      return message.reply("Eu não posso expulsar este usuário! Ele pode ter um cargo mais alto");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhum motivo";
    
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
    message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo: ${reason}`);

  }
  // comando ban
  if(comando === "ban") {
    //adicione o nome do cargo que vc quer que use esse comando!
    if(!message.member.roles.some(r=>["Nome do cargo"].includes(r.name)) )
    if(!message.member.roles.some(r=>["👑 ›› Founder's"].includes(r.name)) )
    if(!message.member.roles.some(r=>["🔥 ›› Sub-Founder's"].includes(r.name)) )
    if(!message.member.roles.some(r=>["🎓 ››  Administrators"].includes(r.name)) )
    if(!message.member.roles.some(r=>["💣 ›› Moderators"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor mencione um membro **Válido** deste servidor");
    if(!member.bannable) 
      return message.reply("Eu não consigo banir este usuário! Ele pode ter um cargo mais alto.");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma motivo";
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir ele pelo seguinte motivo: ${error}`));
    message.reply(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`);
  }
  
});

client.login(config.token);
