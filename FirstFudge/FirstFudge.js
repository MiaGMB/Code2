"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    const nodeCar = new f.Node("Node");
    const nodeGround = new f.Node("NodeGround");
    window.addEventListener("load", start);
    let viewport;
    function start(_event) {
        const canvas = document.querySelector("canvas");
        const camera = new f.ComponentCamera();
        //car
        const mesh = new f.MeshCube("cube");
        const cmpMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(4);
        nodeCar.addComponent(cmpMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 0, 1, 1);
        nodeCar.addComponent(cmpMaterial);
        const cpmTransform = new f.ComponentTransform();
        nodeCar.addComponent(cpmTransform);
        //Ground
        //Ground
        const groundMesh = new f.MeshQuad("Ground");
        const cmpGround = new f.ComponentMesh(groundMesh);
        cmpGround.mtxPivot.rotateX(-90, true);
        cmpGround.mtxPivot.scaleY(50);
        cmpGround.mtxPivot.scaleX(50);
        nodeGround.addComponent(cmpGround);
        const groundMaterial = new f.Material("Ground Material", f.ShaderLitTextured);
        const cmpGroundMaterial = new f.ComponentMaterial(groundMaterial);
        nodeGround.addComponent(cmpGroundMaterial);
        nodeGround.addChild(nodeCar);
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15);
        console.log(camera);
        viewport = new f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
    }
    function update() {
        const tSpeed = 3 / 1; //units per seconds
        const rSpeed = 360 / 3; // degrees per seconds
        const frameTimeInMillieSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMillieSeconds / 1000);
        // node.mtxLocal.rotate(degrees);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            nodeCar.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            nodeCar.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            nodeCar.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            nodeCar.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        viewport.camera.mtxPivot.lookAt(nodeCar.mtxWorld.translation);
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
