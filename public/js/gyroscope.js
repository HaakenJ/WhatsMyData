$(document).ready(function () {
    // let gyroscope = new Gyroscope({
    //     frequency: 60
    // })
    // gyroscope.addEventListener('reading', e => {
    //     // console.log("Angular Velocity of X " + gyroscope.x)
    //     console.log("Angular Velocity of Y " + gyroscope.y)
    //     // console.log("Angular Velocity of Z " + gyroscope.z)

    // })
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


            // if (!alpha) {
            //     compass.hidden = true;
            //     element.innerHTML += '<br>Your device has no compass ';
            // } else {
            //     compass.hidden = false;
            //     element.innerHTML += '<br>alpha: ' + alpha
            // }

            // element.innerHTML += '<br>beta: ' + beta
            // element.innerHTML += '<br>gamma: ' + gamma + '<br>'
            // // Do stuff with the new orientation data
            // if (Math.abs(beta) + Math.abs(gamma) < 1.8) {
            //     element.innerHTML += 'Your Device is probably laying on a Table';
            // } else {
            //     element.innerHTML += 'Your Device is probably in your Hands';
            // }



        }
        window.addEventListener('deviceorientation', handleOrientation);
    }());

})



























// // helper function

// const RADIUS = 20;

// function degToRad(degrees) {
//     var result = Math.PI / 180 * degrees;
//     return result;
// }

// // setup of the canvas

// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

// var x = 50;
// var y = 50;

// function canvasDraw() {
//     ctx.fillStyle = "black";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "#f00";
//     ctx.beginPath();
//     ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
//     ctx.fill();
// }
// canvasDraw();

// // pointer lock object forking for cross browser

// canvas.requestPointerLock = canvas.requestPointerLock ||
//     canvas.mozRequestPointerLock;

// document.exitPointerLock = document.exitPointerLock ||
//     document.mozExitPointerLock;

// canvas.onclick = function () {
//     canvas.requestPointerLock();
// };

// // pointer lock event listeners

// // Hook pointer lock state change events for different browsers
// document.addEventListener('pointerlockchange', lockChangeAlert, false);
// document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

// function lockChangeAlert() {
//     if (document.pointerLockElement === canvas ||
//         document.mozPointerLockElement === canvas) {
//         console.log('The pointer lock status is now locked');
//         document.addEventListener("mousemove", updatePosition, false);
//     } else {
//         console.log('The pointer lock status is now unlocked');
//         document.removeEventListener("mousemove", updatePosition, false);
//     }
// }

// var tracker = document.getElementById('tracker');

// var animation;

// function updatePosition(e) {
//     x += e.movementX;
//     y += e.movementY;
//     if (x > canvas.width + RADIUS) {
//         x = -RADIUS;
//     }
//     if (y > canvas.height + RADIUS) {
//         y = -RADIUS;
//     }
//     if (x < -RADIUS) {
//         x = canvas.width + RADIUS;
//     }
//     if (y < -RADIUS) {
//         y = canvas.height + RADIUS;
//     }
//     tracker.textContent = "X position: " + x + ", Y position: " + y;

//     if (!animation) {
//         animation = requestAnimationFrame(function () {
//             animation = null;
//             canvasDraw();
//         });
//     }
// }