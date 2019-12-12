/* eslint-disable indent */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
var socialMediaLogins = function(callback) {
  var socialMediaSites = [
        {
            domain: "https://www.facebook.com/",
			redirect: "",
			name: "Facebook",
		},
		{
			domain: "https://www.youtube.com/",
			redirect: "",
			name: "YouTube",
		},
		{
			domain: "https://twitter.com/",
			redirect:
				"",
			name: "Twitter",
		},
		{
			domain: "https://www.reddit.com/",
			redirect:
				"",
			name: "Reddit",
		},
		{
			domain: "https://www.pinterest.com/",
			redirect: "",
			name: "Pinterest",
		},
		{
			domain: "https://www.tumblr.com/",
			redirect: "",
			name: "Tumblr",
		},
		{
			domain: "https://www.indeed.com/",
			redirect: "",
			name: "Indeed",
		},
		{
			domain: "https://mail.google.com/",
			redirect: "",
			name: "GMail",
		},
		{
			domain: "https://www.meetup.com/",
			redirect: "",
			name: "Meetup",
		},
		{
			domain: "https://www.whatsapp.com/",
			redirect: "",
			name: "WhatsApp",
		},
		{
			domain: "https://slack.com/",
			redirect: "",
			name: "Slack",
		},
		{
			domain: "https://www.amazon.com/",
			redirect: "",
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
