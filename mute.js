if(message.content.startsWith(prefix + "mute")) { 


 
              let messageArray = message.content.split(" "); 


 
              let args = messageArray.slice(1); 


 
              let member_mods = message.member.hasPermission("ADMINISTRATOR") 


 
              let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 


 
           


 
              if(!member_mods) return message.channel.send(message.author + " Tu n'as pas les permissions requises ! :warning:"); 


 
              if(!toMute) return message.channel.send(message.author + " Veuillez mentionner un utilisateur !"); 


 
              if(toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.author + "Cet utilisateur est impossible a mute"); 


 
           


 
              let muteR = message.guild.roles.find(`name`, "Muted"); 


 
           


 
           


 
           


 
              if(!muteR){ 


 
                  try { 


 
           


 
                      muteR = message.guild.createRole({ 


 
                          name: "Muted", 


 
                          color: "#161616", 


 
                          permission: [] 


 
                      }) 


 
           


 
                      message.guild.channels.forEach(async (channel, id) => { 


 
                          channel.overwritePermissions(muteR, { 


 
                              SEND_MESSAGES: false, 


 
                              SEND_TTS_MESSAGES: false, 


 
                              ADD_REACTIONS: false, 


 
                              SPEAK: false 


 
                          }); 


 
                      }); 


 
           


 
                  }catch(e){ 


 
                      console.log(e.stack); 


 
                  } 


 
              } 


 
           


 
              (toMute.addRole(muteR.id)); 


 
              message.delete(); 


 
              message.channel.send(`${toMute} a été mute.`); 


 
              toMute.send(":mute: Vous avez été mute sur le serveur **" + message.guild.name + "**") 


 
          }
