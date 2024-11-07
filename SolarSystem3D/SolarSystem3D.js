"use strict";
var SolarSystem;
(function (SolarSystem) {
    SolarSystem.f = FudgeCore;
    window.addEventListener("load", start);
    const sun = new SolarSystem.f.Node("Sun");
    let viewport;
    function start() {
        const earth = new SolarSystem.Body("earth", 1, "blue");
        sun.addChild(earth);
        console.log(earth);
        const canvas = document.querySelector("canvas");
        const camera = new SolarSystem.f.ComponentCamera();
        // camera.mtxPivot.translateZ(15);
        // camera.mtxPivot.translateY(15)
        viewport = new SolarSystem.f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        SolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarSystem.f.Loop.start();
    }
    function update() {
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
})(SolarSystem || (SolarSystem = {}));
