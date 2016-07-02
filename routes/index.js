
/*
 * GET home page.
 */

editCarInfo = require('../models/editCarInfo.js');
editCustomerInfo = require('../models/editCustomerInfo.js');
editSaleInfo = require('../models/editSaleInfo.js');

module.exports = function (app) {
  app.get("/",function(req,res){
    console.log("Loading...");
    res.render("Home");
  });
  app.get("/list",function(req,res){//获取页面列表路由
    var listType = req.query.listType;
    var listPage = req.query.page;
    if (listType == "car") {
      editCarInfo.getCarListByPage(1,function(err,car){
        res.render("list",{
          isAdd:false,
          title:'车辆管理',
          posts:car,
          listType:listType
        });
      });
    }else if (listType == "customer") {
      editCustomerInfo.getCustomerListByPage(1,function(err,customer){
        res.render("list",{
          isAdd:false,
          title:'客户管理',
          posts:customer,
          listType:listType
        });
      });
    }else if (listType == "sale") {
      editSaleInfo.getSaleListByPage(1,function(err,sale){
        res.render("list",{
          isAdd:false,
          title:'营销管理',
          posts:sale,
          listType:listType
        });
      });
    }
  });
  app.get("/add",function(req,res){//获取页面列表路由
    var listType = req.query.listType;
    var listPage = req.query.page;
    if (listType == "car") {
      editCarInfo.getCarListByPage(1,function(err,car){
        res.render("add",{
          isAdd:true,
          title:'车辆信息添加',
          posts:car,
          listType:listType
        });
      });
    }else if (listType == "customer") {
      editCustomerInfo.getCustomerListByPage(1,function(err,car){
        res.render("add",{
          isAdd:true,
          title:'客户信息添加',
          listType:listType
        });
      });
    }else if (listType == "sale") {
      editSaleInfo.getSaleListByPage(1,function(err,car){
        res.render("add",{
          isAdd:true,
          title:'营销信息添加',
          listType:listType
        });
      });
    }
  });
  app.get("/edit",function(req,res){
    var InfoType= req.query.InfoType;
    var id=req.query.id;
    if(InfoType== "car"){
      editCarInfo.getCarById(id,function(err,car){
        res.render("edit",{
          isAdd:true,
          title:"车辆信息修改",
          posts:car,
          InfoType:InfoType
        });
      });
    }else if(InfoType== "customer"){
      res.render("edit",{
        isAdd:true,
        title:"客户信息修改",
        InfoType:InfoType
      });
    }else if(InfoType== "sale"){
      res.render("edit",{
        isAdd:true,
        title:"营销信息修改",
        InfoType:InfoType
      });
    }
  });
  // app.get("/list",function(req,res){
  //   var listType = req.query.listType;
  //   if (listType == "car") {
  //     editCarInfo.getCarListByPage(1,function(err,car){
  //       res.render("list",{
  //         title:'车辆管理',
  //         posts:car,
  //         listType:listType
  //       });
  //     });
  //   }else if (listType == "customer") {
  //     res.render("list",{
  //       title:'客户管理',
  //       listType:listType
  //     });
  //   }else if (listType == "sale") {
  //     res.render("list",{
  //       title:'营销管理',
  //       listType:listType
  //     });
  //   }
  // });
};
