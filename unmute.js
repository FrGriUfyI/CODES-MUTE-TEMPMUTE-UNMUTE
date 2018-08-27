if(message.content.startsWith(prefix + "unmute")) { 


 
              if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous devez avoir la permissions *ADMINISTRATOR* pour pouvoir exécuter cette commande") 


 
           


 
            let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]); 


 
            if (!toUnmute) return message.reply("Veuillez mentionner un utilisateur"); 


 
           


 
            let role = message.guild.roles.find(r => r.name === "Muted"); 


 
             


 
           


 
            if(!role || !toUnmute.roles.has(role.id)) return message.channel.send("Cet utilisateur n'est pas mute"); 


 
           


 
            toUnmute.removeRole(role) 


 
            message.reply(`${toUnmute} a bien été unmute !`) 


 
           


 
            return; 


 
          } 


 
       


 
          if(message.content.startsWith(prefix + "purgedujour") || message.content.startsWith(prefix + "pj")) { 


 
              if (message.member.hasPermission("MANAGE_MESSAGES")) { 


 
                  message.channel.fetchMessages() 


 
                     .then(function(list){ 


 
                          message.channel.bulkDelete(list); 


 
                      }, function(err){message.channel.send("Erreur")})} 


 
          }
