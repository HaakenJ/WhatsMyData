/* eslint-disable indent */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
var socialMediaLogins = function(callback) {
  var socialMediaSites = [
        {
            domain: "https://www.facebook.com/",
			redirect: "https://www.facebook.com/favicon.ico?_rdr=p#_=_",
			name: "Facebook",
		},
		{
			domain: "https://www.youtube.com/",
			redirect: "https://www.youtube.com/favicon.ico?pli=1",
			name: "YouTube",
		},
		{
			domain: "https://twitter.com/",
			redirect:
				"https://twitter.com/login?redirect_after_login=%2f..%2ffavicon.ico",
			name: "Twitter",
		},
		{
			domain: "https://www.reddit.com/",
			redirect:
				"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
			name: "Reddit",
		},
		{
			domain: "https://www.pinterest.com/",
			redirect: "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
			name: "Pinterest",
		},
		{
			domain: "https://www.tumblr.com/",
			redirect: "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
			name: "Tumblr",
		},
		{
			domain: "https://www.indeed.com/",
			redirect: "https://secure.indeed.com/account/login?continue=%2ffavicon.ico",
			name: "Indeed",
		},
		{
			domain: "https://mail.google.com/",
			redirect: "https://www.google.com/favicon.ico?pli=1",
			name: "GMail",
		},
		{
			domain: "https://www.meetup.com/",
			redirect: "https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
			name: "Meetup",
		},
		{
			domain: "https://slack.com/",
			redirect: "https://a.slack-edge.com/cebaa/img/ico/favicon.ico#",
			name: "Slack",
		},
		{
			domain: "https://www.amazon.com/",
			redirect: "https://www.amazon.com/favicon.ico?",
			name: "Amazon",
		},
	];
	socialMediaSites.forEach(function() {
		var img = document.createElement("img");
		img.referrerPolicy = "no-referrer";
		img.src = network.domain + network.redirect;
		img.onload = function() {
			callback(network, true);
		};
		img.onerror = function() {
			callback(network, false);
		};
	});
};
