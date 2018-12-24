import IAppResources from "./IAppResources";

/**
 * Represents a service that can get/set config values.
 * Logs are also emitted via the class.
 */
export default abstract class ConfigServiceBase {
    /**
     *@param resources - Common resources of the application.
     */
    constructor(protected resources: IAppResources) { }

    public abstract GetConfigValue(key: string): Promise<any>;
    public abstract SetConfigValue(key: string, value: string): Promise<void>;
    public abstract GetConfig(): Promise<any>;
    public abstract SetConfig(object: any, parentKey: string): Promise<void>;
    public abstract SaveConfig(): Promise<void>;
    public abstract LoadConfig(): Promise<void>;
}