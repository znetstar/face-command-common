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

    /**
     * Retrieves a configuration property.
     * @param key - Configuration property to retrieve.
     * @async
     */
    public abstract GetConfigValue(key: string): Promise<any>;

    /**
     * Sets a configuration property.
     * @param key - Configuration property to set.
     * @param value - Value to set.
     * @async
     */
    public abstract SetConfigValue(key: string, value: string): Promise<void>;

    /**
     * Retrieves all configuration properties.
     * @async
     */
    public abstract GetConfig(): Promise<any>;

    /**
     * Sets multiple configuration properties
     * @param object - An object containing keys and values to set.
     * @param parentKey - The key of the parent configuration property to apply the changes to. Defaults to the root object.
     * @async
     */
    public abstract SetConfig(object: any, parentKey?: string): Promise<void>;

    /**
     * Saves the configuration the underlying source (e.g. a file).
     * 
     * @async
     */
    public abstract SaveConfig(): Promise<void>;

    /**
     * Loads the configuration from the underlying source (e.g. file).
     * 
     * @async
     */
    public abstract LoadConfig(): Promise<void>;
}