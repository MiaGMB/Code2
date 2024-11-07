"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body extends SolarSystem.f.Node {
        constructor(_name, _size, _color) {
            super(_name);
            this.distance = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.cmpMash = new SolarSystem.f.ComponentMesh(Body.mesh);
            this.cmpMaterial = new SolarSystem.f.ComponentMaterial(Body.material);
            super.addComponent(new SolarSystem.f.ComponentTransform());
        }
        setTransform(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
    }
    Body.mesh = new SolarSystem.f.MeshSphere("Body");
    Body.material = new SolarSystem.f.Material("Body", SolarSystem.f.ShaderLit);
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
