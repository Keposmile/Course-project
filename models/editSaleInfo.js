// var mongo = require('./db');
//
// function editSaleInfo(Sale){
//   this.customerId = Sale.customerId;
//   this.carId = Sale.carId;
//   this.price = Sale.price;
//   this.discount = Sale.discount;
//   this.payMethod = Sale.payMethod;
// }
//
// module.exports = editSaleInfo;
//
// editSaleInfo.prototype.save  = function(callback){
//   var Sale = {
//     customerId : this.customerId,
//     carId : this.carId,
//     price : this.price,
//     discount : this.discount,
//     payMethod : this.payMethod
//   };
//
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Sale',function(err,collection){
//       if (err) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.insert(Sale,{safe : true},function(err,Sale){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         callback(null,Sale);
//       });
//     });
//   });
// };
//
// editSaleInfo.getSaleById = function(id,callback){
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Sale',function(err,collection){
//       if (error) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.findOne({_id: id},function(err,Sale){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         callback(null,Sale);
//       });
//     });
//   });
// };
//
// editSaleInfo.getSaleListByPage = function(page,callback){
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Sale',function(err,collection){
//       if (err) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.find().sort({key:1}).toArray(function(err,Sale){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         console.log(Sale);
//         callback(null,Sale);
//       });
//     });
//   });
// };
