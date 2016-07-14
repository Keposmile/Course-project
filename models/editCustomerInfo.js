// var mongo = require('./db');
//
// function editCustomerInfo(customer){
//   this.name = customer.name;
//   this.gender = customer.gender;
//   this.customerSource = customer.customerSource;
//   this.tel = customer.tel;
//   this.email = customer.email;
//   this.address = customer.address;
//   this.credit = customer.credit;
//   this.dealTimes = customer.dealTimes;
//   this.dealSumMoney = customer.dealSumMoney;
//   this.lastDealTime = customer.lastDealTime;
// }
//
// module.exports = editCustomerInfo;
//
// editCustomerInfo.prototype.save = function(callback){
//   var customer = {
//     name:this.name,
//     gender:this.gender,
//     customerSource:this.customerSource,
//     tel:this.tel,
//     email:this.email,
//     address:this.address,
//     credit:this.credit,
//     dealTimes:this.dealTimes,
//     dealSumMoney:this.dealSumMoney,
//     lastDealTime:this.lastDealTime
//   };
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Customer',function(err,collection){
//       if (err) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.insert(customer,{safe : true},function(err,customer){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         callback(null,customer);
//       });
//     });
//   });
// };
//
// editCustomerInfo.getCustomerById = function(id,callback){
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Customer',function(err,collection){
//       if (err) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.findOne({_id:id}).toArray(function(err,customer){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         console.log(customer);
//         callback(null,customer);
//       });
//     });
//   });
// };
//
// editCustomerInfo.getCustomerListByPage = function(page,callback){
//   mongo.open(function(err,db){
//     if(err){
//       return callback(err);
//     }
//     db.collection('Customer',function(err,collection){
//       if (err) {
//         mongo.close();
//         return callback(err);
//       }
//       collection.find().toArray(function(err,customer){
//         mongo.close();
//         if(err){
//           return callback(err);
//         }
//         console.log(customer);
//         callback(null,customer);
//       });
//     });
//   });
// };
