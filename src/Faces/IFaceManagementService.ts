import Face from "./Face";

/**
 * Represents a service that can manage faces stored by the application.
 */
export default interface IFaceManagementService {
    /**
     * Adds face which will be extracted from the provided image.
     * @param image - Image to extract the face from.
     * @param name - Friendly name for the face.
     * @param autostart - If the face should be loaded on application start.
     * @async
     */
    AddFace(image: ArrayBuffer, name: string, autostart: boolean): Promise<Face>;
    
    /**
     * Adds a face from the capture source.
     * @param name - Friendly name for the face.
     * @param autostart - If the face should be loaded on application start.
     * @async
     */
    AddFaceFromCamera(name: string, autostart: boolean): Promise<Face>;

    /**
     * Retrieves a face by the its identifier.
     * @param id - The identifier of the face.
     * @async
     */
    GetFace(id: number): Promise<Face>;

    /**
     * Retrieves all faces.
     * @async
     */
    GetFaces(): Promise<Face[]>; 

    /**
     * Removes a face by the its identifier.
     * @param id - The identifier of the face.
     * @async
     */ 
    RemoveFace(id: number): Promise<any>;

    /**
     * Updates a face. 
     * @param face - Face with properties to be updated.
     * @param scanForFace - Indicates whether the application should extract a face from the updated image. 
     * @param imageFromCamera - Indicates whether the application should update the face object with a face from the capture source.
     * @async
     */
    UpdateFace(face: Face, scanForFace: boolean, imageFromCamera: boolean): Promise<any>;
}