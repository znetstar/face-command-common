import Face from "../Faces/Face";
import Command from "./Command";

/**
 * Error that will be throw if a user attempts to set the "FacesToRecognize" field on "RunCondition" when the "ReconditionType" does indicate "FacesToRecognize" needs to be set. 
 */
export class IncorrectRunConditionTypeToSetFaces extends Error {
    constructor(runConditionType: RunConditionType) {
        super(`Incorrect "RunConditionType" "${Number(runConditionType)}" to set "FacesToRecognize". Must be "RunOnSpecificFacesRecognized" or "RunOnSpecificFacesNoLongerRecognized".`);
    }
}

/**
 * Possible conditions for the command to be triggered.
 */
export enum RunConditionType {
    RunOnFaceDetected = 0,
    RunOnAnyFaceRecognized = 1,
    RunOnSpecificFacesRecognized = 2,
    RunOnNoFacesDetected = 3,
    RunOnAnyFaceNoLongerRecognized = 4,
    RunOnSpecificFacesNoLongerRecognized = 5,
    RunOnFacesNoLongerDetected = 6
};

/**
 * Represent a condition for the command being triggered. 
 */
export default class RunCondition {
    /**
     * 
     * @param runConditionType - The condition need to trigger the command.
     * @param facesToRecognize  - Faces that will allow the condition to be met.
     * @param id - Unique ID for the run condition.
     * @param commandId - ID for the parent command.
     */
    constructor (public runConditionType: RunConditionType, public facesToRecognize?: Face[], public id?: number, public commandId?: number) {
    }
}