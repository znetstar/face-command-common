import IAppResources from "./IAppResources";

/**
 * Represents an external class.
 */
export default interface ConstructibleExternalResource<T> {
    new(resources: IAppResources): T
}