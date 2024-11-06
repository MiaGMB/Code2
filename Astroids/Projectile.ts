namespace L09_Asteroids {
    export class Projectile extends Moveable {
        lifetime: number = 2;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position)

            console.log("Asteroid constructor");    
            this.velocity = _velocity.copy();

        }

        draw(): void {
            console.log(" Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-2, -2, 2, 2);
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.moveBy(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expandable = true;

        }
    }
}