'use strict';

module.exports = function(app) {
  const sbSql = app.dataSources.sbSql;

  sbSql.automigrate();
};
