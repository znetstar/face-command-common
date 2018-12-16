import Face from "./Face";
import IAppResources from "../IAppResources";

/**
 * Represents a service that can manage faces stored by the application.
 */
export default abstract class FaceManagementServiceBase {
    /**
     *@param resources - Common resources of the application.
     */
    constructor(protected resources: IAppResources) {}

    /**
     * Adds face which will be extracted from the provided image.
     * @param image - Image to extract the face from.
     * @param name - Friendly name for the face.
     * @param autostart - If the face should be loaded on application start.
     * @async
     */
    public abstract AddFace(image: Uint8Array, name: string, autostart: boolean): Promise<Face>;
    
    /**
     * Adds a face from the capture source.
     * @param name - Friendly name for the face.
     * @param autostart - If the face should be loaded on application start.
     * @async
     */
    public abstract AddFaceFromCamera(name: string, autostart: boolean): Promise<Face>;

    /**
     * Retrieves a face by the its identifier.
     * @param id - The identifier of the face.
     * @async
     */
    public abstract GetFace(id: number): Promise<Face>;

    /**
     * Retrieves all faces.
     * @async
     */
    public abstract GetFaces(): Promise<Face[]>; 

    /**
     * Removes a face by the its identifier.
     * @param id - The identifier of the face.
     * @async
     */ 
    public abstract RemoveFace(id: number): Promise<any>;

    /**
     * Updates a face. 
     * @param face - Face with properties to be updated.
     * @param scanForFace - Indicates whether the application should extract a face from the updated image. 
     * @param imageFromCamera - Indicates whether the application should update the face object with a face from the capture source.
     * @async
     */
    public abstract UpdateFace(face: Face, scanForFace: boolean, imageFromCamera: boolean): Promise<any>;
}