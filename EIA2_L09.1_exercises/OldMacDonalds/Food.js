"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Food {
        constructor(_stock, _type) {
            this.stock = _stock;
            this.type = _type;
        }
        updateStock(_stock) {
            this.stock = this.stock - _stock;
            return this.stock;
        }
    }
    OldMacDonald.Food = Food;
})(OldMacDonald || (OldMacDonald = {}));
