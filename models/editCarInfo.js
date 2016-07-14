// var mongo = require('./db');
// var ObjectID = require('mongodb').ObjectID;
// function editCarInfo(car){
//   this.Manufacturer = car.Manufacturer;
//   this.carType = car.carType;
//   this.productionTime = car.productionTime;
//   this.buyTIme = car.buyTIme;
//   this.saleTime = car.saleTime;
//   this.price = car.price;
//   this.discount = car.discount;
// }
//
// module.exports = editCarInfo;
//
// editCarInfo.prototype.save  = function(callback){
//   var car = {
//     Manufacturer : this.Manufacturer,
//     carType : this.carType,
//     productionTime : this.productionTime,
//     buyTIme : this.buyTIme,
//     saleTime : this.saleTime,
//     price : this.price,
//     discount : this.discount
//   };
//
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Car',function(err,collection){
//       if (error) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.insert(car,{safe : true},function(err,car){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         callback(null,car);
//       });
//     });
//   });
// };
//
// editCarInfo.getCarById = function(id,callback){
//   mongo.open(function(err,db){
//     if(err){
//       console.log(err);
//       return callback(err);
//     }
//     db.collection('Car',function(err,collection){
//       if (err) {
//         mongo.close();
//         console.log(err);
//         return callback(err);
//       }
//       collection.findOne({"_id": new ObjectID(id)},function(err,car){
//         mongo.close();
//         if(err){
//           console.log(err);
//           return callback(err);
//         }
//         console.log("1"+car);
//         callback(null,car);
//       });
//     });
//   });
// };
//
// editCarInfo.getCarListByPage = function(page,callback){
//   mongo.open(function(err,db){
//     if(err){
//       // console.log("1"+err);
//       return callback(err);
//     }
//     db.collection('Car',function(err,collection){
//       if (err) {
//         mongo.close();
//         // console.log("2"+err);
//         return callback(err);
//       }
//       collection.find().sort({key:1}).toArray(function(err,car){
//         mongo.close();
//         if(err){
//           // console.log("3"+err);
//           return callback(err);
//         }
//         console.log(car);
//         callback(null,car);
//       });
//     });
//   });
// };
