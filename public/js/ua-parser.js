$(document).ready(() => {
    const parser = new UAParser(),
        device = parser.getDevice(),
        cpu = parser.getCPU(),
        os = parser.getOS(),
        browser = parser.getBrowser(),
        screenHeight = screen.height,
        screenWidth = screen.width;

    if (device.type === undefined) {
        $("#device-type").text("PC");
        $("#device-vendor").text("Not available");
        $("#device-model").text("Not available");
    } else {
        $("#device-type").text(device.type);
        $("#device-vendor").text(device.vendor);
        $("#device-model").text(device.model);
    }

    $("#cpu").text(cpu.architecture);
    $("#cores").text(navigator.hardwareConcurrency);
    $("#screen-size").text(window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
    
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
            .addClass("list-item");
        $("#plugins").append(currentPlugin);
    }
});