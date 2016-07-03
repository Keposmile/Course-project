function madeDataObject(formData){
  var input = $("td input,input[type = date]");
  for(var i = 0;i<input.length;i++){
    if(input.eq(i).attr("type") == "radio"){
      formData[input.eq(i).attr("name")] = $("input[name=gender]").val();
      i++;
    }
    else{
      formData[input.eq(i).attr("id")] = input.eq(i).val();
    }
  }
  return formData;
}
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
  var addForm = $("#addForm");
  var formData = {};
  var submitBtn =$("#submitBtn");
  var url = window.location.search;
  var typeData = {
    listType:parseQueryString(url).listType,
    url:window.location.pathname
  };
  submitBtn.click(function(){
    formData = madeDataObject(formData);
    $.ajax({
      url:window.location.pathname+"?listType="+typeData.listType,
      method:"post",
      data:formData,
      success:function(){
        console.log("success");
        location.href = "/list?listType="+typeData.listType;
      }
    });
  });
});
