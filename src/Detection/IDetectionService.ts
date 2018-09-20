import DetectionOptions from "./DetectionOptions";

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
}