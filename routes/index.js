
/*
 * GET home page.
 */
//
// editCarInfo = require('../models/editCarInfo.js');
// editCustomerInfo = require('../models/editCustomerInfo.js');
// editSaleInfo = require('../models/editSaleInfo.js');
var db = require('../models/db.js');
var ObjectID = require('mongodb').ObjectID;
module.exports = function (app) {
  app.get("/",function(req,res){
    console.log("Loading...");
    res.render("Home");
  });
  app.get("/list",function(req,res){//获取页面列表路由
    var listType = req.query.listType;
    var listPage = req.query.page;
    if (listType == "car") {
      db.getCarListByPage(1,function(err,car){
        res.render("list",{
          isAdd:false,
          title:'车辆管理',
          posts:car,
          listType:listType
        });
      });
    }else if (listType == "customer") {
      db.getCustomerListByPage(1,function(err,customer){
        res.render("list",{
          isAdd:false,
          title:'客户管理',
          posts:customer,
          listType:listType
        });
      });
    }else if (listType == "sale") {
      db.getSaleListByPage(1,function(err,sale){
        res.render("list",{
          isAdd:false,
          title:'营销管理',
          posts:sale,
          listType:listType
        });
      });
    }
  });
  app.get("/add",function(req,res){//添加页面加载
    var listType = req.query.listType;
    var listPage = req.query.page;
    if (listType == "car") {
      res.render("add",{
        isAdd:true,
        title:'车辆信息添加',
        posts:null,
        listType:listType
      });
    }else if (listType == "customer") {
      res.render("add",{
        isAdd:true,
        title:'客户信息添加',
        posts:null,
        listType:listType
      });
    }else if (listType == "sale") {
      res.render("add",{
        isAdd:true,
        title:'营销信息添加',
        posts:null,
        listType:listType
      });
    }
  });
  app.post("/add",function(req,res){//添加数据
    var listType = req.query.listType;
    var listPage = req.query.page;
    if (listType == "car") {
      db.createCarInfo(req.body,function(err){
        if(err){
          console.log("添加数据失败");
          res.send({
            success:1
          });
        }else{
          console.log("添加数据成功");
          res.send({
            success:0
          });
        }
      });
    }else if (listType == "customer") {
      db.createCustomerInfo(req.body,function(err){
        if(err){
          console.log("添加数据失败");
          res.send({
            success:1
          });
        }else{
          console.log("添加数据成功");
          res.send({
            success:0
          });
        }
      });
    }else if (listType == "sale") {
      db.createSaleInfo(req.body,function(err){
        if(err){
          console.log("添加数据失败");
          res.send({
            success:1
          });
        }else{
          console.log("添加数据成功");
          res.send({
            success:0
          });
        }
      });
    }
  });
  app.get("/edit",function(req,res){//修改数据页面数据加载
    var InfoType= req.query.InfoType;
    var id=req.query.id;
    if(InfoType == "car"){
      db.getCarById({"_id":new ObjectID(id)},function(err,car){
        res.render("edit",{
          isAdd:true,
          title:"车辆信息修改",
          posts:car[0],
          InfoType:InfoType
        });
      });
    }else if(InfoType == "customer"){
      db.getCustomerById({"_id":new ObjectID(id)},function(err,customer){
        res.render("edit",{
          isAdd:true,
          title:"客户信息修改",
          posts:customer[0],
          InfoType:InfoType
        });
      });
    }else if(InfoType == "sale"){
      db.getSaleById({"_id":new ObjectID(id)},function(err,sale){
        res.render("edit",{
          isAdd:true,
          title:"营销信息修改",
          posts:sale[0],
          InfoType:InfoType
        });
      });
    }
  });

  app.post("/update",function(req,res){
    var InfoType = req.query.InfoType;
    var id=req.query.id;
    console.log(req.body);
    if(InfoType == "car"){
      db.updateCarById({"_id":new ObjectID(id)},req.body,function(err,car){
        if(err){
          res.send({success:1});
        }else{
          console.log("更新成功");
          res.send({success:0});
        }
      });
    }else if (InfoType == "customer") {
      db.updateCustomerById({"_id":new ObjectID(id)},req.body,function(err,customer){
        if(err){
          res.send({success:1});
        }else{
          console.log("更新成功");
          res.send({success:0});
        }
      });
    }else if (InfoType == "sale") {
      db.updateSaleById({"_id":new ObjectID(id)},req.body,function(err,sale){
        if(err){
          res.send({success:1});
        }else{
          console.log("更新成功");
          res.send({success:0});
        }
      });
    }
  });

  app.get("/delete",function(req,res){
    var InfoType= req.query.InfoType;
    var id=req.query.id;
    if(InfoType == "car"){
      db.deleteCarById({"_id":new ObjectID(id)},function(err,car){
        if(err){

          res.send({success:1});
        }else{
          console.log("删除成功");
          res.send({success:0});
        }
      });
    }else if(InfoType == "customer"){
      db.deleteCustomerById({"_id":new ObjectID(id)},function(err,car){
        if(err){
          res.send({success:1});
        }else{
          console.log("删除成功");
          res.send({success:0});
        }
      });
    }else if(InfoType == "sale"){
      db.deleteSaleById({"_id":new ObjectID(id)},function(err,car){
        if(err){
          res.send({success:1});
        }else{
          console.log("删除成功");
          res.send({success:0});
        }
      });
    }
  });
  app.get("/display",function(req,res){
    var InfoType= req.query.InfoType;
    var id=req.query.id;
    if(InfoType == "car"){
      db.getCarById({"_id":new ObjectID(id)},function(err,car){
        res.render("display",{
          isAdd:true,
          title:"车辆信息",
          posts:car[0],
          InfoType:InfoType
        });
      });
    }else if(InfoType == "customer"){
      console.log(id);
      db.getCustomerById({"_id":new ObjectID(id)},function(err,customer){
        res.render("display",{
          isAdd:true,
          title:"客户信息",
          posts:customer[0],
          InfoType:InfoType
        });
      });
    }else if(InfoType == "sale"){
      console.log(id);
      db.getSaleById({"_id":new ObjectID(id)},function(err,sale){
        res.render("display",{
          isAdd:true,
          title:"营销信息",
          posts:sale[0],
          InfoType:InfoType
        });
      });
    }
  });
};
