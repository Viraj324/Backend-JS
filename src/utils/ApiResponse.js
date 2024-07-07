class ApiResponse {
    constructor(
        statusCode,
        data = null,
        message = "Operation successful",
        errors = []
    ) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.errors = errors;
        this.success = statusCode >= 200 && statusCode < 300; // Assuming 2xx status codes are successful
    }

    static success(data, message = "Operation successful") {
        return new ApiResponse(200, data, message);
    }

    static created(data, message = "Resource created successfully") {
        return new ApiResponse(201, data, message);
    }

    static badRequest(errors, message = "Bad request") {
        return new ApiResponse(400, null, message, errors);
    }

    static unauthorized(errors, message = "Unauthorized") {
        return new ApiResponse(401, null, message, errors);
    }

    static forbidden(errors, message = "Forbidden") {
        return new ApiResponse(403, null, message, errors);
    }

    static notFound(errors, message = "Not found") {
        return new ApiResponse(404, null, message, errors);
    }

    static internalError(errors, message = "Internal server error") {
        return new ApiResponse(500, null, message, errors);
    }
}

export default ApiResponse;
