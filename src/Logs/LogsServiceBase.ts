import { EventEmitter2 as EventEmitter } from "eventemitter2";
import IAppResources from "../IAppResources";

/**
 * Logs are sent via this service.
 */
export default abstract class LogsServiceBase extends EventEmitter {
    /**
     *@param resources - Common resources of the application.
     */
    constructor(protected resources: IAppResources) { super(); }

    /**
     * Returns past logs.
     * @param start - Will be passed to winston.
     * @async
     */
    public abstract async StreamHistory(start?: number): Promise<void>;
}