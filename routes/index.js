
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
};
