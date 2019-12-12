$(document).ready(function () {

    // gyroscope.start()
    (function () {
        function handleOrientation(event) {
            var absolute = event.absolute;
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;
            $("#isAbsolute").text(absolute);
            if (alpha === null) {
                $("#x").text("No gyro available.");
                $("#y").text("0");
                $("#z").text("0");
            } else {
                $('#x').text(alpha);
                $('#y').text(beta);
                $('#z').text(gamma);
            }
            console.log(absolute, alpha, beta, gamma);


        }
        window.addEventListener('deviceorientation', handleOrientation);
    }());

})