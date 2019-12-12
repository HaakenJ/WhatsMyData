$(document).ready(function () {

    // gyroscope.start()
    (function () {
        var element = document.getElementById('gyroscope');
        var compass = document.getElementById('compass');
        // compass.hidden = true;

        function handleOrientation(event) {
            var absolute = event.absolute;
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;
            $('.x').text(alpha)
            $('.y').text(beta)
            $('.z').text(gamma)
            // element.innerHTML = 'Orientation: ' + absolute


        }
        window.addEventListener('deviceorientation', handleOrientation);
    }());

})