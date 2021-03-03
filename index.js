const tmi = require('tmi.js');

let sayi = 0
let fakayu = 0
let monkaw = 0
let monkas = 0
let monkax = 0
let peepos = 0
let cock = 0
let sadge = 0
let happy = 0
let didsome = 0
let wha = 0
let kekw = 0
let fivehead = 0

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

//bettertwitch
    if (message == "!bttv"){
      clientsay('videoyun', "@" + tags["username"] + " Hangi tarayıcıyı kullandığının önemi yok, eğer bilgisayardaysan https://betterttv.com/ bu siteye gir ve eklentiyi kur ve mükemmel über süper güzel emoteleri sen de gör. Denemek istemez misin? Hemen tıkla, hemen insin, hemen mutlu ol. ");
    return
    } 

    if (message.startsWith("!bttv @")) {
        var input = message.split(' ')[1];
        setTimeout(() => { clientsay('videoyun', input+" Hangi tarayıcıyı kullandığının önemi yok, eğer bilgisayardaysan https://betterttv.com/ bu siteye gir ve eklentiyi kur ve mükemmel über süper güzel emoteleri sen de gör. Denemek istemez misin? Hemen tıkla, hemen insin, hemen mutlu ol."); }, 1200);
    return
    }

//botlar
    if (message == "!bot") {
      clientsay('videoyun', "@" + tags["username"] + " Niye kendine Faka Yu diyorsun? Sadge peepoHug ");
    return
    }

    if (message.startsWith("!bot " + tags["display-name"]) || message.startsWith("!bot @" +"@"+ tags["display-name"])){
     clientsay('videoyun', "Botumu kırmaya çalışmaz mısın lütfen peepoShy " + tags["username"])
    return
    }

    if (message.startsWith("!bot @chat") || message.startsWith("!bot chat") || message.startsWith("!bot @Chat") || message.startsWith("!bot Chat")) {
      clientsay('videoyun', "@" + tags["username"] + " D: peepoKnife Chate ne dedi  ");
      fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @tengigabit") || message.startsWith("!bot tengigabit") || message.startsWith("!bot @TenGigabit") || message.startsWith ("!bot TenGigabit")) {
      clientsay('videoyun', "@" + tags["username"] + " PepoG İnternet erişimi kesilecek.  ");
      fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @videoyun_bot") || message.startsWith("!bot videoyun_bot")) {
        clientsay('videoyun', " Bota niye Faka Yu diyorsun, Hacklesin mi seni? HACKERMANS " + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @videoyun") || message.startsWith("!bot videoyun") || message.startsWith("!bot @Videoyun") || message.startsWith("!bot Videoyun")) {
        clientsay('videoyun', "@" + tags["username"] + " peepoMad SirSword Loki'nin hizmetçisini sal ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @kocacigim") || message.startsWith("!bot kocacigim") || message.startsWith("!bot Kocacigim") || message.startsWith("!bot @Kocacigim")){
      clientsay('videoyun', `PowerUpL PepeMad SirSword Salın lan artık beni ` + "@" + tags["username"]);
      return
      }

    if (message.startsWith("!bot @begmdy") || message.startsWith("!bot begmdy") || message.startsWith("!bot BegMDY") || message.startsWith("!bot @BegMDY")){
        clientsay('videoyun', `Şefi sal PepeMad peepoKnife ` + "@" + tags["username"]);
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @kronos_eaglepaw") || message.startsWith("!bot kronos_eaglepaw") || message.startsWith("!bot Kronos_EaglePaw") || message.startsWith("!bot @Kronos_EaglePaw")) {
      clientsay('videoyun', `PowerUpL peepoMad SirSword Öğrencime nasıl faka yu dersin lan sen ` + "@" + tags["username"]);
      fakayu = fakayu + 1
     return
    }

    if (message.startsWith("!bot @emir_canwp") || message.startsWith("!bot emir_canwp")) {
      fakayu = fakayu + 1
     return
    }

    if (message.startsWith("!bot karicigim") || message.startsWith("!bot @karicigim")) {
        clientsay('videoyun',  "lokiAim @" + tags["username"] + ` Sen kim oluyorsun da benim karıma faka yu diyorsun lan PowerUpL voyunRage PowerUpR` );
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot @loki") || message.startsWith("!bot loki") || message.startsWith("!bot Loki") || message.startsWith("!bot @Loki")) {
        clientsay('videoyun', "@" + tags["username"] + " D: Lokiyi sal yoksa Peta'yı arıyom aha FeelsSupportMan   ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot suwsum") || message.startsWith("!bot @suwsum")) {
        clientsay('videoyun', "@" + tags["username"] + " Polise küfür etmek mi D: . PepoG evet silivriye tayin edilmişsiniz, Hayırlı Olsun. ");
				fakayu = fakayu + 1
    return
    }

    if (message.startsWith("!bot ninsu") || message.startsWith("!bot Ninsu") || message.startsWith("!bot @ninsu") || message.startsWith("!bot @Ninsu")) {
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

		if (message.startsWith("Sadge")) {
				sadge = sadge + 1
    return
    }

		if (message.startsWith("peepoHappy")) {
				happy = happy + 1
    return
    }

		if (message.startsWith("DIDSOMEONESAYCOCK")) {
				didsome = didsome + 1
    return
    }

    if (message.startsWith("D:")) {
      wha = wha + 1
    return
    }

    if (message.startsWith("KEKW")) {
      kekw = kekw + 1
    return
    }
    
    if (message.startsWith("5Head")) {
      fivehead = fivehead + 1
    return
    }

    //ısmarlama pleb
		let isSub = false;
		if (tags.badges) isSub = 'subscriber' in tags.badges || 'founder' in tags.badges;
		if (message.startsWith("!coffee @kocacigim")  || message.startsWith("!coffee @Kocacigim") || message.startsWith("!meat @kocacigim")  || 
    message.startsWith("!meat @Kocacigim") || message.startsWith("!salad @kocacigim")  || message.startsWith("!salad @Kocacigim") || 
    message.startsWith("!pizza @kocacigim")  || message.startsWith("!pizza @Kocacigim") || message.startsWith("!popcorn @kocacigim")  || 
    message.startsWith("!popcorn @Kocacigim") || message.startsWith("!juice @kocacigim")  || message.startsWith("!juice @Kocacigim") || 
    message.startsWith("!burrito @kocacigim")  || message.startsWith("!burrito @Kocacigim")  || message.startsWith("!pie @kocacigim")  ||
    message.startsWith("!pie @Kocacigim")) {
    if (!isSub)
				client.say('videoyun', "Bana bunu ısmarlamak yerine sub olmaya ne dersin? FeelsOkayMan " + tags["username"]);
		}

//ısmarlama
		if (message.startsWith("!coffee @kocacigim")  || message.startsWith("!coffee @Kocacigim")) {
        client.say('videoyun', ` peepoHappy :coffee: ` +tags["username"]+ " teşekkür ederim. peepoKiss");
    return
    }

    if (message.startsWith("!meat @kocacigim") || message.startsWith("!meat @Kocacigim")) {
        client.say('videoyun',` peepoHappy :meat_on_bone: ` +tags["username"]+ " teşekkür ederim. peepoKiss");
    return
    }

    if (message.startsWith("!salad @kocacigim") || message.startsWith("!salad @Kocacigim")) {
        client.say('videoyun',` peepoHappy :green_salad: `+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!pizza @kocacigim") || message.startsWith("!pizza @Kocacigim")) {
        client.say('videoyun', ` peepoHappy :pizza: ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!popcorn @kocacigim")  || message.startsWith("!popcorn @Kocacigim")) {
        client.say('videoyun', ` peepoHappy nymnCorn ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!juice @kocacigim")  || message.startsWith("!juice @Kocacigim")) {
        client.say('videoyun', ` voyunSip ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!burrito @kocacigim") || message.startsWith("!burrito @Kocacigim")) {
        client.say('videoyun',` peepoHappy :burrito: `+tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }

    if (message.startsWith("!pie @kocacigim") || message.startsWith("!pie @Kocacigim")) {
        client.say('videoyun', ` peepoHappy :pie: ` +tags["username"]+ " teşekkür ederim. peepoKiss ");
    return
    }


//datalar
		if (tags.username !== "kocacigim") return;
			if (message.startsWith("!banafakayu"))
			setTimeout(() => { client.say('videoyun', "Toplam " +sayi+ " kere Faka Yu dediler bana. peepoH "); }, 1200);

			else if (message.startsWith("!datalar"))
			setTimeout(() => { client.say('videoyun', "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ Toplam " +fakayu+ " kere Faka Yu dedirtmişsiniz. PepoG " + " monkaW sayacı: " +monkaw + " monkaS sayacı: " +monkas+ "  monkaX sayacı: " +monkax+ "  ⠀⠀ peepoS sayacı: " +peepos+ " Sadge sayacı: " +sadge+ " peepoHappy sayacı: " +happy+"⠀ DIDSOMEONESAYCOCK sayacı: " +didsome+ " YEP Cock sayacı: " +cock ); }, 1200);


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
						return 'voyunRage';
						break
				default:
						return result;
		}
}
});

//timeout
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
