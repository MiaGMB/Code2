namespace SolarSystem {
    export import f = FudgeCore;

    window.addEventListener("load", start);

    const sun: f.Node = new f.Node("Sun");
    let viewport: f.Viewport;

    function start(): void {
        const earth: Body = new Body("earth", 1, "blue");
        sun.addChild(earth)
        console.log(earth);

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const camera: f.ComponentCamera = new f.ComponentCamera();

        // camera.mtxPivot.translateZ(15);
        // camera.mtxPivot.translateY(15)

        viewport = new f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }

    function update(): void{
       // const tSpeed: number = 3 / 1; //units per seconds
        //const rSpeed: number = 360 / 3; // degrees per seconds
        //const frameTimeInMillieSeconds: number = f.Loop.timeFrameGame;
        //const frameTimeInSeconds: number = (frameTimeInMillieSeconds/ 1000);
        // node.mtxLocal.rotate(degrees);

       // if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
         //   nodeCar.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        //if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
           // nodeCar.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);

        //if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
          //  nodeCar.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        //if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
        //    nodeCar.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);

        //const up: f.Vector3 = f.Vector3.Y();
        //viewport.camera.mtxPivot.lookAt(nodeCar.mtxWorld.translation);
        //f.Recycler.store(up);
        
        viewport.draw();
    }
}