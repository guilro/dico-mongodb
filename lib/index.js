'use strict';

var mongoClient = require('mongodb').MongoClient;

/**
 * Init mongodb connection and collections.
 * @return {Promise}
 */
module.exports = function(c, cb) {
  mongoClient.connect(c.get('url'), c.get('options'), function(err, db) {
    if (err) return cb(err);

    return cb(null, db);
  });
};
