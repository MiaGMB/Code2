"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    L09_Asteroids.lineWidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black";
        L09_Asteroids.crc2.strokeStyle = "white";
        L09_Asteroids.crc2.lineWidth = L09_Asteroids.lineWidth;
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        L09_Asteroids.createPaths();
        console.log("Asteroids paths: ", L09_Asteroids.asteroidPaths);
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress" handleKeypress);
        // canvas.addEventListener("mousemove" setHeading);
        window.setInterval(upadte, 20);
        function shootProjectile(_event) {
            console.log("shoot projectile");
            let origin = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
            let velocity = new L09_Asteroids.Vector(0, 0);
            velocity.random(100, 100);
            let projectile = new L09_Asteroids.Projectile(origin, velocity);
            moveables.push(projectile);
        }
        function shootLaser(_event) {
            console.log("Shoot laser");
            let hotspot = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
            let asteroidHit = getAsteroidHit(hotspot);
            console.log(asteroidHit);
            if (asteroidHit)
                breakAsteroid(asteroidHit);
        }
        function getAsteroidHit(_hotspot) {
            for (let moveable of moveables) {
                if (moveable instanceof L09_Asteroids.Asteroid && moveable.isHit(_hotspot))
                    return moveable;
            }
            return null;
        }
        function breakAsteroid(_asteroid) {
            if (_asteroid.size > 0.3) {
                for (let i = 0; i < 2; i++) {
                    let fragment = new L09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                    fragment.velocity.add(_asteroid.velocity);
                    moveables.push(fragment);
                }
            }
            _asteroid.expandable = true;
        }
        function createAsteroids(_nAsteroids) {
            console.log("Create asteroids");
            for (let i = 0; i < _nAsteroids; i++) {
                let asteroid = new L09_Asteroids.Asteroid(1.0);
                moveables.push(asteroid);
            }
        }
        function upadte() {
            // console.log("Update");
            L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
            for (let moveable of moveables) {
                moveable.moveBy(1 / 50);
                moveable.draw();
            }
            deleteExpandables();
            //ship.draw();
            //handleCollision();
            console.log("Moveable length: ", moveables.length);
        }
        function deleteExpandables() { }
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expandable)
                moveables.splice(i, 1);
        }
    }
})(L09_Asteroids || (L09_Asteroids = {}));
