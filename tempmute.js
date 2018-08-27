 if(message.content.startsWith(prefix + "tempmute") || message.content.startsWith(prefix + "tm")) { 


 
                                if (message.channel.type === "dm") return; 


 
                  let messageArray = message.content.split(" "); 


 
              let args = messageArray.slice(1); 


 
              let member_mods = message.member.hasPermission("ADMINISTRATOR") 


 
              let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 


 
           


 
              if(!member_mods) return message.channel.send(message.author + " Tu n'as pas les permissions requises ! :warning:"); 


 
              if(!toMute) return message.channel.send(message.author + " Veuillez mentionner un utilisateur !"); 


 
              if(toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.author + "Cet utilisateur est impossible a mute"); 


 
           


 
              let muteR = message.guild.roles.find(`name`, "Muted"); 


 
              let muteA = message.guild.roles.find('name', "Membres"); 


 
           


 
           


 
           


 
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


 
           


 
               


 
           


 
           


 
           


 
              let muteT = args[1]; 


 
              if(!muteT) return message.channel.send(message.author + ' Veuillez mettre un temps de mute !'); 


 
           


 
               


 
              (toMute.addRole(muteR.id)); 


 
              (toMute.removeRole(muteA.id)) 


 
              message.delete(); 


 
              message.channel.send(`${toMute} a été mute pendant ${ms(ms(muteT))}.`); 


 
              toMute.send(":mute: Vous avez été mute sur le serveur **" + message.guild.name + "**") 


 
           


 
              setTimeout(function(){ 


 
                  toMute.removeRole(muteR.id); 


 
                  toMute.addRole(muteA.id) 


 
                  message.channel.send(`${toMute} viens d'être unmute !`) 


 
                  toMute.send("Vous avez été unmute sur **" + message.guild.name + "**") 


 
              }, ms(muteT)); 


 
          }
