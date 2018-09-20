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
    RunOnFaceDetected,
    RunOnAnyFaceRecognized,
    RunOnSpecificFacesRecognized,
    RunOnNoFacesDetected,
    RunOnAnyFaceNoLongerRecognized,
    RunOnSpecificFacesNoLongerRecognized,
    RunOnFacesNoLongerDetected
};

/**
 * Represent a condition for the command being triggered. 
 */
export default class RunCondition {
    /**
     * Unique ID for the run condition.
     */
    public get ID():number { return this.id; }

    /**
     * The condition need to trigger the command.
     */
    public get RunConditionType():RunConditionType { return this.runConditionType; }
    public set RunConditionType(value: RunConditionType) { this.RunConditionType = value; }

    /**
     * The command to be triggered when the condition is met.
     */
    public get Command():Command { return this.command; }
    public set Command(value: Command) { this.command = value; }

    /**
     * If the RunConditionType is "RunOnSpecificFacesRecognized" or "RunOnSpecificFacesNoLongerRecognized" this property will be contain the faces needed for the condition to be met.
     */
    public get FacesToRecognize():Face[] { 
        if (this.RunConditionType !== RunConditionType.RunOnSpecificFacesRecognized && this.RunConditionType !== RunConditionType.RunOnSpecificFacesNoLongerRecognized)
            return undefined;
        return this.facesToRecognize; 
    }
    public set FacesToRecognize(value: Face[]) { 
        if (this.RunConditionType !== RunConditionType.RunOnSpecificFacesRecognized && this.RunConditionType !== RunConditionType.RunOnSpecificFacesNoLongerRecognized)
            throw new IncorrectRunConditionTypeToSetFaces(this.RunConditionType);
        this.facesToRecognize = value;
    }

    /**
     * 
     * @param id - Unique ID for the run condition.
     * @param runConditionType - The condition need to trigger the command.
     * @param command - The command to be triggered when the condition is met.
     * @param facesToRecognize  - Faces that will allow the condition to be met.
     */
    constructor(private id: number, private runConditionType: RunConditionType, private command: Command, private facesToRecognize?: Face[]) {

    }
}