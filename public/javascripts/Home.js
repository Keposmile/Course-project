// $(function(){
//   var tabsLink = $(".tabs>a");
//   tabsLink.click(function(){
//     var index = tabsLink.index(this);
//     switch(index){
//       case 0:
//         var listType = "car";
//         break;
//       case 1:
//         var listType = "customer";
//         break;
//       case 2:
//         var listType = "sale";
//         break;
//       default:
//         var listType = "car";
//     }
//     var data = {
//       listType:listType
//     };
//     $.ajax({
//       url:"/list",
//       type:"get",
//       data:data,
//       // dataType:"document",
//       success:function(res){
//         alert("success!");
//
//       }
//     });
//     return false;
//   });
// });
