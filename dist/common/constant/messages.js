"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MESSAGES = exports.SUCCESS_MESSAGES = void 0;
const SUCCESS_MESSAGES = {
    USER_CREATED: {
        message: 'User registered successfully!',
        code: 201,
    },
    USER_LOGIN: {
        message: 'User logged in successfully!',
        code: 200,
    },
    PASSWORD_CHANGED: {
        message: 'User changed password successfully!',
        code: 200,
    },
    JOB_ROLE_CREATED: {
        message: 'Job role created successfully!',
        code: 201,
    },
    JOB_ROLE_LIST: {
        message: 'Job role list retrieve successfully!',
        code: 200,
    },
    JOB_ROLE_LIST_ONE: {
        message: 'Job role retrieve successfully!',
        code: 200,
    },
    JOB_ROLE_UPDATED: {
        message: 'Job role updated successfully!',
        code: 200,
    },
    JOB_ROLE_DELETED: {
        message: 'Job role deleted successfully!',
        code: 200,
    },
};
exports.SUCCESS_MESSAGES = SUCCESS_MESSAGES;
const ERROR_MESSAGES = {
    EMAIL_ALREADY_EXISTS: {
        code: 400,
        message: 'Email is already exists',
    },
    INVALID_CREDENTIALS: {
        code: 400,
        message: 'Invalid Credentials',
    },
    EMAIL_NOT_EXISTS: {
        code: 400,
        message: 'Email is not exists',
    },
};
exports.ERROR_MESSAGES = ERROR_MESSAGES;
//# sourceMappingURL=messages.js.map