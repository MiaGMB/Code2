namespace SolarSystem {
    export class Body extends f.Node{
        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("Body", f.ShaderLit);

        // public name: String
      //  public position: f.Vector3;

        private size: number;
        private distance: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;
        private cmpMash: f.ComponentMesh;
        private cmpMaterial: f.ComponentMaterial;
        
        public constructor (_name: string, _size: number, _color: string) {
            super(_name)
            this.name = _name;
            this.size = _size;

            this.cmpMash = new f.ComponentMesh(Body.mesh);
            this.cmpMaterial = new f.ComponentMaterial(Body.material);
            super.addComponent(new f.ComponentTransform())
        }

        public setTransform(_vOrbit: number, _vRotation: number, _distance: number): void {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
    }
}