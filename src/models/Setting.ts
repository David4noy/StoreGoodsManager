export class Setting {
    autoDeletePhotos: number;
    shouldDelete: boolean;

    constructor(autoDeletePhotos: number = 3, shouldDelete: boolean = false) {
        this.autoDeletePhotos = autoDeletePhotos;
        this.shouldDelete = shouldDelete;
    }
}
