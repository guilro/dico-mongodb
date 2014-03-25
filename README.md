# Dico-mongodb

This is a wrapper between the mongodb native driver and the dependency injection
container [dico](https://github.com/guilro/dico).

You can Configure and use the mongodb native driver easily, and access it through
the dico container.

## Installation

```bash
$ npm install dico-mongodb
```

## Usage

```js
dico.load({
  'database': {
    'module': 'dico-mongodb',
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
    'module': 'dico-mongodb',
    'url': 'mongodb://localhost:27017/test2'
  },
}, __dirname);

dico.get('@database', function(err, database) {
  if (err) return done(err);

  var collection = database.collection('test');
  collection.doStuff();
});
```

The `url` parameter accept any [valid connection URL](http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#the-url-connection-format).
The `options` parameter is optional and accept any options [MongoClient#connect](http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options) accepts.
