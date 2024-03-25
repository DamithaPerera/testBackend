"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const getDBConnectionString = () => {
    const connectionUri = `mongodb+srv://scottfinlay:NoxqnZ0d7eFnKmqM@finlaycluster.wredjci.mongodb.net/?retryWrites=true&w=majority`;
    common_1.Logger.log('Database connection URI: ', connectionUri);
    return connectionUri;
};
exports.default = getDBConnectionString;
//# sourceMappingURL=getDbConnectionUri.js.map