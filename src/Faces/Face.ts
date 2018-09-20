
/**
 * Represents a Face that will be used for detection.
 */
export default class Face {
    /**
     * Unqiue ID for the face.
     */
    public get ID():number { return this.id; }
    
    /**
     * Friendly name for the face.
     */
    public get Name():string { return this.name; }
    public set Name(value: string) { this.name = value; }

    /**
     * An `ArrayBuffer` containing an image of the face.
     */
    public get Image():ArrayBuffer { return this.image; }
    public set Image(value: ArrayBuffer) { this.image = value; }

    /**
     * If the face should be automatically loaded when the application starts.
     */
    public get Autostart():boolean { return this.autostart; }
    public set Autostart(value: boolean) { this.autostart = value; }

    /**
     * 
     * @param id - Unqiue ID for the face.
     * @param name - Friendly name for the face.
     * @param image - An `ArrayBuffer` containing an image of the face.
     * @param autostart - If the face should be automatically loaded when the application starts.
     */
    constructor(private id: number, private name: string, private image: ArrayBuffer, private autostart : boolean = false) {

    }
}