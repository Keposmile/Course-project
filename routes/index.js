
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };
module.exports = function (app) {
  app.get("/",function(req,res){
    console.log("Loading...");
    res.render("Home");
  });
  app.get("/list",function(req,res){
    var listType = req.query.listType;
    if (listType == "car") {
      res.render("list",{
        title:'车辆管理',
        listType:listType
    });
    }else if (listType == "customer") {
      res.render("list",{
        title:'客户管理',
        listType:listType
      });
    }else if (listType == "sale") {
      res.render("list",{
        title:'营销管理',
        listType:listType
      });
    }
  });
  app.get("/addInfo",function(req,res){
    var addType = req.query.listType;
    if (addType == "car") {
      res.render("addInfo",{
        title:'车辆管理',
        listType:listType
    });
    }else if (addType == "customer") {
      res.render("addInfo",{
        title:'客户管理',
        listType:listType
      });
    }else if (addType == "sale") {
      res.render("addInfo",{
        title:'营销管理',
        listType:listType
      });
    }
  });
};
