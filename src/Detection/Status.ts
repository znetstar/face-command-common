import Face from "../Faces/Face";

/**
 * Possible states of {@link DetectionServiceBase}.
 */
export enum StatusType {
    NoFacesDetected = 0,
    FacesDetected = 1,
    FacesRecognized = 2,
    FacesNoLongerRecognized = 3,
    FacesNoLongerDetected = 4,
    BrightnessTooLow = 5
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
    [ StatusType.FacesNoLongerDetected, "Faces are no longer being detected" ],
    [ StatusType.BrightnessTooLow, "Brightness is too low to detect faces" ]
]);

Object.freeze(StatusText);

/**
 * Represents a change in status of {@link DetectionServiceBase}.
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
     * String representation of StatusType.
     */
    public toString():string {
        return Status.StatusToString(this.statusType);
    }

    /**
     * 
     * @param id - Unqiue ID for this status object.
     * @param statusType - State of {@link DetectionServiceBase}.
     * @param time - When the status occured.
     * @param recognizedFaceIDs - List of faces detected by {@link DetectionServiceBase}.
     * @param brightness - Brightness of the frame that created the status.
     * @param lastStatus - The last status that occured.
     */
    constructor(public id: number, public statusType: StatusType, public time: Date = new Date(), public brightness: number, public recognizedFaces: Face[] = []) {
        
    }
}