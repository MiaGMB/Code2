namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "withe";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height)

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        //createShip();

        // canvas.addEventListener("mousedown", loadLaser);
        // canvas.addEventListener("mouseup" shootLaser);
        // canvas.addEventListener("keypress" handleKeypress);
        // canvas.addEventListener("mousemove" setHeading);

        window.setInterval(upadte, 20)

        function createAsteroids(_nAsteroids: number): void {
            console.log("Create asteroids");
            for (let i: number = 0; i < _nAsteroids; i++) {
                let asteroid: Asteroid = new Asteroid(1.0);
                asteroids.push(asteroid);
            }
        }

        function upadte(): void{
            console.log("Update");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            for (let asteroid of asteroids) {
                asteroid.moveBy(1/ 50);
                asteroid.draw();
            }

            //ship.draw();
            //handleCollision();
        }


        let asteroid: Asteroid = new Asteroid(1)
        console.log(asteroid);
    }
}