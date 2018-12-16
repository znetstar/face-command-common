import Status from "../Detection/Status";

/**
 * Options that will be passed to the {@link ICommandType} object when the command is triggered.
 */
export default class CommandOptions {
    /**
     * @param status - The {@link Status} created by the {@link IDetectionService} object.
     * @param data - Arbitrary data.
     */
    constructor(public status: Status, public data?: any) {

    }
}