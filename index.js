const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Database = require("@replit/database")
const db = new Database()


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/images/logo', function(req, res) {
  res.sendFile(path.join(__dirname, '/images/Logo3Trans.png'));
});

app.listen(port, () => console.log(`App port online!`)); // Tells when the port is up

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client(); // Makes a new Discord Client
const version = "1.0.0"

const prefix = "toast "

client.on('message', message => {
  const capno = message.content.toLowerCase();
  if (!capno.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/); // Splits the prefix from the command
  const command = args.shift().toLowerCase(); // Makes the command lowercase

  function shopnamefinder(shop) {
    if (shop == "1") {
      return "Shack"
    }
    if (shop == "2") {
      return "Toast Truck"
    }
    if (shop == "3") {
      return "Strip Mall Shop"
    }
    if (shop == "4") {
      return "Mall Shop"
    }
    if (shop == "5") {
      return "Stand-Alone Shop"
    }
    if (shop == "6") {
      return "Medium Shop"
    }
    if (shop == "7") {
      return "Large Shop"
    }
    if (shop == "8") {
      return "Sky Shop"
    }
    if (shop == "9") {
      return "Small Alien Shop"
    }
    if (shop == "10") {
      return "Medium Alien Shop"
    }
    if (shop == "11") {
      return "Large Alien Shop"
    }
    if (shop == "12") {
      return "Milky Way Shop"
    }
    if (shop == "13") {
      return "Galaxy Shop"
    }
    if (shop == "14") {
      return "Dark Matter Shop"
    }
    if (shop == "15") {
      return "Beyond Dark Matter Shop"
    }
    if (shop == "16") {
      return "No Air Pressure Shop"
    }
    if (shop == "17") {
      return "The Middle Of Space Shop"
    }
    if (shop == "18") {
      return "More Than Alien Shop"
    }
    if (shop == "19") {
      return "͗ ⁜≌	⎳⎠⎠⚙ Shop"
    }
    if (shop == "20") {
      return "The Everywhere Shop"
    }
    if (shop == "21") {
      return "Nothing Shop"
    }
    if (shop == "22") {
      return "No Life Shop"
    }
    if (shop == "23") {
      return "More Than Light Shop"
    }
    if (shop == "24") {
      return "Apocalypes Shop"
    }
    if (shop == "25") {
      return "Apocalypes Hideout Shop"
    }
    if (shop == "26") {
      return "New Type Of Light Shop"
    }
    if (shop == "27") {
      return "I Don't Exist? Shop"
    }
    if (shop == "28") {
      return "Never Seen Shop"
    }
    if (Number(shop) > 28) {
      return "Off The Charts Shop"
    }
  }
  function toastqualityfinder(quality) {
    if (quality == "0") {
      return "Breadcrumbs"
    }
    if (quality == "1") {
      return "Soggy Toast"
    }
    if (quality == "2") {
      return "Burned Toast"
    }
    if (quality == "3") {
      return "Bread?"
    }
    if (quality == "4") {
      return "Low Toast"
    }
    if (quality == "5") {
      return "Kind-of Good Toast"
    }
    if (quality == "6") {
      return "Rushed Toast"
    }
    if (quality == "7") {
      return "Normal Toast"
    }
    if (quality == "8") {
      return "Parent's Breakfast Toast"
    }
    if (quality == "9") {
      return "Grandma's Toast"
    }
    if (quality == "10") {
      return "Buttered Toast"
    }
    if (quality == "11") {
      return "Tryhard Toast"
    }
    if (quality == "12") {
      return "Resturant Toast"
    }
    if (quality == "13") {
      return "Gourmet Toast"
    }
    if (quality == "14") {
      return "TV Show's Contestant's Toast"
    }
    if (quality == "15") {
      return "Famous Chef's Toast"
    }
    if (quality == "16") {
      return "Famous Chef's Tutor's Toast"
    }
    if (quality == "17") {
      return "Perfect Robot Toast"
    }
    if (quality == "18") {
      return "Bronze Toast"
    }
    if (quality == "19") {
      return "Silver Toast"
    }
    if (quality == "20") {
      return "Gold Toast"
    }
    if (quality == "21") {
      return "Titanium Toast"
    }
    if (quality == "22") {
      return "Alien Toast"
    }
    if (quality == "23") {
      return "Galaxy Toast"
    }
    if (quality == "24") {
      return "Alive Toast"
    }
    if (quality == "25") {
      return "Galaxy Toast"
    }
    if (quality == "26") {
      return "Dark Matter Toast"
    }
    if (quality == "27") {
      return "Beyond Dark Matter Toast"
    }
    if (quality == "28") {
      return "Infinite Toast"
    }
    if (Number(quality) > 28) {
      return "Off The Charts Toast"
    }
  }
  var online = ["zZzzZ... WHAT, yep I'm awake... Totally awake. Very awake.", "Just... One... More... Coffee... Wake up meeee...", "No, I'm not sleeping, I was just resting my eyes!", "Sooo... Tired....", "I'm awake, not aslee...", "Please... Get me another coffee and toast... SOo tired."]

  // Command Start

  if (command == 'import'){
    if (message.author.id == "607341305994936320"){
      db.set(args[0], args[1])
      message.reply("Set " + args[0] + " with " + args[1] + "!")
    }
    if (message.author.id !== "607341305994936320"){
      message.reply("You don't have permission to use this command. Please check your authority and try again.")
    }
  }

  if (command == 'online') {
      function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    var num = getRandomInt(5)
    message.reply(online[num])
  }
  if (command == 'invite'){
    message.reply("No way! I'm going to meet another server! I'm so excited! Here is my invite! https://discord.com/oauth2/authorize?client_id=981329232456192100&scope=bot&permissions=274877910080. Thanks so much!")
  }
  if (command == 'shop') {
    var user = message.author.id
    db.get(user).then(value => {
      if (!value) {
        var user = message.author.id
        db.set(user, "true")
        db.set(user + "money", "50")
        db.set(user + "toast", "0")
        db.set(user + "shop", "1")
        db.set(user + "toaster", "1")
        db.set(user + "cooldown", "0")
        db.set(user + "employees", "0")
        message.reply('You have created a shop. Please use "toast help" to see all commands, and "toast tutorial" for a tutorial. You have started with $50')
      }

      if (value) {
        const mentionuser = message.mentions.users.first();
        if (mentionuser == undefined) {

          var user = message.author.id


          db.get(user + "money").then(value => {
            var money = value
            db.get(user + "toast").then(value => {
              var toast = value
              db.get(user + "shop").then(value => {
                var shop = value
                db.get(user + "toaster").then(value => {
                  var toaster = value

                  const embed = new Discord.MessageEmbed()
                    .setColor('#FF7F27')
                    .setTitle('Your Toast Shop')
                    .setDescription('This shows all of your statistics for your toast shop')
                    .addFields(
                      { name: 'Money', value: '$' + money, inline: true },
                      { name: 'Toast Quality', value: toastqualityfinder(toast), inline: true },
                      { name: 'Shop', value: shopnamefinder(shop), inline: true },
                      { name: 'Toasters', value: toaster + ' toasters', inline: true },
                    )
                    .setTimestamp()
                    .setFooter('Created by op#1000, Version ' + version);

                  message.reply(embed);
                });
              });
            });
          });
        }
        if (mentionuser != undefined) {

          var user = mentionuser.id;
          var username = mentionuser.username;
          db.get(user + "money").then(value => {
            var money = value
            db.get(user + "toast").then(value => {
              var toast = value
              db.get(user + "shop").then(value => {
                var shop = value
                db.get(user + "toaster").then(value => {
                  var toaster = value


                  db.get(user).then(value => {
                    if (value == undefined) {
                      message.reply("This user has not signed up for Toast Shop.")
                    }
                    if (value != undefined) {

                      const embed = new Discord.MessageEmbed()
                        .setColor('#FF7F27')
                        .setTitle(username + "'s" + ' Toast Shop')
                        .setDescription('This shows all of ' + username + "'s" + ' statistics for their toast shop')
                        .addFields(
                          { name: 'Money', value: '$' + money, inline: true },
                          { name: 'Toast Quality', value: toastqualityfinder(toast) + ' quality', inline: true },
                          { name: 'Shop', value: shopnamefinder(shop), inline: true },
                          { name: 'Toasters', value: toaster + ' toasters', inline: true },
                        )
                        .setTimestamp()
                        .setFooter('Created by op#1000, Version ' + version);

                      message.reply(embed);
                    }
                  });
                });
              });
            });
          });
        }
      }
    });

  }

  if (command == "open") {
    var user = message.author.id
    db.get(user).then(value => {
      if (value) {


        db.get(user + "cooldown").then(value => {
          var time = Number(value)
          const d = new Date();
          var current = d.getTime();
          if (time <= Number(current)) {


            db.get(user + "toaster").then(value => {
              var maxtoastercount = value * 10
              message.reply('How much toast do you want to make? It will take 1 dollar to make toast, and you can make a maximum of ' + maxtoastercount + " toast.")

              async function startday() {
                var filter = m => m.author.id == message.author.id;
                try {
                  var collectedMessages = await message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] });
                } catch (e) { return message.reply("Your day has been canceled due to not specifing how much toast you want to produce in time."); };
                var response = collectedMessages.first().content;

                var toast = Number(response)
                if (isNaN(response) == true) {
                  message.reply("Your day has been canceled due to not having a valid number. Must be a number.")
                }
                if (isNaN(response) == false) {
                  // Continue
                  if (toast <= 0) {
                    message.reply("Your day has been canceled due to not having a valid number. Must be more than 0.")
                  }
                  if (toast > 0) {

                    if (toast > Number(maxtoastercount)) {
                      message.reply("Your day has been canceled due to exceeding your maximum toast count.")
                    }
                    if (toast <= Number(maxtoastercount)) {
                      // Checks completed, start day.

                      db.get(user + "toaster").then(value => {
                        var toasters = Number(value)

                        db.get(user + "shop").then(value => {
                          var shoplevel = value

                          db.get(user + "toast").then(value => {
                            var qualitytoast = Number(value)

                            function shoplevelfun() {
                              return shoplevel * 10
                            }

                            var sales = Math.floor(Math.random() * shoplevelfun()) + 1;


                            db.get(user + "money").then(value => {
                              var totalmoney = Number(value)

                              function sold() {
                                if (toast >= sales) {
                                  return sales
                                }
                                if (toast < sales) {
                                  return toast
                                }
                              }

                              function extratoast() {
                                if (toast > sales) {
                                  return (toast - sales)
                                }
                                if (toast <= sales) {
                                  return "0"
                                }
                              }
                              function customerslost() {
                                if (toast < sales) {
                                  return (sales - toast)
                                }
                                if (toast >= sales) {
                                  return "0"
                                }
                              }
                              function earned() {
                                if (sales > toast) {
                                  return Number(((toast * 2) + qualitytoast) - toast)
                                }
                                if (toast > sales) {
                                  return Number(((sales * 2) + qualitytoast) - toast)
                                }
                                if (toast = sales) {
                                  return Number(((sales * 2) + qualitytoast) - toast)
                                }
                              }

                              const embed = new Discord.MessageEmbed()
                                .setColor('#FF7F27')
                                .setTitle('End of day')
                                .setDescription('This shows you how your toast shop performed at the end of the day')
                                .addFields(
                                  { name: 'Toast Made', value: toast + ' toast', inline: true },
                                  { name: 'Toast Sold', value: sold() + ' toast', inline: true },
                                  { name: 'Extra Toast', value: extratoast() + ' toast', inline: true },
                                  { name: 'Customers Lost', value: customerslost() + ' customers', inline: true },
                                  { name: 'Customer Count', value: sales, inline: true },
                                  { name: 'Money Earned', value: '$' + earned(), inline: true },
                                  { name: 'Bank Account', value: '$' + (Number(earned()) + totalmoney), inline: true },
                                )
                                .setTimestamp()
                                .setFooter('Created by op#1000, Version ' + version);

                              message.reply(embed);
                              db.get(user + "money").then(value => {
                                var val = Number(value)
                                db.set(user + "money", (Number(earned()) + val))
                                const d = new Date();
                                var current = d.getTime();
                                var currentplus = (current + 60000)

                                db.set(user + "cooldown", currentplus)
                                if ((Number(earned()) + totalmoney) < 0) {
                                  message.reply("It looks like you are in debt! If you would like to create a new shop, please run" + ' the command "toast reset" and follow the instructions provided.')
                                }
                              });
                            });

                          });
                        });
                      });
                    }
                  }
                }


              }
              startday();
            });

          }
          if (time > Number(current)) {
            message.reply("Your day has been canceled. Please wait " + Math.abs(Math.round((Number(current) - Number(value)) / 1000)) + " seconds to start another day.")
          }
        });

      }





      if (!value) {
        message.reply('You must open a toast shop using "toast shop"')
      }
    });
  }

  if (command == "reset") {
    var user = message.author.id

    db.get(user).then(value => {
      if (value) {
        message.reply("Are you sure you want to reset your account? This action is permanent. If so, please send your 6 digit verification code that you should have received in your dms. If you didn't receive the message, make sure to let server members in this server send you dms.")
        var code = Math.floor(Math.random() * 999999) + 100000
        message.author.send("Your Toast Shop verification code is " + code + ". Do not share this code with anyone but the robot.")

        async function findmsg() {
          var filter = m => m.author.id == message.author.id;

          try {
            var collectedMessages = await message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] });
          }
          catch (e) { return message.reply("I didn't receive your verification code in time."); };
          var response = collectedMessages.first().content;

          if (response == code) {

            db.delete(user)
            message.reply("You have successfully reset your Toast Shop progress. Make a new shop using " + '"toast shop".')

          }
          if (response != code) {
            message.reply("Your code is invalid. Please generate a new code.")
          }

        }
        findmsg()
      }
      if (!value) {
        message.reply('You must open a toast shop using "toast shop"')
      }
    });
  }

  if (command == "resetother") {
    var user = message.author.id
    if (user == "607341305994936320") {
      db.delete(args[0]).then(() => {
        message.reply("Reset successful")
      });
    }
    if (user !== "607341305994936320") {
      message.reply("You do not have permission to use this command. Please check your authority and try again.")
    }
  }

  if (command == "help") {

    const embed = new Discord.MessageEmbed()
      .setColor('#FF7F27')
      .setTitle('Help menu')
      .setDescription('Use this helpful menu to navigate this fun bot.')
      .addFields(
        { name: 'help', value: 'Activates this help menu', inline: true },
        { name: 'shop', value: 'Opens a new shop, or shows you your shop statistics. Mention someone in this command to check their shop statistics.', inline: true },
        { name: 'open', value: 'Starts a day of toast shop', inline: true },
        { name: 'upgrade', value: 'Upgrade your toast selling abilities', inline: true },
        { name: 'reset', value: 'Permanently resets all of your progress', inline: true },
        { name: 'employ', value: 'Shows your employees statistics', inline: true },
        { name: 'claim', value: "Claims your employee's earnings", inline: true },
      )
      .setTimestamp()
      .setFooter('Created by op#1000, Version ' + version);

    message.reply(embed);

  }

  if (command == "tutorial") {
    var user = message.author
    message.reply("Check your dms!")
    user.send("Welcome to Toast Bot! To start, make sure you ran the command " + '"toast shop"' + " to start your adventure.")
    setTimeout(() => { user.send('To start, run the command "toast open", and pick the amount of toast you want to make for the day.'); }, 5000);
    setTimeout(() => { user.send('After you have opened a day, run the command "toast upgrade" to check out the upgrades you could buy for your shop. A shop upgrade will get you more customers, while a toaster upgrade will get you another toaster, which would let you make more toast every day.'); }, 10000);
    setTimeout(() => { user.send('To check your stats out, run the command "toast shop" to check your toast shop statistics. This is the end of your tutorial.'); }, 15000);
  }


  if (command == "upgrade") {
    var user = message.author.id

    db.get(user).then(value => {
      if (!value) {
        message.reply('You must open a toast shop using "toast shop"')
      }
      if (value) {
        db.get(user + "money").then(value => {
          var money = value
          db.get(user + "toast").then(value => {
            var toast = value
            db.get(user + "shop").then(value => {
              var shop = value
              db.get(user + "toaster").then(value => {
                var toaster = value
                db.get(user + "toast").then(value => {
                  var quality = value
                  db.get(user + "employees").then(value => {
                    var employees = value
                    db.get(user + "employeeearnings").then(value => {
                      var earnings = value


                      function toasterfinder() {
                        return (Number(toaster) * 75)
                      }
                      function shopfinder() {
                        return (Number(shop) * 75)
                      }
                      function qualityfinder() {
                        return ((Number(quality) * 75) + 10)
                      }
                      function employeefinder() {
                        return ((Number(employees) * 50) + 10)
                      }

                      const embed = new Discord.MessageEmbed()
                        .setColor('#FF7F27')
                        .setTitle('Upgrade Your Toast Shop')
                        .setDescription('Upgrade your items by adding a reaction')
                        .addFields(
                          { name: 'Money', value: '$' + money, inline: true },
                          { name: 'Toast', value: toast + ' toast', inline: true },
                          { name: '\u200b', value: "\u200b", inline: false },
                          { name: 'Shop 🏪', value: shopnamefinder(shop), inline: true },
                          { name: 'Toasters 🍞', value: toaster + ' Toasters', inline: true },
                          { name: 'Toast Quality 🥐', value: toastqualityfinder(quality) + ' Quality', inline: true },
                          { name: 'Employees 🧑', value: employees + ' Quality', inline: true },
                          { name: '\u200b', value: "\u200b", inline: false },
                          { name: '$' + shopfinder() + " 🏪", value: "A shop lets you get more customers", inline: true },
                          { name: '$' + toasterfinder() + " 🍞", value: "A toaster lets you make more toast", inline: true },
                          { name: '$' + qualityfinder() + " 🥐", value: "More toast quality lets you make more money per toast", inline: true },
                          { name: '$' + employeefinder() + " 🧑", value: "Employees give you idle income", inline: true },
                        )
                        .setTimestamp()
                        .setFooter('Created by op#1000, Version ' + version);
                      (async () => {
                        let embedsent = await message.reply(embed);
                        await embedsent.react('🏪');
                        await embedsent.react('🍞');
                        await embedsent.react('🥐');
                        await embedsent.react('🧑');

                        const filter = (reaction, user) => {
                          return ['🏪', '🍞', '🥐', '🧑'].includes(reaction.emoji.name) && !user.bot;
                        };

                        // Create the collector
                        const collector = embedsent.createReactionCollector(filter, {
                          max: 1,
                          time: 15000
                        });

                        collector.on('end', (collected, reason) => {
                          if (reason === 'time') {
                            message.reply("You ran out of time to select an option.")
                          } else {
                            // Grab the first reaction in the array
                            let userReaction = collected.array()[0];
                            // Grab the name of the reaction (which is the emoji itself)
                            let emoji = userReaction._emoji.name;

                            // Handle accordingly
                            if (emoji === '🏪') {

                              if (Number(money) >= Number(shopfinder())) {
                                db.set(user + "shop", (Number(shop) + 1))
                                db.set(user + "money", (Number(money) - Number(shopfinder())))
                                message.reply("You upgraded to a " + shopnamefinder(Number(shop) + 1) + "!")
                              }
                              if (Number(money) < Number(shopfinder())) {
                                message.reply("You don't have enough money! You need $" + (Number(shopfinder()) - Number(money)) + " more.")
                              }

                            } else if (emoji === '🍞') {

                              var toaster = value
                              if (Number(money) >= Number(toasterfinder())) {
                                db.set(user + "toaster", (Number(toaster) + 1))
                                db.set(user + "money", (Number(money) - Number(toasterfinder())))
                                message.reply("You now own " + (Number(toaster) + 1) + " toasters!")
                              }
                              if (Number(money) < Number(toasterfinder())) {
                                message.reply("You don't have enough money to buy this! You need $" + Math.abs(Number(money) - toasterfinder()) + " more.")
                              }

                            } else if (emoji === '🥐') {
                              if (Number(qualityfinder()) > Number(money)) {
                                message.reply("You don't have enough money to buy this! You need $" + (Number(qualityfinder()) - Number(money)) + " more.")
                              }
                              if (Number(qualityfinder()) <= Number(money)) {

                                db.set(user + "toast", (Number(quality) + 1))
                                db.set(user + "money", (Number(money) - Number(qualityfinder())))
                                message.reply("You now own " + toastqualityfinder(Number(quality) + 1) + " quality!")

                              }
                            } else if (emoji === '🧑') {
                              if (!employees) {
                                message.reply('Since you made your shop before the employee update, we require you to run the command "toast employee" before continuing. Thanks for understanding!')
                              }
                              if (employees) {
                                const d = new Date();
                                var current = d.getTime();
                                if (money >= Number(employeefinder())) {
                                  db.set(user + "employees", (Number(employees) + 1))
                                  db.set(user + "money", (Number(money) - Number(employeefinder())))
                                  db.set(user + "employeeearnings", current)
                                  message.reply("You gained another employee! You have " + (Number(employees) + 1) + " employees.")
                                }
                                if (money < Number(employeefinder())) {
                                  message.reply("You don't have enough money for this!")
                                }
                              }
                            } else {
                              msg.reply("Error: I didn't understand the inputted emoji");
                            }
                          }
                        })
                      })();
                    })
                  })
                })
              })
            });
          })
        });
      }
    })
  }

  if (command == "employ") {
    var user = message.author.id
    db.get(user).then(value => {
      if (!value) {
        message.reply('You must open a toast shop using "toast shop"')
      }
      if (value) {
        db.get(user + "employees").then(value => {
          var employees = value
          db.get(user + "employeeearnings").then(value => {
            var earnings = value
            if (!employees) {
              db.set(user + "employees", "0")
              db.set(user + "employeeearnings", "0")
              message.reply("Please run this command again. Thanks!")
            }
            if (employees) {
              function unclaimed() {
                const d = new Date();
                var current = d.getTime();
                return (Math.round((Number(current) - Number(earnings)) / 1800000) * Number(employees))
              }

              const embed = new Discord.MessageEmbed()
                .setColor('#FF7F27')
                .setTitle('Employee Statistics')
                .setDescription('This shows you all of the statistics related to employees. To employ more employees, do "toast upgrade." To claim your earnings, do "toast claim"')
                .addFields(
                  { name: 'Employees', value: employees + ' people', inline: true },
                  { name: 'Unclaimed Earnings From Employees', value: "$" + unclaimed(), inline: true },
                )
                .setTimestamp()
                .setFooter('Created by op#1000, Version ' + version);

              message.reply(embed);
            }
          });
        });
      }
    });
  }
  if (command == "claim") {
    var user = message.author.id
    db.get(user).then(value => {
      if (!value) {
        message.reply('You must open a toast shop using "toast shop"')
      }
      if (value) {
        db.get(user + "employees").then(value => {
          var employees = value
          db.get(user + "employeeearnings").then(value => {
            var earnings = value
            db.get(user + "money").then(value => {
              var money = value

              function unclaimed() {
                const d = new Date();
                var current = d.getTime();
                return (Math.round((Number(current) - Number(earnings)) / 1800000) * Number(employees))
              }
              const d = new Date();
              var current = d.getTime();

              db.set(user + "money", (money + Number(unclaimed())))
              db.set(user + "employeeearnings", current)
              message.reply("You claimed $" + unclaimed() + ", and you have $" + (Number(unclaimed()) + money) + " in your bank account.")
            })
          })
        })
      }
    });
  }


  // Command End
})

client.on('guildCreate', guild => {
  if (guild.id == "852039823522136094"){
    guild.leave()
  }
  else if (guild.id !== "852039823522136094"){
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
const embed = new Discord.MessageEmbed()
                .setColor('#FF7F27')
                .setTitle('Thanks for inviting me!')
                .setDescription('In order to start playing, take a look at the help menu, "toast help". Keep in mind that the prefix is "toast"')
                .setTimestamp()
                .setFooter('Created by op#1000, Version ' + version);

              channel.send(embed);
  }
})

client.on('disconnect', function(erMsg, code) {
  console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
  client.connect();
});





client.login(process.env.token); // Logs into the bot client using the token