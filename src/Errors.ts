import { RunConditionType } from "./Commands/RunCondition";

/**
 * Error that will be throw if a user attempts to set the "FacesToRecognize" field on "RunCondition" when the "ReconditionType" does indicate "FacesToRecognize" needs to be set. 
 */
export class IncorrectRunConditionTypeToSetFaces extends Error {
    constructor(runConditionType: RunConditionType) {
        super(`Incorrect "RunConditionType" "${Number(runConditionType)}" to set "FacesToRecognize". Must be "RunOnSpecificFacesRecognized" or "RunOnSpecificFacesNoLongerRecognized".`);
    }
}