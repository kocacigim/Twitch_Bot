const tmi = require('tmi.js');

let sayi = 0
let fakayu = 0
let monkaw = 0
let monkas = 0
let monkax = 0
let peepos = 0
let cock = 0

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

client.on("message", (channel, tags, message, user,) => {

    if (message == "!bot") {
       	clientsay('videoyun', "@" + tags["username"] + " Niye kendine Faka Yu diyorsun? Sadge peepoHug ");
    return
    }

    if (message == "!bttv"){
      	clientsay('videoyun', "@" + tags["username"] + " Hangi tarayıcıyı kullandığının önemi yok, eğer bilgisayardaysan https://betterttv.com/ bu siteye gir ve eklentiyi kur ve mükemmel über süper güzel emoteleri sen de gör. Denemek istemez misin? Hemen tıkla, hemen insin, hemen mutlu ol. ");
    return
    }

    if (message.startsWith("!bttv @")) {
      var input = message.split(' ')[1];
      setTimeout(() => { clientsay('videoyun', input+" Hangi tarayıcıyı kullandığının önemi yok, eğer bilgisayardaysan https://betterttv.com/ bu siteye gir ve eklentiyi kur ve mükemmel über süper güzel emoteleri sen de gör. Denemek istemez misin? Hemen tıkla, hemen insin, hemen mutlu ol."); }, 1200);
    return
    }

    if (message.startsWith("!bot @chat")) {
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi  ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @tengigabit")) {
        clientsay('videoyun', "@" + tags["username"] + " PepoG İnternet erişimi kesilecek.  ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot tengigabit")) {
        clientsay('videoyun', "@" + tags["username"] + " PepoG İnternet erişimi kesilecek.  ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot TenGigabit")) {
        clientsay('videoyun', "@" + tags["username"] + " PepoG İnternet erişimi kesilecek.  ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @TenGigabit")) {
        clientsay('videoyun', "@" + tags["username"] + " PepoG İnternet erişimi kesilecek.  ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot chat")) {
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @Chat")) {
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi ");
				fakayu = fakayu + 1
    return
    }


    if (message.startsWith("!bot Chat")) {
        clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @videoyun_bot")) {
        clientsay('videoyun', " Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS " + "@" + tags["username"] );
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot videoyun_bot")) {
        clientsay('videoyun', `Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS ` + "@" + tags["username"] );
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @videoyun")) {
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot videoyun")) {
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot Videoyun")) {
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @Videoyun")) {
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
				fakayu = fakayu + 1
    return
    }


    if (message.startsWith("!bot Kocacigim")) {
        clientsay('videoyun', `Ya yeter peepoLife Faka Yu demeyin bana peepoH  ` + "@" + tags["username"] );
				fakayu = fakayu + 1
				sayi = sayi + 1
    return
    }

    if (message.startsWith("!bot @Kocacigim")) {
        clientsay('videoyun', `Ya yeter peepoLife Faka Yu demeyin bana peepoH  ` + "@" + tags["username"]);
				fakayu = fakayu + 1
	    sayi = sayi + 1
    return
    }

    if (message.startsWith("!bot kocacigim")) {
        clientsay('videoyun', `Ya yeter peepoLife Faka Yu demeyin bana peepoH  ` + "@" + tags["username"]);
				fakayu = fakayu + 1
	    sayi = sayi + 1
    return
    }

    if (message.startsWith("!bot @kocacigim")) {
        clientsay('videoyun', `Ya yeter peepoLife Faka Yu demeyin bana peepoH  ` + "@" + tags["username"]);
				fakayu = fakayu + 1
	    sayi = sayi + 1
    return
    }

    if (message.startsWith("!bot @begmdy")) {
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot begmdy")) {
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot BegMDY")) {
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

   if (message.startsWith("!bot @BegMDY")) {
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @kronos_eaglepaw")) {
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot Kronos_EaglePaw")) {
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @Kronos_EaglePaw")) {
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot kronos_eaglepaw")) {
        clientsay('videoyun', `PowerUpL ${randomemote} SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot karicigim ")) {
        clientsay('videoyun',  "lokiAim @" + tags["username"] + `Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR` );
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @karicigim ")) {
        clientsay('videoyun', "lokiAim @" + tags["username"] + `Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR` );
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot loki")) {
        clientsay('videoyun', "@" + tags["username"] + " D: Lokiyi sal yoksa Peta'yı arıyom aha FeelsSupportMan   ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @loki")) {
        clientsay('videoyun', "@" + tags["username"] + " D: Lokiyi sal yoksa Peta'yı arıyom aha FeelsSupportMan   ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @Loki")) {
        clientsay('videoyun', "@" + tags["username"] + " D: Lokiyi sal yoksa Peta'yı arıyom aha FeelsSupportMan   ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot Loki")) {
        clientsay('videoyun', "@" + tags["username"] + " D: Lokiyi sal yoksa Peta'yı arıyom aha FeelsSupportMan   ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot Suwsum")) {
        clientsay('videoyun', "@" + tags["username"] + " Polise küfür etmek mi D: PepoG evet silivriye tayin edilmişsiniz, Hayırlı Olsun. ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @Suwsum")) {
        clientsay('videoyun', "@" + tags["username"] + " Polise küfür etmek mi D: PepoG evet silivriye tayin edilmişsiniz, Hayırlı Olsun. ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot suwsum")) {
        clientsay('videoyun', "@" + tags["username"] + " Polise küfür etmek mi D: PepoG evet silivriye tayin edilmişsiniz, Hayırlı Olsun. ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @suwsum")) {
        clientsay('videoyun', "@" + tags["username"] + " Polise küfür etmek mi D: PepoG evet silivriye tayin edilmişsiniz, Hayırlı Olsun. ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot ninsu")) {
        clientsay('videoyun', "@" + tags["username"] + " Komşuyu sal PepeMad peepoKnife ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot Ninsu")) {
        clientsay('videoyun', "@" + tags["username"] + " Komşuyu sal PepeMad peepoKnife ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @Ninsu")) {
        clientsay('videoyun', "@" + tags["username"] + " Komşuyu sal PepeMad peepoKnife ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @ninsu")) {
        clientsay('videoyun', "@" + tags["username"] + " Komşuyu sal PepeMad peepoKnife ");
				fakayu = fakayu + 1
    return
    }

  	if (message.startsWith("!bot")) {
		const randomemote = randomemotes();
		    clientsay('videoyun', `PowerUpL ${randomemote} SirSword İnsanlara Faka Yu deme! ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

																										//sayaçlar

		if (message.startsWith("monkaW")) {
				monkaw = monkaw + 1
    return
    }

		if (message.startsWith("monkaS")) {
				monkas = monkas + 1
    return
    }

		if (message.startsWith("monkaX")) {
				monkax = monkax + 1
    return
    }

		if (message.startsWith("peepoS")) {
				peepos = peepos + 1
    return
    }

		if (message.startsWith("YEP cock")) {
				cock = cock + 1
    return
    }

		if (message.startsWith("YEP Cock")) {
				cock = cock + 1
    return
    }

		if (message.startsWith("YEP COCK")) {
				cock = cock + 1
    return
    }
																											//ısmarlama

		if (message.startsWith("!coffee @Kocacigim")) {
        client.say('videoyun', ` peepoHappy :coffee: ` +tags["username"]+ " teşekkür ederim. peepoKiss");
    return
    }

    if (message.startsWith("!meat @Kocacigim")) {
        client.say('videoyun',` peepoHappy :meat_on_bone: ` +tags["username"]+ " teşekkür ederim. peepoKiss");
    return
    }

    if (message.startsWith("!salad @Kocacigim")) {
        client.say('videoyun',` peepoHappy :green_salad: `+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!pizza @Kocacigim")) {
        client.say('videoyun', ` peepoHappy :pizza: ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!popcorn @Kocacigim")) {
        client.say('videoyun', ` peepoHappy nymnCorn ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!juice @Kocacigim")) {
        client.say('videoyun', ` voyunSip ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!burrito @Kocacigim")) {
        client.say('videoyun',` peepoHappy :burrito: `+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!pie @Kocacigim")) {
        client.say('videoyun', ` peepoHappy :pie: ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

		if (message.startsWith("!coffee @kocacigim")) {
        client.say('videoyun', ` peepoHappy :coffee: `+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!meat @kocacigim")) {
        client.say('videoyun', ` peepoHappy :meat_on_bone: ` +tags["username"]+ " teşekkür ederim. peepoKiss " );
    return
    }

    if (message.startsWith("!salad @kocacigim")) {
        client.say('videoyun',` peepoHappy :green_salad: ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!pizza @kocacigim")) {
        client.say('videoyun',"peepoHappy :pizza:" +tags["username"]+ " teşekkür ederim. peepoKiss " );
    return
    }

    if (message.startsWith("!popcorn @kocacigim")) {
        client.say('videoyun'," peepoHappy nymnCorn "+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!juice @kocacigim")) {
        client.say('videoyun',"voyunSip " +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!burrito @kocacigim")) {
        client.say('videoyun'," peepoHappy :burrito: "+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!pie @kocacigim")) {
        client.say('videoyun'," peepoHappy :pie:" +tags["username"]+ " teşekkür ederim. peepoKiss");
    return
    }

																									//yetki

		if (tags.username !== "kocacigim") return;
					if (message.startsWith("!banafakayu"))
			setTimeout(() => { client.say('videoyun', "Toplam " +sayi+ " kere Faka Yu dediler bana. peepoH "); }, 1200);

			else if (message.startsWith("!fakayu"))
			setTimeout(() => { client.say('videoyun', "Toplam " +fakayu+ " kere Faka Yu dedirtmişsiniz. PepoG "); }, 1200);

			else if (message.startsWith("!monkaw"))
			setTimeout(() => { client.say('videoyun', "monkaW sayacı " +monkaw); }, 1200);

			else if (message.startsWith("!monkas"))
			setTimeout(() => { client.say('videoyun', "monkaS sayacı " +monkas); }, 1200);

			else if (message.startsWith("!monkax"))
			setTimeout(() => { client.say('videoyun', "monkaX sayacı " +monkax ); }, 1200);

			else if (message.startsWith("!peepos"))
			setTimeout(() => { client.say('videoyun', "peepoS sayacı " +peepos); }, 1200)

			else if (message.startsWith("!cock"))
			setTimeout(() => { client.say('videoyun', "YEP Cock sayacı " +cock); }, 1200)

		function randomemotes() {
		const sides = 5;
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
						return 'voyunRage';
						break
				default:
						return result;
		}
}
});

var cooldown = function (thisArg, fn, timeout) {
    var onCooldown = false;
    return function (/* args */) {
        if (!onCooldown) {
            fn.apply(thisArg, arguments);
            onCooldown = true;
            setTimeout(function () {
                onCooldown = false;
            }, timeout);
					}
    }
}
var clientsay = cooldown(client, client.say, 17000)
var clientSay = cooldown(client, client.say, 0)
