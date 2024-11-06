namespace FirstFudge {
    import f = FudgeCore;

    const nodeCar: f.Node = new f.Node("Node");
    const nodeGround: f.Node = new f.Node("NodeGround");

    window.addEventListener("load", start);
    let viewport: f.Viewport;

    function start(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        
        const camera: f.ComponentCamera = new f.ComponentCamera();

        //car
        const mesh: f.MeshCube = new f.MeshCube("cube");

        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(4);
        nodeCar.addComponent(cmpMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 0, 1, 1);
        nodeCar.addComponent(cmpMaterial);

        const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        nodeCar.addComponent(cpmTransform);

        //Ground
        //Ground
        const groundMesh: f.Mesh = new f.MeshQuad("Ground");

        const cmpGround: f.ComponentMesh = new f.ComponentMesh(groundMesh);
        cmpGround.mtxPivot.rotateX(-90, true);
        cmpGround.mtxPivot.scaleY(50);
        cmpGround.mtxPivot.scaleX(50);
        nodeGround.addComponent(cmpGround);

        const groundMaterial: f.Material = new f.Material("Ground Material", f.ShaderLitTextured);
        const cmpGroundMaterial: f.ComponentMaterial = new f.ComponentMaterial(groundMaterial);
        nodeGround.addComponent(cmpGroundMaterial);
        nodeGround.addChild(nodeCar);


        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15)

        console.log(camera);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }

    function update(): void{
        const tSpeed: number = 3 / 1; //units per seconds
        const rSpeed: number = 360 / 3; // degrees per seconds
        const frameTimeInMillieSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMillieSeconds/ 1000);
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
}