declare const SUCCESS_MESSAGES: {
    USER_CREATED: {
        message: string;
        code: number;
    };
    USER_LOGIN: {
        message: string;
        code: number;
    };
    PASSWORD_CHANGED: {
        message: string;
        code: number;
    };
    JOB_ROLE_CREATED: {
        message: string;
        code: number;
    };
    JOB_ROLE_LIST: {
        message: string;
        code: number;
    };
    JOB_ROLE_LIST_ONE: {
        message: string;
        code: number;
    };
    JOB_ROLE_UPDATED: {
        message: string;
        code: number;
    };
    JOB_ROLE_DELETED: {
        message: string;
        code: number;
    };
};
declare const ERROR_MESSAGES: {
    EMAIL_ALREADY_EXISTS: {
        code: number;
        message: string;
    };
    INVALID_CREDENTIALS: {
        code: number;
        message: string;
    };
    EMAIL_NOT_EXISTS: {
        code: number;
        message: string;
    };
};
export { SUCCESS_MESSAGES, ERROR_MESSAGES };
