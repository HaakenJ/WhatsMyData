$(document).ready(() => {
    const parser = new UAParser();
    const device = parser.getDevice();
    const cpu = parser.getCPU();

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
        $("#battery-level").text(battery.level * 100 + "%");
    })
});