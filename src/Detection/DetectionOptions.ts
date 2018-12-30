import Face from "../Faces/Face";
import EigenFaceRecognizerOptions from "./EigenFaceRecognizerOptions";

/**
 * Contains the options that will be passed to {@link IDetectionService}.
 */
export default class DetectionOptions {
    /**
     * 
     * @param frequency - List of faces to scan for during detection.
     * @param eigenFaceRecognizerOptions - How frequently capture from the capture source (e.g. webcam) in milliseconds.
     * @param faces - Options that will be passed to the EigenFaceRecognizer instance.
     * @param autostartFaces - Adds the faces that would be loaded on start.
     */
    constructor(public frequency: number, public eigenFaceRecognizerOptions: EigenFaceRecognizerOptions, public faces: Face[] = [], public autostartFaces: boolean = false) {
        
    }
}