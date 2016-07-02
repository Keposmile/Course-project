var settings = require('../settings'),
  Db = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server;
module.exports = new Db(settings.db,new Server(settings.host,settings.port),{safe:true});

// var models = require('./models');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// for(var m in models){
//   mongoose.model(m,new Schema(models[m]));
// }
//
// module.exports = {
//   getModel:function(type){
//     return _getModel(type);
//   }
// };
//
// var _getModel = function(type){
//   return mongoose.model(type);
// };
