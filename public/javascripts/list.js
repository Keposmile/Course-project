function parseQueryString(str){//url字段解析
  var reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  var result = {};
  var match = str.match(reg);
  var key;
  var value;
  while((match = reg.exec(str)) !== null){
    key = match[2];
    value = match[3] || '';
    result[key] = decodeURIComponent(value);
  }
  return result;
}
$(function(){
  var url = window.location.search;
  var editInfoBtn = $(".editInfoBtn");
  var deleteInfoBtn = $(".deleteInfoBtn");
  var displayBtn = $(".display");
  var searchBtn = $("#searchBtn");
  var listPage = 1;
  var data = {
    listType:parseQueryString(url).listType,
    listPage:listPage
  };
  $("#addInfo").click(function(){
    location.href = "/add?listType="+data.listType+"&listPage="+data.listPage;
  });

  editInfoBtn.click(function(){
    var index=editInfoBtn.index($(this));
    if(data.listType=="car"){
      location.href = "/edit?InfoType="+data.listType+"&id="+$(".carId").eq(index).html();
    }else if(data.listType == "customer"){
      location.href = "/edit?InfoType="+data.listType+"&id="+$(".customerId").eq(index).html();
    }else if (data.listType == "sale") {
      location.href = "/edit?InfoType="+data.listType+"&id="+$(".saleId").eq(index).html();
    }
    return false;
  });

  deleteInfoBtn.click(function(){
    var index=deleteInfoBtn.index($(this));
    if(data.listType=="car"){
      $.ajax({
        url:"/delete?InfoType="+data.listType+"&id="+$(".carId").eq(index).html(),
        method:"get",
        success:function(res){
          if(res.success === 0){
            location.href="/list?listType="+data.listType+"&listPage=1";
          }
        }
      });
    }else if(data.listType == "customer"){
      $.ajax({
        url:"/delete?InfoType="+data.listType+"&id="+$(".customerId").eq(index).html(),
        method:"get",
        success:function(res){
          if(res.success === 0){
            location.href="/list?listType="+data.listType+"&listPage=1";
          }
        }
      });
    }else if (data.listType == "sale") {
      $.ajax({
        url:"/delete?InfoType="+data.listType+"&id="+$(".saleId").eq(index).html(),
        method:"get",
        success:function(res){
          if(res.success === 0){
            location.href="/list?listType="+data.listType+"&listPage=1";
          }
        }
      });
    }
  });
  displayBtn.click(function(){
    var id = $(this).html();
    if(data.listType=="car"){
      location.href = "/display?InfoType="+data.listType+"&id="+id;
    }else if(data.listType == "customer"){
      location.href = "/display?InfoType="+data.listType+"&id="+id;
    }else if (data.listType == "sale") {
      if($(this).attr("class") == "display carIdOnSale"){
        location.href = "/display?InfoType=car&id="+id;
      }else if ($(this).attr("class") == "display customerIdOnSale") {
        location.href = "/display?InfoType=customer&id="+id;
      }else{
        location.href = "/display?InfoType="+data.listType+"&id="+id;
      }
    }
    return false;
  });
  searchBtn.click(function(){
    var id=$("#searchInput").val();
    if(data.listType=="car"){
      location.href = "/display?InfoType="+data.listType+"&id="+id;
    }else if(data.listType == "customer"){
      location.href = "/display?InfoType="+data.listType+"&id="+id;
    }else if (data.listType == "sale") {
      if($(this).attr("class") == "display carIdOnSale"){
        location.href = "/display?InfoType=car&id="+id;
      }else if ($(this).attr("class") == "display customerIdOnSale") {
        location.href = "/display?InfoType=customer&id="+id;
      }else{
        location.href = "/display?InfoType="+data.listType+"&id="+id;
      }
    }
    return false;
  });
  $.ajax({
    url:"/list",
    type:"get",
    data:data,
    success:function(res){
      console.log("success!");
    }
  });
});
