import Command from "./Command";
import RunCondition from "./RunCondition";
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
    public abstract AddCommand(commandType: string, runConditions: RunCondition[], name: string, data?: any): Promise<Command>;
    
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
    public abstract UpdateCommand(command: Command): Promise<Command>;
}