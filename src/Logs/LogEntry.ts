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
     */
    public constructor(public message: string, public level: string, public date: Date, public meta?: any) {

    }
}