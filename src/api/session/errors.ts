import { UnauthorizedError } from "../@shared/errors";


export class InvalidCredentialsError extends UnauthorizedError {
    constructor(public readonly message: string = "Invalid credentials") {
        super(message);
    }
}