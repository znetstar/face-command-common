import Command from "./Command";
import ICommandType from "./ICommandType";
import RunCondition from "./RunCondition";
import IDetectionService from "../Detection/IDetectionService";
import Status from "../Detection/Status";

/**
 * Represents a service that will execute commands when conditions are met.
 */
export default interface ICommandService {
    /**
     * Creates a CommandService
     * @param detectionService - The underlying detection service that will trigger commands when conditions are met.
     */
    new(detectionService: IDetectionService): ICommandService;

    /**
     * Adds a command.
     * @param commandType - Type of command that will be run.
     * @param runConditions - Run conditions needed for the command to be triggered.
     * @param name - Friendly name for the commnad.
     * @param data - Arbitrary data passed to the command.
     * @async
     */
    AddCommand(commandType: ICommandType, runConditions: RunCondition[], name: string, data?: any): Promise<Command>;
    
    /**
     * Retrieves a command.
     * @param id - The identifier of the command to retrieve.
     * @async
     */
    GetCommand(id: number): Promise<Command>;

    /**
     * Retrieves all commands.
     * @async
     */
    GetCommands(): Promise<Command[]>;

    /**
     * Removes a command.
     * @param id - The identifier of the command to retrieve.
     */
    RemoveCommand(id: number): Promise<any>;

    /**
     * Updates a command.
     * @param command - Command with properties to be updated.
     * @async
     */
    UpdateCommand(command: Command): Promise<any>;

    /**
     * Runs a command with a given state of the detection service.
     * @param command - The command to be run.
     * @param status - The state of the detector service.
     * @returns - Will returns a function which may resolve with arbitrary data.
     * @async
     */
    RunCommand(command: Command, status: Status): Promise<any>;

    /**
     * Event handler for the "StatusChange" event of the detection service.
     * @param Status - The new state of the detection service.
     */
    OnStatusChange(Status: Status): void;
}