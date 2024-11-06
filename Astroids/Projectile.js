"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Projectile extends L09_Asteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.lifetime = 2;
            console.log("Asteroid constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            console.log(" Asteroid draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.strokeRect(-2, -2, 2, 2);
            L09_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.moveBy(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expandable = true;
        }
    }
    L09_Asteroids.Projectile = Projectile;
})(L09_Asteroids || (L09_Asteroids = {}));
