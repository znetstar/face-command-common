import CommandOptions from "./CommandOptions";

/**
 * Command Types will inherit this interface.
 */
export default interface ICommandType {
    /**
     * The function that will be run when the command is triggered.
     * @param options - Options that will be used when the command is triggered.
     * @returns A Promise which will resolve when the command is complete. The Promise may return arbitrary data.
     * @async 
     */
    Run(options: CommandOptions): Promise<any>;
}