var socialMediaLogins = function (callback) {
	var socialMediaSites = [{
		url: "https://squareup.com/login?return_to=%2Ffavicon.ico",
		name: "Square"
	}, {
		url: "https://www.instagram.com/accounts/login/?next=%2Ffavicon.ico",
		name: "Instagram"
	}, {
		url: "https://twitter.com/login?redirect_after_login=%2Ffavicon.ico",
		name: "Twitter"
	}, {
		url: "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
		name: "Facebook"
	}, {
		url: "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=de&service=youtube",
		name: "Google"
	}, , {
		url: "https://plus.google.com/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
		name: "Google Plus"
	}, {
		url: "https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
		name: "Skype"
	}, {
		url: "https://www.spotify.com/de/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
		name: "Spotify"
	}, {
		url: "https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
		name: "Reddit"
	}, {
		url: "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
		name: "Tumblr"
	}, {
		url: "https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
		name: "Expedia"
	}, {
		url: "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Ficons%2Ficon_spacer-vflN3BYt2.gif",
		name: "Dropbox"
	}, {
		url: "https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
		name: "Amazon"
	}, {
		url: "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
		name: "Pinterest"
	}, {
		url: "https://www.netflix.com/Login?nextpage=%2Ffavicon.ico",
		name: "Netflix"
	}, {
		url: "https://de.foursquare.com/login?continue=%2Ffavicon.ico",
		name: "Foursquare"
	}, {
		url: "https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",
		name: "Battle.net"
	}, {
		url: "https://store.steampowered.com/login/?redir=favicon.ico",
		name: "Steam"
	}, {
		url: "https://stackoverflow.com/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",
		name: "Stack Overflow"
	}, , {
		url: "https://accounts.google.com/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
		name: "Blogger"
	}];

	socialMediaSites.forEach(function (network) {
		// The onload function would not work when using jQuery to
		// create the img element...
		var img = document.createElement('img');
		// The below line was stopping the login page from sending its info.
		// img.referrerPolicy = "no-referrer";
		img.src = network.url;
		img.onload = function() {
			console.log(`Logged into ${network.name}`);
			callback(network.name);
		};
		img.onerror = function() {};
	});
};

// Callback function add the logins to the html page.
function addNetworkToList(name) {
	let newNetwork = $("<li>").text(name).addClass("card-desc list-item");
	$("#media-logins").append(newNetwork);
};

$(document).ready(() => {
	socialMediaLogins(addNetworkToList);
})