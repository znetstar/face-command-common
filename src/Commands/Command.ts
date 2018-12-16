import RunCondition from "./RunCondition";
import CommandTypeBase from "./CommandTypeBase";
import Constructible from "../Constructible";

/**
 * Describes a Command that will be executable in response to an event occuring in the {@link DetectionServiceBase}.
 */
export default class Command {
    /**
     * Creates a {@link Command} object.
     * @param id - Unique ID for the command.
     * @param name - A friendly name for the command. Should also be unique.
     * @param type - Type of Command that will be executed.
     * @param runConditions - An array of conditions that will trigger the command.
     * @param data - Arbitrary data passed to the command.
     */
    constructor(public id: number, public name: string, public type: Constructible<CommandTypeBase>,  public runConditions: RunCondition[], public data?: any) {
        
    }
};