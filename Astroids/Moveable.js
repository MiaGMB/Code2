"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_Asteroids.Vector(0, 0);
            this.velocity = new L09_Asteroids.Vector(0, 0);
        }
        moveBy(_timeslice) {
            // console.log("Moveable move");
            let offcet = this.velocity.copy();
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
            //consloe.log("Moveable move");
        }
    }
    L09_Asteroids.Moveable = Moveable;
})(L09_Asteroids || (L09_Asteroids = {}));
