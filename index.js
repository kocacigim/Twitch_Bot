const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: "kocacigim",
		password: "oauth:2jrzvval5912aq64ikbcrcl1k91hqv"
	},
	channels: ["videoyun"]
});
client.connect();

client.on("message", (channel, tags, message,) => {

    if (message == "!bot") {
		clientsay('videoyun', "@" + tags["username"] + " Niye kendine Faka Yu diyorsun? Sadge peepoHug ");
    return
    }

    if (message == "!bot @chat") {
    clientsay('videoyun', "@" + tags["username"] + " Chate ne dedi D: peepoKnife");
    return
    }

    if (message == "!bot @Chat") {
    clientsay('videoyun', "@" + tags["username"] + " Chate ne dedi D: peepoKnife");
    return
    }

    if (message == "!bot chat") {
    clientsay('videoyun', "@" + tags["username"] + " Chate ne dedi D: peepoKnife");
    return
    }

    if (message == "!bot Chat") {
    clientsay('videoyun', "@" + tags["username"] + " Chate ne dedi D: peepoKnife");
    return
    }

    if (message == "!bot karicigim") {
		clientsay('videoyun', " lokiAim @" + tags["username"] + " Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR ");
    return
    }

    if (message == "!bot @karicigim") {
		clientsay('videoyun', " lokiAim @"  + tags["username"] + " Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR ");
    return
    }

    if (message == "!bot Karicigim") {
		clientsay('videoyun', " lokiAim @" + tags["username"] + " Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR ");
    return
    }

    if (message == "!bot @Karicigim") {
		clientsay('videoyun', " lokiAim @" + tags["username"] + " Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR ");
    return
    }


    if (message == "!bot @videoyun_bot") {
		clientsay('videoyun', "@" + tags["username"] + " Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS");
    return
    }

    if (message == "!bot videoyun_bot") {
		clientsay('videoyun', "@" + tags["username"] + " Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS");
    return            
    }

    if (message == "!bot @kocacigim") {
    clientsay('videoyun', "@" + tags["username"] + " Bana Ha PowerUpL voyunEvil PowerUpR");
    return
    }
    
    if (message == "!bot kocacigim") {
    clientsay('videoyun', "@" + tags["username"] + " Bana Ha PowerUpL voyunEvil PowerUpR");
    return
    }

    if (message == "!bot Kocacigim") {
    clientsay('videoyun', "@" + tags["username"] + " Bana Ha PowerUpL voyunEvil PowerUpR");
    return
    }
    
    if (message == "!bot @Kocacigim") {
    clientsay('videoyun', "@" + tags["username"] + " Bana Ha PowerUpL voyunEvil PowerUpR");
    return
    }
    
    if (message == "!bot @begmdy") {
		clientsay('videoyun', "@" + tags["username"] + " Şefi sal PepeMad peepoKnife");
    return
    }

    if (message == "!bot begmdy") {
		clientsay('videoyun', "@" + tags["username"] + " Şefi sal PepeMad peepoKnife");
    return
    }

    if (message == "!bot BegMDY") {
		clientsay('videoyun', "@" + tags["username"] + " Şefi sal PepeMad peepoKnife");
    return
    }

    if (message == "!bot @BegMDY") {
		clientsay('videoyun', "@" + tags["username"] + " Şefi sal PepeMad peepoKnife");
    return
    }

    if (message == "!bot kronos_eaglepaw") {
    clientsay('videoyun', "@" + tags["username"] + " Öğrencime nasıl faka yu dersin lan sen PowerUpL voyunRage PowerUpR");
    return
    }

    if (message == "!bot @kronos_eaglepaw") {
    clientsay('videoyun', "@" + tags["username"] + " Öğrencime nasıl faka yu dersin lan sen PowerUpL voyunRage PowerUpR");
    return
    }

    if (message == "!bot Kronos_EaglePaw") {
    clientsay('videoyun', "@" + tags["username"] + " Öğrencime nasıl faka yu dersin lan sen PowerUpL voyunRage PowerUpR");
    return
    }

    if (message == "!bot @Kronos_EaglePaw") {
    clientsay('videoyun', "@" + tags["username"] + " Öğrencime nasıl faka yu dersin lan sen PowerUpL voyunRage PowerUpR");
    return
    }
    

	if (message.startsWith("!bot")) {
		const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword İnsanlara Faka Yu deme! ` + "@" + tags["username"]);
    return
    }

    function randomemotes() {
    const sides = 5;
    const result = Math.floor(Math.random() * sides) + 1;

    switch (result) {
        case 1:
            return 'peepoHappy';
            break
        case 2:
            return 'PeepoWeird';
            break
        case 3:
            return 'peepoSad';
            break
        case 4:
            return 'peepoSip';
            break
        case 5:
            return 'peepoMad';
            break
        default:
            return result;
    }
}
});
// thisArg - context in which to call the function; 'this' in the function's body
// fn - function to execute on a cooldown
// timeout - number of milliseconds to wait before allowing fn to be called again
var cooldown = function (thisArg, fn, timeout) {
    var onCooldown = false;

    // return a function that can be called the same way as the wrapped function
    return function (/* args */) {

        // only call the original function if it is not on cooldown
        if (!onCooldown) {

            // not on cooldown, so call the function with the correct context
            // and the arguments with which this wrapper was called
            fn.apply(thisArg, arguments);

            // set the cooldown flag so subsequent calls will not execute the function
            onCooldown = true;

            // wait <timeout> milliseconds before allowing the function to be called again
            setTimeout(function () {
                onCooldown = false;
            }, timeout);
        }
    }
}
var clientsay = cooldown(client, client.say, 15000)
