import Command from "./Command";
import CommandTypeBase from "./CommandTypeBase";
import RunCondition from "./RunCondition";
import DetectionServiceBase from "../Detection/DetectionServiceBase";
import Status from "../Detection/Status";
import IAppResources from "../IAppResources";
 
/**
 * Represents a service that will execute commands when conditions are met.
 */
export default abstract class CommandServiceBase {
    /**
     * Creates a CommandService
     * @param resources - Resources common to the application.
     * @param detectionService - The underlying detection service that will trigger commands when conditions are met.
     */
    constructor (protected resources: IAppResources) {

    }

    /**
     * Adds a command.
     * @param commandType - Type of command that will be run.
     * @param runConditions - Run conditions needed for the command to be triggered.
     * @param name - Friendly name for the commnad.
     * @param data - Arbitrary data passed to the command.
     * @async
     */
    public abstract AddCommand(commandType: CommandTypeBase, runConditions: RunCondition[], name: string, data?: any): Promise<Command>;
    
    /**
     * Retrieves a command.
     * @param id - The identifier of the command to retrieve.
     * @async
     */
    public abstract GetCommand(id: number): Promise<Command>;

    /**
     * Retrieves all commands.
     * @async
     */
    public abstract GetCommands(): Promise<Command[]>;

    /**
     * Removes a command.
     * @param id - The identifier of the command to retrieve.
     */
    public abstract RemoveCommand(id: number): Promise<void>;

    /**
     * Updates a command.
     * @param command - Command with properties to be updated.
     * @async
     */
    public abstract UpdateCommand(command: Command): Promise<void>;

    /**
     * Runs a command with a given state of the detection service.
     * @param command - The command to be run.
     * @param status - The state of the detector service.
     * @returns - Will returns a function which may resolve with arbitrary data.
     * @async
     */
    public abstract RunCommand(command: Command, status: Status): Promise<any>;

    /**
     * Event handler for the "StatusChange" event of the detection service.
     * @param Status - The new state of the detection service.
     */
    protected abstract OnStatusChange(Status: Status): void;
}