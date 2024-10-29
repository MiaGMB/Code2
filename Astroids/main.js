"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black";
        L09_Asteroids.crc2.strokeStyle = "withe";
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        L09_Asteroids.createPaths();
        console.log("Asteroids paths: ", L09_Asteroids.asteroidPaths);
        let asteroid = new L09_Asteroids.Asteroid(1);
        console.log(asteroid);
        asteroid.draw();
        asteroid.moveBy(0.1);
    }
})(L09_Asteroids || (L09_Asteroids = {}));
