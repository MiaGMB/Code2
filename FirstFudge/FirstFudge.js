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
        cmpMaterial.clrPrimary.set(1, 0, 0, 5);
        node.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const cmpTransform = new F.ComponentTransform();
        node.addComponent(cmpTransform);
        //node.getComponent(F.ComponentTransform).mtxLocal.translateX(2);
        node.mtxLocal.translateX(2);
        console.log(camera);
        const viewport = new F.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        F.Loop.start();
    }
    function moveCube() {
        node.mtxLocal.rotateY(1);
        globalViewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
