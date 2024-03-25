"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessPaginationDto = exports.ErrorDto = exports.InternalErrorDto = exports.SuccessDto = void 0;
class ResponseDto {
    constructor(response, data) {
        this.message = response.message;
        this.code = response.code;
        this.payload = data || null;
    }
}
class InternalErrorDto extends ResponseDto {
    constructor(response, data) {
        super(response, data);
        this.success = false;
    }
}
exports.InternalErrorDto = InternalErrorDto;
class ErrorDto extends ResponseDto {
    constructor(response, data) {
        super(response, data);
        this.success = false;
    }
}
exports.ErrorDto = ErrorDto;
class SuccessDto extends ResponseDto {
    constructor(response, data) {
        super(response, data);
        this.success = true;
    }
}
exports.SuccessDto = SuccessDto;
class SuccessPaginationDto extends ResponseDto {
    constructor(response, data) {
        super(response, data);
        this.success = true;
    }
}
exports.SuccessPaginationDto = SuccessPaginationDto;
//# sourceMappingURL=response-dto.js.map