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

    if (message.startsWith("!bttv")) {
      var input = message.split(' ')[1];
         clientSay('videoyun', "@" + input + " Hangi tarayıcıyı kullandığının önemi yok, eğer bilgisayardaysan https://betterttv.com/ bu siteye gir ve eklentiyi kur ve mükemmel über süper güzel emoteleri sen de gör. Denemek istemez misin? Hemen tıkla, hemen insin, hemen mutlu ol.` ); 1500
    return
    }
	
    if (message.startsWith("!coffee @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy :coffee: `);
    return
    }

    if (message.startsWith("!meat @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy :meat_on_bone: `);
    return
    }

    if (message.startsWith("!salad @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy :green_salad: `);
    return
    }

    if (message.startsWith("!pizza @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy :pizza:`);
    return
    }

    if (message.startsWith("!popcorn @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy nymnCorn`);
    return
    }

    if (message.startsWith("!juice @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` voyunSip tşkrlr`);
    return
    }

    if (message.startsWith("!burrito @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy :burrito:`);
    return
    }

    if (message.startsWith("!pie @Kocacigim")) {
        clientsay('videoyun', "@" + tags["username"] + ` peepoHappy :pie:`);
    return
    }

    if (message.startsWith("!bot @chat")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi  ");
    return
    }

    if (message.startsWith("!bot chat")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi ");
    return
    }

    if (message.startsWith("!bot @Chat")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi ");
    return
    }


    if (message.startsWith("!bot @chat")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi ");
    return
    }

    if (message.startsWith("!bot @videoyun_bot")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', " Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS " + "@" + tags["username"] );
    return
    }

    if (message.startsWith("!bot videoyun_bot")) {
        clientsay('videoyun', `Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS ` + "@" + tags["username"] );
    return
    }

    if (message.startsWith("!bot @videoyun")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
    return
    }
	
    if (message.startsWith("!bot videoyun")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
    return
    }
	
    if (message.startsWith("!bot Videoyun")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
    return
    }
	
    if (message.startsWith("!bot @Videoyun")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
    return
    }
	
	
    if (message.startsWith("!bot Kocacigim")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL voyunEvil PowerUpR Bana ha! ` + "@" + tags["username"] );
    return
    }
    
    if (message.startsWith("!bot @Kocacigim")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL voyunEvil PowerUpR Bana ha! ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot kocacigim")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL voyunEvil PowerUpR Bana ha! ` + "@" + tags["username"]);
    return
    }
    
    if (message.startsWith("!bot @kocacigim")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL voyunEvil PowerUpR Bana ha! ` + "@" + tags["username"]);
    return
    }
    
    if (message.startsWith("!bot @begmdy")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot begmdy")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot BegMDY")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
    return
    }

   if (message.startsWith("!bot @BegMDY")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot @kronos_eaglepaw")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot Kronos_EaglePaw")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot @Kronos_EaglePaw")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
    return
    }
    
    if (message.startsWith("!bot kronos_eaglepaw")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
    return
    }

    if (message.startsWith("!bot karicigim ")) {
	    const randomemote = randomemotes();
        clientsay('videoyun',  "lokiAim @" + tags["username"] + `Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR` );
    return
    }

    if (message.startsWith("!bot @karicigim ")) {
	    const randomemote = randomemotes();
        clientsay('videoyun', "lokiAim @" + tags["username"] + `Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR` );
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
var clientsay = cooldown(client, client.say, 17000)
