import Status from "../Detection/Status";

/**
 * Options that will be passed to the {@link ICommandType} object when the command is triggered.
 */
export default class CommandOptions {
    /**
     * The {@link Status} created by the {@link IDetectionService} object.
     */
    public get Status(): Status { return this.status; }
    public set Status(value: Status) { this.status = value; }

    /**
     * Arbitrary data. 
     */
    public get Data(): any { return this.data; }
    public set Data(value: any) { this.data = value; }

    /**
     * @param status - The {@link Status} created by the {@link IDetectionService} object.
     * @param data - Arbitrary data.
     */
    constructor(private status: Status, private data?: any) {

    }
}