export interface IProductModel {
    caption: string;
    version: string;
    installDate: string;
    
}

export class ProductModel implements IProductModel {
    caption: string;
    version: string;
    installDate: string;

    constructor(caption?: string,
        version?: string,
        installDate?: string
    ) {
        this.caption = caption && caption || "";
        this.version = version && version || "";
        this.installDate = installDate && installDate || "";
    }
}