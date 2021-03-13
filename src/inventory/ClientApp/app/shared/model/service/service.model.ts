export interface IServiceModel {
    name: string;
    displayName: string;
    startMode: string;
    state:string;
}

export class ServiceModel implements IServiceModel {
    name: string;
    displayName: string;
    startMode: string;
    state: string;

    constructor(name?: string,
        displayName?: string,
        startMode?: string,
        state?: string) {
        this.name = name && name || "";
        this.displayName = displayName && displayName || "";
        this.startMode = startMode && startMode || "";
        this.state = state && state || "";
    }
}

