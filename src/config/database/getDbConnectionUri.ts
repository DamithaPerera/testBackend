import { Logger } from '@nestjs/common';

/**
 * Generate Database Connection URI
 *
 * @param {String} dbName Database Name
 */
const getDBConnectionString = (): string => {
  const connectionUri = `mongodb+srv://scottfinlay:NoxqnZ0d7eFnKmqM@finlaycluster.wredjci.mongodb.net/?retryWrites=true&w=majority`;
  Logger.log('Database connection URI: ', connectionUri);

  return connectionUri;
};

export default getDBConnectionString;
