"use strict";
var SolarSystem;
(function (SolarSystem) {
    class UniversalObjects {
        constructor(_type, _name, _color, _info, _radius, _rotationSpeed, _rotationAngle, _distanceToCenter) {
            this.type = _type;
            this.name = _name;
            this.info = _info;
            this.color = _color;
            this.radius = _radius;
            this.rotationSpeed = _rotationSpeed;
            this.rotationAngle = _rotationAngle;
            this.distanceToCenter = _distanceToCenter;
        }
        draw() { }
        orbit(_speedOfPlanets) { }
        clickCheck(_x, _y) {
        }
    }
})(SolarSystem || (SolarSystem = {}));
