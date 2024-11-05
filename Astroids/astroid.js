"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid extends L09_Asteroids.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_Asteroids.Vector(0, 0);
            this.velocity = new L09_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        moveBy(_timeslice) {
            console.log("Asteroid move");
            let offcet = new L09_Asteroids.Vector(this.velocity.x, this.velocity.y);
            offcet.scale(_timeslice);
            this.position.add(offcet);
            if (this.position.x < 0)
                this.position.x += L09_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Asteroids.crc2.canvas.height;
            if (this.position.x > L09_Asteroids.crc2.canvas.width)
                this.position.x -= L09_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Asteroids.crc2.canvas.height)
                this.position.y -= L09_Asteroids.crc2.canvas.height;
        }
        draw() {
            console.log(" Asteroid draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size);
            L09_Asteroids.crc2.translate(-50, -50);
            L09_Asteroids.crc2.lineWidth = 2 / this.size;
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]);
            L09_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new L09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
