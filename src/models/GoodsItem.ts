export class GoodsItem {
    name: string;
    barcode: string;
    itemPhoto: string;
    itemBarcodePhoto: string;
    amount: number;
    supplier: string;
    department: string;

    constructor(name: string, barcode: string, itemPhoto: string, itemBarcodePhoto: string, amount: number, supplier: string, department: string) {
        this.name = name;
        this.barcode = barcode;
        this.itemPhoto = itemPhoto;
        this.itemBarcodePhoto = itemBarcodePhoto;
        this.amount = amount;
        this.supplier = supplier;
        this.department = department;
    }
}
