import IAppResources from "./IAppResources";

export default interface ConstructibleExternalResource<T> {
    new(resources: IAppResources): T
}