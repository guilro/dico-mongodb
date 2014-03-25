'use strict';

var dico = require('dico')('test');
var assert = require('assert');
var Db = require('mongodb').Db;

describe('dico-mongodb', function() {
  it('should load the configs and access the databases', function(done) {
    dico.load({
      'database': {
        'module': '../lib/index.js',
        'url': 'mongodb://localhost:27017/test',
        'options': {
          'db': {
            'native_parser': false
          },
          'server': {
            'socketOptions': {
              'connectTimeoutMS': 500
            }
          },
          'replSet': {},
          'mongos': {}
        }
      },
      'database2': {
        'module': '../lib/index.js',
        'url': 'mongodb://localhost:27017/test2'
      },
    }, __dirname);

    dico.get('@database', function(err, database) {
      if (err) return done(err);

      assert.ok(database instanceof Db);
      assert.ok(database.collection('test'));

      dico.get('@database2', function(err, database) {
        if (err) return done(err);

        assert.ok(database instanceof Db);
        assert.ok(database.collection('test'));

        return done();
      });
    });
  });
});
