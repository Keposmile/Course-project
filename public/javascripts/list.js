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
    location.href = "/edit?InfoType="+data.listType+"&id="+$(".carId").eq(index).html();
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
