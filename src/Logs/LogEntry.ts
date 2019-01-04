import * as uuid from "uuid";

const newUuid = () => {
    const buf = new Uint8Array(16);
    uuid.v4(null, buf, 0);
    return buf;
}

/**
 * Represents a message written to the logs.
 */
export default class LogEntry {
    
    /**
     * 
     * @param message - Message that was written.
     * @param level - The winston log level of the message.
     * @param date - Date the message was written.
     * @param meta - Metadata associated with the message.
     * @param id - Unique ID assigned to the log entry, defaults to a new UUID.
     */
    public constructor(public message: string, public level: string, public date: Date, public meta?: any, public id: Uint8Array = newUuid()) {
        
    }
}