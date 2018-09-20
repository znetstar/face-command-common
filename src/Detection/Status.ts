import Face from "../Faces/Face";

/**
 * Possible states of {@link IDetectionService}.
 */
export enum StatusType {
    NoFacesDetected,
    FacesDetected,
    FacesRecognized,
    FacesNoLongerRecognized,
    FacesNoLongerDetected    
}

/**
 * Friendly text for {@link StatusType} that will be displayed to the user.
 * @constant
 */
const StatusText = new Map<StatusType, string>([
    [ StatusType.NoFacesDetected, "No faces have been detected" ],
    [ StatusType.FacesDetected, "Faces have been detected" ],
    [ StatusType.FacesRecognized, "Faces have been recognized" ],
    [ StatusType.FacesNoLongerRecognized, "Faces are still being detected are no longer being recognized" ],
    [ StatusType.FacesNoLongerDetected, "Faces are no longer being detected" ]
]);

Object.freeze(StatusText);

/**
 * Represents a change in status of {@link IDetectionService}.
 */
export default class Status {
    /**
     * Converts {@link StatusType} to friendly text to present to the user.
     * @param statusType - {@link StatusType} to convert.
     */
    public static StatusToString(statusType: StatusType) : string {
        return StatusText.get(statusType);
    }

    /**
     * Unqiue ID for this status object.
     */
    public get ID():number { return this.id; }

    /**
     * State of {@link IDetectionService}.  
     */
    public get StatusType():StatusType { return this.statusType; }
    public set StatusType(value: StatusType) { this.statusType = value; }

    /**
     * List of faces detected by {@link IDetectionService}.
     */
    public get RecognizedFaceIDs():Face[] { return this.recognizedFaceIDs; }
    public set RecognizedFaceIDs(value: Face[]) { this.recognizedFaceIDs = value; }

    /**
     * String representation of StatusType.
     */
    public toString():string {
        return Status.StatusToString(this.StatusType);
    }

    /**
     * 
     * @param id - Unqiue ID for this status object.
     * @param statusType - State of {@link IDetectionService}.
     * @param recognizedFaceIDs - List of faces detected by {@link IDetectionService}.
     */
    constructor(private id: number, private statusType: StatusType, private recognizedFaceIDs: Face[] = []) {

    }
}