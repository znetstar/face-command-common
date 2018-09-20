import Face from "../Faces/Face";
import EigenFaceRecognizerOptions from "./EigenFaceRecognizerOptions";

/**
 * Contains the options that will be passed to {@link IDetectionService}.
 */
export default class DetectionOptions {
    /**
     * List of faces to scan for during detection.
     */
    public get Faces():Face[] { return this.faces; }
    public set Faces(value: Face[]) { this.faces = value; }

    /**
     * How frequently capture from the capture source (e.g. webcam) in milliseconds.
     */
    public get Frequency():number { return this.frequency; }
    public set Frequency(value: number) { this.frequency = value; }

    /**
     * Options that will be passed to the EigenFaceRecognizer instance.
     */
    public get EigenFaceRecognizerOptions():EigenFaceRecognizerOptions { return this.eigenFaceRecognizerOptions; }
    public set EigenFaceRecognizerOptions(value: EigenFaceRecognizerOptions) { this.eigenFaceRecognizerOptions = value; }

    /**
     * 
     * @param frequency - List of faces to scan for during detection.
     * @param eigenFaceRecognizerOptions - How frequently capture from the capture source (e.g. webcam) in milliseconds.
     * @param faces - Options that will be passed to the EigenFaceRecognizer instance.
     */
    constructor(private frequency: number, private eigenFaceRecognizerOptions: EigenFaceRecognizerOptions, private faces: Face[] = []) {
        
    }
}