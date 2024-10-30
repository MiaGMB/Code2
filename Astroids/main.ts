namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height)

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        //createShip();

        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress" handleKeypress);
        // canvas.addEventListener("mousemove" setHeading);

        window.setInterval(upadte, 20)

        function shootProjectile(_event: MouseEvent): void{
            console.log("shoot projectile");
            let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let velocity: Vector = new Vector(0, 0);
            velocity.random(100, 100);
            let projectile: Projectile = new Projectile(origin, velocity);
            moveables.push(projectile);
        }

        function shootLaser(_event: MouseEvent): void {
            console.log("Shoot laser");
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
            console.log(asteroidHit)
            if (asteroidHit) 
                breakAsteroid(asteroidHit);
        }

        function getAsteroidHit(_hotspot: Vector): Asteroid | null {
            for (let moveable of moveables) {
                if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
                    return moveable;
            }
            return null
        }

        function breakAsteroid(_asteroid: Asteroid): void{
            if (asteroid.size > 0.3) {
                for (let i: number = 0; i < 2; i++) {
                    let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                    fragment.velocity.add(_asteroid.velocity); 
                    moveables.push(fragment);
                }
            }

            let index: number = moveables.indexOf(_asteroid)
            moveables.splice(index, 1)
        }

        function createAsteroids(_nAsteroids: number): void {
            console.log("Create asteroids");
            for (let i: number = 0; i < _nAsteroids; i++) {
                let asteroid: Asteroid = new Asteroid(1.0);
                moveables.push(asteroid);
            }
        }

        function upadte(): void {
            console.log("Update");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            for (let moveable of moveables) {
                moveable.moveBy(1 / 50);
                moveable.draw();
            }
            //ship.draw();
            //handleCollision();
        }


        let asteroid: Asteroid = new Asteroid(1)
        console.log(asteroid);
    }
}