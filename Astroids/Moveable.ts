namespace L09_Asteroids {

    export class Moveable {
        position: Vector;
        velocity: Vector;
        expandable: boolean = true;

        constructor(_position?: Vector) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }

        moveBy(_timeslice: number): void {
            // console.log("Moveable move");
            let offcet: Vector = this.velocity.copy();
            offcet.scale(_timeslice);
            this.position.add(offcet);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            //consloe.log("Moveable move");
        }
    }
}