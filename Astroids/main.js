"use strict";
var L09_Astroids;
(function (L09_Astroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Astroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Astroids.crc2 = canvas.getContext("2d");
        L09_Astroids.crc2.fillStyle = "black";
        L09_Astroids.crc2.strokeStyle = "withe";
        createPaths();
        console.log("Astroids paths: ", astroidPaths);
    }
})(L09_Astroids || (L09_Astroids = {}));
//# sourceMappingURL=main.js.map