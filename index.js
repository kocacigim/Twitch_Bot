const tmi = require('tmi.js');

let counter = 0 // If you want to make a counter, you need to do it under the client say line 44

const client = new tmi.Client({
    options: {
        debug: true
    },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: "kocacigim",
        password: "Twitch_Token"
    },
    channels: ["channel"]
});
client.connect();

client.on("message", (channel, tags, message, user, ) => {

    if (message == "!tellme") {
        clientsay('channel', "@" + tags["username"] + " You can tag the person and print the message you want to write. (Only the message looks like this! If it's a !command) ");
        return
    }

    if (message.startsWith("!tellme @")) {
        var input = message.split(' ')[1];
        setTimeout(() => {
            clientsay('channel', input + " Sends the message to the person tagged in the message. Example: !command @kocacigim");
        }, 1200);
        return
    }
    if (message.startsWith == ("!tellme")) {
        clientsay('channel', "@" + tags["username"] + "If the message starts with !command, this message will be written as a bot.");
        return
    }

    if (message.startsWith== ("!tellme")){
        clientsay('channel', ` ${randomemote} If you want to emote randomly when the command is typed, you can edit the emotes in the "function" section below.`);
    }

    if (message.startsWith== ("!tellme")){
        clientsay('channel', ` Line 3`);
        counter = counter + 1
    }

    if (tags.username !== "kocacigim" || tags.username !== "kocacigim2") return;
    if (message.startsWith("!tellme"))
        setTimeout(() => {
            client.say('channel', " If you want to make a personalized command, write your twitch name up. ");
        }, 1200);

    else if (message.startsWith("!tellme"))
        setTimeout(() => {
            client.say('channel', "If you want to make a personalized command, write your twitch name up. x2");
        }, 1200);

    function randomemotes() {
        const sides = 4;
        const result = Math.floor(Math.random() * sides) + 1;

        switch (result) {
            case 1:
                return 'peepoMad';
                break
            case 2:
                return 'PeepoWeird';
                break
            case 3:
                return 'peepoSip';
                break
            case 4:
                return 'FeelsBadMan';
                break
            default:
                return result;
        }
    }
});

//CoolDown
var cooldown = function (thisArg, fn, timeout) {
    var onCooldown = false;
    return function ( /* args */ ) {
        if (!onCooldown) {
            fn.apply(thisArg, arguments);
            onCooldown = true;
            setTimeout(function () {
                onCooldown = false;
            }, timeout);
        }
    }
}
var clientsay = cooldown(client, client.say, 1000) // if you want you can write a time here, (in milliseconds)
