namespace FirstFudge {
    import F = FudgeCore;

    const node: F.Node = new F.Node("Node");

    window.addEventListener("load", start);
    let globalViewport: F.Viewport;

    F.Loop.addEventListener(F.EVENT.LOOP_FRAME, moveCube);

    function start(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const mesh: F.MeshCube = new F.MeshCube("cube");

        const camera: F.ComponentCamera = new F.ComponentCamera();

        const cmpMesh: F.ComponentMesh = new F.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        const material: F.Material = new F.Material("Material", F.ShaderLit);
        const cmpMaterial: F.ComponentMaterial = new F.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 5);
        node.addComponent(cmpMaterial);

        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180)

        const cmpTransform: F.ComponentTransform = new F.ComponentTransform();
        node.addComponent(cmpTransform);
        //node.getComponent(F.ComponentTransform).mtxLocal.translateX(2);
        node.mtxLocal.translateX(2);

        console.log(camera);

        const viewport: F.Viewport = new F.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();

        F.Loop.start();
    }

    function moveCube(): void{
        node.mtxLocal.rotateY(1);
        globalViewport.draw();
    }
}