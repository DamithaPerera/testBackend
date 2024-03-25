declare class ResponseDto {
    constructor(response: any, data: any);
    message: string;
    code: string;
    success: boolean;
    payload: any;
}
declare class InternalErrorDto extends ResponseDto {
    constructor(response: any, data: any);
}
declare class ErrorDto extends ResponseDto {
    constructor(response: any, data: any);
}
declare class SuccessDto extends ResponseDto {
    constructor(response: any, data: any);
}
declare class SuccessPaginationDto extends ResponseDto {
    constructor(response: any, data: any);
}
export { SuccessDto, InternalErrorDto, ErrorDto, SuccessPaginationDto };
