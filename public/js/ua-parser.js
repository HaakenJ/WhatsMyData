$(document).ready(() => {
    const parser = new UAParser(),
        device = parser.getDevice(),
        cpu = parser.getCPU(),
        os = parser.getOS(),
        browser = parser.getBrowser();

    if (device.type === undefined) {
        $("#device-type").text("Desktop PC");
        $("#device-vendor").text("Not available");
        $("#device-model").text("Not available");
    } else {
        $("#device-type").text(device.type);
        $("#device-vendor").text(device.vendor);
        $("#device-model").text(device.model);
    }

    $("#cpu").text(cpu.architecture);
    $("#cores").text(navigator.hardwareConcurrency);

    navigator.getBattery().then((battery) => {
        $("#battery-charging").text(battery.charging ? "Yes" : "No");
        $("#battery-level").text(`${battery.level * 100}%`);
    });

    $("#op-sys").text(`${os.name} ${os.version}`);
    $("#browser").text(`${browser.name} ${browser.version}`)

    const pluginArray = navigator.plugins;

    for (let i = 0; i < pluginArray.length; i++) {
        let currentPlugin = $("<li>")
            .text(pluginArray[i].name)
            .addClass("plugin-name");
        $("#plugins").append(currentPlugin);
    }
});