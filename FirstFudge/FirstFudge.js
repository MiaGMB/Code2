"use strict";
var FirstFudge;
(function (FirstFudge) {
    var F = FudgeCore;
    const node = new F.Node("Node");
    window.addEventListener("load", start);
    let globalViewport;
    F.Loop.addEventListener("loopFrame" /* F.EVENT.LOOP_FRAME */, moveCube);
    function start(_event) {
        const canvas = document.querySelector("canvas");
        const mesh = new F.MeshCube("cube");
        const camera = new F.ComponentCamera();
        const cmpMesh = new F.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new F.Material("Material", F.ShaderLit);
        const cmpMaterial = new F.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 0, 2, 1);
        node.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const cmpTransform = new F.ComponentTransform();
        node.addComponent(cmpTransform);
        //node.getComponent(F.ComponentTransform).mtxLocal.translateX(2);
        node.mtxLocal.translateX(1);
        console.log(camera);
        const viewport = new F.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;
        F.Loop.start();
        F.Time.game.setScale(0.5);
    }
    function moveCube() {
        const frameInMillieSeconds = F.Loop.timeFrameGame;
        const frameInSeconds = (frameInMillieSeconds / 1000);
        const degrees = 360 * frameInSeconds;
        node.mtxLocal.rotateY(degrees);
        globalViewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
