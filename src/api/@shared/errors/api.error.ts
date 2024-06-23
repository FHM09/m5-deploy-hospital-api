export class ApiError extends Error {
    constructor(public message: string, public statusCode: number = 500) {
        super();
    }
}

export class ConflictError extends ApiError {
    constructor(
        public message: string,
        public readonly statusCode: number = 409
    ) {
        super(message);
    }
}

export class NotFoundError extends ApiError {
    constructor(
        public message: string,
        public readonly statusCode: number = 404
    ) {
        super(message);
    }
}

export class UnauthorizedError extends ApiError {
    constructor(
        public message: string,
        public readonly statusCode: number = 401
    ) {
        super(message);
    }
}