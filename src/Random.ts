import { randomBytes } from "crypto";
import { cloneDeep } from "lodash"; 
import { Chance } from "chance";
import Command from "./Commands/Command";
import { default as RunCondition, RunConditionType } from "./Commands/RunCondition";
import Face from "./Faces/Face";
import { default as Status, StatusType} from "./Detection/Status";
import DetectionOptions from "./Detection/DetectionOptions";
import EigenFaceRecognizerOptions from "./Detection/EigenFaceRecognizerOptions";
import LogEntry from "./Logs/LogEntry";

/**
 * Contains methods for generating random objects.
 */
export default class Random {
    private chance: Chance.Chance;

    /**
     * @param chanceSeed - Seed to pass on to chance.
     */
    constructor(chanceSeed?: number) {
        this.chance = Chance(chanceSeed);
    }

    /**
     * Runs cloneDeep on a given object, converting it to a POJO.
     * @param object 
     */
    public rpcObject(object: any): any { 
        return cloneDeep(object);
    }

    /**
     * Generates random bytes
     */
    public bytes(): Uint8Array {
        return new Uint8Array(randomBytes(this.chance.integer({ min: 8, max: 256 })));
    }

    /**
     * Generates a random `StatusType`.
     */
    public statusType(): StatusType {
        return <StatusType>this.chance.integer({ min: 0, max: 4 });
    }

    /**
     * Generates a random `RunConditionType`.
     */
    public runConditionType(): RunConditionType {
        return <RunConditionType>this.chance.integer({ min: 0, max: 6 });
    }

    /**
     * Generates a random `Face`.
     */
    public face(): Face {
        return new Face(this.chance.integer(), this.chance.string(), this.bytes(), this.chance.bool())
    } 

    /**
     * Generates random number of random `Face` objects.
     */
    public faces(): Face[] {
        const faces: Face[] = [];
        for (let i = 0; i < this.chance.integer({ min: 5, max: 50 }); i++) {
            faces.push(this.face());
        }
        return faces;
    }

    /**
     * Generates a random `RunCondition` of a random type with random `Face` objects.
     */
    public runCondition(): RunCondition {
        return new RunCondition(this.runConditionType(), this.faces(), this.chance.integer(), this.chance.integer());
    }

    /**
     * Generates a random number of randomly generated `RunCondition`.
     */
    public runConditions(): RunCondition[] {
        const conditions: RunCondition[] = [];
        for (let i = 0; i < this.chance.integer({ min: 1, max: 6 }); i++) {
            conditions.push(this.runCondition());
        }
        return conditions;
    }

    /**
     * Generates a random `Command` object with randomly generated `RunCondition` object.
     */
    public command(): Command {
        return new Command(this.chance.integer(), this.chance.name(), this.chance.string(), this.runConditions(), this.bytes());
    }

    /**
     * Generates random number of randomly generated `Command` objects.
     */
    public commands(): Command[] {
        const commands: Command[] = [];
        for (let i = 0; i < this.chance.integer({ min: 1, max: 20 }); i++) {
            commands.push(this.command());
        }
        return commands;  
    }

    /**
     * Generates a random `Status` object with a random `StatusType`.
     */
    public status(): Status {
        return new Status(this.chance.integer(), this.statusType(), this.chance.date(), this.faces());
    }

    /**
     * Generates a random number of randomly generated `Status` objects.
     */
    public statuses(): Status[] {
        const statuses: Status[] = [];
        for (let i = 0; i < this.chance.integer({ min: 5, max: 50 }); i++) {
            statuses.push(this.status())
        }
        return statuses;
    }

    /**
     * Generates a random `LogEntry`.
     */
    public logEntry(): LogEntry {
        return new LogEntry(this.chance.string(), this.chance.string(), this.chance.date(), this.bytes());
    }

    /**
     * Generates a random number of randomly generated `LogEntry` objects.
     */
    public logEntries(): LogEntry[] {
        const entries: LogEntry[] = [];
        for (let i = 0; i < this.chance.integer({ min: 5, max: 50 }); i++) {
            entries.push(this.logEntry())
        }
        return entries;
    }

    /**
     * Generates a random `EigenFaceRecognizerOptions` object.
     */
    public eigenFaceRecognizerOptions(): EigenFaceRecognizerOptions {
        return new EigenFaceRecognizerOptions(this.chance.integer(), this.chance.floating());
    }

    /**
     * Generates a random `DetectionOptions` object.
     */
    public detectionOptions(): DetectionOptions {
        return new DetectionOptions(this.chance.floating(), this.eigenFaceRecognizerOptions(), this.faces());
    }
}