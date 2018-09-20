import RunCondition from "./RunCondition";
import ICommandType from "./ICommandType";

/**
 * Describes a Command that will be executable in response to an event occuring in the {@link IDetectionService}.
 */
export default class Command {
    /**
     * A unique identifier assigned to the command.
     */
    public get ID():number { return this.id; }

    /**
     * A friendly name assigned to the command.
     */
    public get Name():string { return this.name; }
    public set Name(value: string) { this.name = value; }

    /**
     * What type of command will be executable (screen lock, custom shell command, etc).
     */
    public get Type():ICommandType { return this.type; }
    public set Type(value: ICommandType) { this.type = value; }

    /**
     * Arbitrary data that will be passed to the command.
     * Should be serializable to JSON. 
     */
    public get Data():any { return this.data; }
    public set Data(value: any) { this.data = value; }

    /**
     * An array of conditions that will trigger the command.
     */
    public get RunCondition():RunCondition[] { return this.runConditions; }
    public set RunConditions(value: RunCondition[]) { this.runConditions = value; }

    /**
     * Creates a {@link Command} object.
     * @param id - Unique ID for the command.
     * @param name - A friendly name for the command. Should also be unique.
     * @param type - Type of Command that will be executed.
     * @param runConditions - An array of conditions that will trigger the command.
     * @param data - Arbitrary data passed to the command.
     */
    constructor(private id: number, private name: string, private type: ICommandType,  private runConditions: RunCondition[], private data?: any) {
        
    }
};