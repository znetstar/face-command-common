import { EventEmitter2 as EventEmitter } from "eventemitter2";
import IAppResources from "../IAppResources";

/**
 * Logs are also emitted via this class.
 */
export default abstract class LogsServiceBase extends EventEmitter {
    /**
     *@param resources - Common resources of the application.
     */
    constructor(protected resources: IAppResources) { super(); }

    /**
     * Returns past logs.
     * @param start - Will be passed to winston.
     */
    public abstract async StreamHistory(start?: number): Promise<void>;
}