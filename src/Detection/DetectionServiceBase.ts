import { EventEmitter2 } from "eventemitter2";
import DetectionOptions from "./DetectionOptions";
import Status from "./Status";
import IAppResources from "../IAppResources";

/**
 * Represents a service that will monitor the capture source for faces or lack thereof.
 */
export default abstract class DetectionServiceBase extends EventEmitter2 {
    /**
     * @param resources - Common resources of the application.
     */
    constructor(protected resources: IAppResources) {
        super();
    }
    
    /**
     * Stops capturing from the capture source
     */
    public abstract  StopDetection(): Promise<void>|void;

    /**
     * Begins capturing from the capture source.
     * @param options - Options for detection.
     */
    public abstract StartDetection(options: DetectionOptions): Promise<void>|void;

    /**
     * Indicates if detection is currently running.
     */
    public abstract IsDetectionRunning(): Promise<boolean>|boolean;

    /**
     * Searches for entries between a start and end date.
     * 
     * @param start - The start date for the query.
     * @param end - The end date for the query.
     * @async
     */
    public abstract StatusHistory(start?: Date, end?: Date): Promise<Status[]>;
}