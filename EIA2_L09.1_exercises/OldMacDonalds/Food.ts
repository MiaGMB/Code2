namespace OldMacDonald {

export class Food {
    stock: number;
    type: string;

    constructor(_stock: number, _type: string) {
        this.stock = _stock;
        this.type = _type;
    }
    updateStock(_stock: number): number {
        this.stock = this.stock- _stock 
        return this.stock
    }

}
}