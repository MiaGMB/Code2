namespace SolarSystem {

    class UniversalObjects {
        type: string[];
        name: string;
        info: string;
        color: string;
        radius: number;
        rotationSpeed: number;
        rotationAngle: number;
        distanceToCenter: number;
        path: Path2D;

        constructor( 
            _type: string[],
            _name: string,
            _color: string,
            _info: string,
            _radius: number,
            _rotationSpeed: number,
            _rotationAngle: number,
            _distanceToCenter: number){

                this.type = _type;
                this.name = _name;
                this.info = _info;
                this.color = _color;
                this.radius = _radius;
                this.rotationSpeed = _rotationSpeed;
                this.rotationAngle = _rotationAngle;
                this.distanceToCenter = _distanceToCenter;
            }
            

            draw():void{}

            orbit(_speedOfPlanets: number): void{}

            clickCheck(_x: number, _y: number): string {
                
            }
    }
}