// var settings = require('../settings'),
//   Db = require('mongodb').Db,
//   Connection = require('mongodb').Connection,
//   Server = require('mongodb').Server;
// module.exports = new Db(settings.db,new Server(settings.host,settings.port),{safe:true});
//
var dbModels = require('./dbModels');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var debug = require('debug')('CarSale:db');
module.exports = {
  openDb:function(){
    mongoose.connect('mongodb://localhost:27017/CarSale');
    mongoose.connection.on('open',function(){
      debug('数据库链接成功');
    });
    mongoose.connection.on('error',function(err){
      debug('数据库链接失败:%s',err);
    });
  },
  createDoc: function(model, doc, callback) {
    model.create(doc, function(err, doc) {
      callback(err, doc);
    });
  },
  findDoc: function(model,infoObj,callback) {
    model.find(infoObj,function(err,docs) {
      callback(err, docs);
    });
  },
  updateDoc:function(model,id,infoObj,callback){
    model.update(id,{$set:infoObj},function(err,docs){
      callback(err,docs);
    });
  },
  deleteById:function(model,infoObj,callback){
    model.remove(infoObj,function(err,docs){
      callback(err,docs);
    });
  },

  createCarInfo:function(doc,callback){
    var Car = dbModels.getModel('Cars');
    this.createDoc(Car,doc,function(err,doc){
      if(err){
        console.log("插入数据失败"+doc);
        callback("插入数据失败");
      }else{
        console.log("插入数据成功"+doc);
        callback(null);
      }
    });
  },
  getCarListByPage:function(page,callback){
    var Car = dbModels.getModel('Cars');
    this.findDoc(Car,{},function(err,cars){
      if(err){
        callback('获取列表失败'+err);
      }else{
        console.log(cars);
        callback(null,cars);
      }
    });
  },
  getCarById:function(infoObj,callback){
    var Car = dbModels.getModel('Cars');
    this.findDoc(Car,infoObj,function(err,cars){
      if(err){
        callback('获取信息失败'+err);
      }else{
        console.log(cars);
        if(cars.length!==0){
          callback(null,cars);
        }
        else {
          callback(null,null);
        }

      }
    });
  },
  updateCarById:function(id,doc,callback){
    var Car = dbModels.getModel('Cars');
    this.updateDoc(Car,id,doc,function(err,cars){
      if(err){
        callback('更新信息失败'+err);
      }else{
        console.log("更新信息成功"+cars);
        callback(null,cars);
      }
    });
  },
  deleteCarById:function(infoObj,callback){
    var Car = dbModels.getModel('Cars');
    this.deleteById(Car,infoObj,function(err,doc){
      if(err){
        callback("删除出错"+err);
      }else{
        callback(null,doc);
      }
    });
  },
  createCustomerInfo:function(doc,callback){
    var Customer = dbModels.getModel('Customers');
    this.createDoc(Customer,doc,function(err,doc){
      if(err){
        console.log("插入数据失败"+doc);
        callback("插入数据失败");
      }else{
        console.log("插入数据成功"+doc);
        callback(null);
      }
    });
  },
  getCustomerListByPage:function(page,callback){
    var Customer = dbModels.getModel('Customers');
    this.findDoc(Customer,{},function(err,customers){
      if(err){
        callback('获取列表失败'+err);
      }else{
        console.log(customers);
        callback(null,customers);
      }
    });
  },
  getCustomerById:function(infoObj,callback){
    var Customer = dbModels.getModel('Customers');
    this.findDoc(Customer,infoObj,function(err,customers){
      if(err){
        callback('获取信息失败'+err);
      }else{
        console.log(customers);
        if(customers.length!==0){
          callback(null,customers);
        }else {
          callback(null,null);
        }
      }
    });
  },
  updateCustomerById:function(id,doc,callback){
    var Customer = dbModels.getModel('Customers');
    this.updateDoc(Customer,id,doc,function(err,customers){
      if(err){
        callback('更新信息失败'+err);
      }else{
        console.log("更新信息成功"+customers);
        callback(null,customers);
      }
    });
  },
  deleteCustomerById:function(infoObj,callback){
    var Customer = dbModels.getModel('Customers');
    this.deleteById(Customer,infoObj,function(err,doc){
      if(err){
        callback("删除出错"+err);
      }else{
        callback(null,doc);
      }
    });
  },
  createSaleInfo:function(doc,callback){
    var Sale = dbModels.getModel('Sales');
    console.log("add1");
    console.log(doc);
    var that = this;
    var customerName=this.getCustomerById({"_id":new ObjectID(doc.customerId)},function(err,customer){
      doc[customerName]=customer.name;
      console.log("add2"+doc);
      that.createDoc(Sale,doc,function(err,doc){
        if(err){
          console.log("插入数据失败"+doc);
          callback("插入数据失败");
        }else{
          console.log("插入数据成功"+doc);
          callback(null);
        }
      });
    });
  },
  getSaleListByPage:function(page,callback){
    var Sale = dbModels.getModel('Sales');
    this.findDoc(Sale,{},function(err,sales){
      if(err){
        callback('获取列表失败'+err);
      }else{
        console.log(sales);
        callback(null,sales);
      }
    });
  },
  getSaleById:function(infoObj,callback){
    var Sale = dbModels.getModel('Sales');
    this.findDoc(Sale,infoObj,function(err,sales){
      if(err){
        callback('获取信息失败'+err);
      }else{
        console.log(sales);
        if(sales.length!==0){
          callback(null,sales);
        }else {
          callback(null,null);
        }

      }
    });
  },
  updateSaleById:function(id,doc,callback){
    var Sale = dbModels.getModel('Sales');
    this.updateDoc(Sale,id,doc,function(err,sales){
      if(err){
        callback('更新信息失败'+err);
      }else{
        console.log("更新信息成功"+sales);
        callback(null,sales);
      }
    });
  },
  deleteSaleById:function(infoObj,callback){
    var Sale = dbModels.getModel('Sales');
    this.deleteById(Sale,infoObj,function(err,doc){
      if(err){
        callback("删除出错"+err);
      }else{
        callback(null,doc);
      }
    });
  },

};
