const userRole = require('../../dist/model/role.model.js');
const { RolesEnum } = require('../../dist/common/enums/roles.enum');
const getDBConnectionString = require('../../dist/migrations-utils/db').default;

module.exports.up = async function (next) {
  await getDBConnectionString();
  await userRole.create({
    // issue
    name: RolesEnum.ADMIN,
  });
  next();
};

module.exports.down = function (next) {
  next();
};
