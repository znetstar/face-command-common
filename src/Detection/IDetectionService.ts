import DetectionOptions from "./DetectionOptions";
import Status, { StatusType } from "./Status";
import Face from "../Faces/Face";

/**
 * Represents a service that will monitor the capture source for faces or lack thereof.
 */
export default interface IDetectionService {
    /**
     * The function that will be run to capture the image from the capture source and processs it for faces.
     * The "frequency" property of the "options" paramater controls how frequent this function should be called.
     * @param options - Options that will be used during detection.
     */
    DetectChanges(options: DetectionOptions): void;

    /**
     * The options that will be passed to "DetectChanges". 
     */
    DetectionOptions: DetectionOptions;

    /**
     * Stops capturing from the capture source
     */
    StopDetection(): void;

    /**
     * Begins capturing from the capture source.
     */
    StartDetection(): void;

    /**
     * Indicates if detection is currently running.
     */
    IsDetectionRunning: boolean;

    /**
     * Creates a status object indicating a change in state.
     * @async
     */
    AddStatus(statusType: StatusType, time: Date, recognizedFaces: Face[]): Promise<Status>;

    /**
     * Retrieves a status object.
     * 
     * @param id - The id of the status to retrieve;
     * @async
     */
    GetStatus(id: number): Promise<Status>;

    /**
     * Searches for entries between a start and end date.
     * 
     * @param start - The start date for the query.
     * @param end - The end date for the query.
     * @async
     */
    StatusHistory(start?: Date, end?: Date): Promise<Status[]>;
}