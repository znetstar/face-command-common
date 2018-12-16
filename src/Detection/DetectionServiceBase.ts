import { EventEmitter2 } from "eventemitter2";
import DetectionOptions from "./DetectionOptions";
import Status, { StatusType } from "./Status";
import Face from "../Faces/Face";
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
     * The function that will be run to capture the image from the capture source and processs it for faces.
     * The "frequency" property of the "options" paramater controls how frequent this function should be called.
     * @param options - Options that will be used during detection.
     */
    public abstract DetectChanges(options: DetectionOptions): void;
    
    /**
     * Stops capturing from the capture source
     */
    public abstract  StopDetection(): void;

    /**
     * Begins capturing from the capture source.
     * @param options - Options for detection.
     */
    public abstract StartDetection(options: DetectionOptions): void;

    /**
     * Indicates if detection is currently running.
     */
    public abstract get IsDetectionRunning(): boolean;

    /**
     * Creates a status object indicating a change in state.
     * @async
     */
    public abstract AddStatus(statusType: StatusType, time: Date, recognizedFaces: Face[]): Promise<Status>;

    /**
     * Retrieves a status object.
     * 
     * @param id - The id of the status to retrieve;
     * @async
     */
    public abstract GetStatus(id: number): Promise<Status>;

    /**
     * Searches for entries between a start and end date.
     * 
     * @param start - The start date for the query.
     * @param end - The end date for the query.
     * @async
     */
    public abstract StatusHistory(start?: Date, end?: Date): Promise<Status[]>;
}