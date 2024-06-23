import { ConflictError, NotFoundError } from "../@shared/errors";


export class EmailAlreadyUsedError extends ConflictError {
    constructor(public readonly message: string = "Email already used") {
        super(message);
    }
}

export class AccountNotFoundError extends NotFoundError {
    constructor(public readonly message: string = "Account not found") {
        super(message);
    }
}