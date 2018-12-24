import CommandOptions from "./CommandOptions";
import IAppResources from "../IAppResources";

/**
 * Command Types will inherit from this class.
 */
export default abstract class CommandTypeBase {
    /**
     * 
     * @param resources - Command resources of the application
     */
    constructor(protected resources: IAppResources) {

    }
    
    /** 
     * Returns the name of the CommandType.
     */
    public toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

    /**
     * The function that will be run when the command is triggered.
     * @param options - Options that will be used when the command is triggered.
     * @returns A Promise which will resolve when the command is complete. The Promise may return arbitrary data.
     * @async 
     */
    public abstract Run(options: CommandOptions): Promise<any>;
}