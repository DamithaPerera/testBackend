class ResponseDto {
  constructor(response, data) {
    this.message = response.message;
    this.code = response.code;
    this.payload = data || null;
  }

  message: string;

  code: string;

  success: boolean;

  payload: any;
}

class InternalErrorDto extends ResponseDto {
  constructor(response, data) {
    super(response, data);
    this.success = false;
  }
}

class ErrorDto extends ResponseDto {
  constructor(response, data) {
    super(response, data);
    this.success = false;
  }
}

class SuccessDto extends ResponseDto {
  constructor(response, data) {
    super(response, data);
    this.success = true;
  }
}

class SuccessPaginationDto extends ResponseDto {
  constructor(response, data) {
    super(response, data);
    this.success = true;
  }
}

export { SuccessDto, InternalErrorDto, ErrorDto, SuccessPaginationDto };
