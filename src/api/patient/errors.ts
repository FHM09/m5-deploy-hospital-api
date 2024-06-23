import { ConflictError } from "../@shared/errors";

export class PatientEmailAlreadyUsedError extends ConflictError {
    constructor(public readonly message: string = "Patient email already used") {
        super(message);
    }
}