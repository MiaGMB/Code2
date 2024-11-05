"use strict";
var FirstFudge;
(function (FirstFudge) {
    var F = FudgeCore;
    window.addEventListener("load", start);
    function start(_event) {
        const canvas = document.querySelector("canvas");
        const mesh = new F.MeshCube("cube");
        const camera = new F.ComponentCamera();
        const node = new F.Node("Node");
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
    }
})(FirstFudge || (FirstFudge = {}));
