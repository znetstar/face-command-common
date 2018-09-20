/**
 * Options that will be passed to the EigenFaceRecognizer instance.
 */
export default class EigenFaceRecognizerOptions {
    public get Components():number { return this.components; }
    public set Components(value: number) { this.components = value; }

    public get Threshold():number { return this.threshold; }
    public set Threshold(value: number) { this.threshold = value; }

    constructor(private components: number, private threshold: number) {

    }
}