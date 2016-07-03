function madeDataObject(formData){
  var input = $("td input,input[type = date]");
  for(var i = 0;i<input.length;i++){
    if(input.eq(i).attr("type") == "radio"){//跳过性别判断
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
  var editForm = $("#editForm");
  var formData = {};
  var genderRadio = $("input[name=gender]");
  var submitBtn =$("#submitBtn");
  var url = window.location.search;
  var typeData = {
    InfoType:parseQueryString(url).InfoType,
    url:window.location.pathname,
    id:parseQueryString(url).id
  };
  console.log(typeData.InfoType);
  console.log(typeData.id);
  genderRadio.click(function(){
    // alert($(this).val());
    formData.gender=$(this).val();
  });
  submitBtn.click(function(){
    console.log(typeData);
    formData = madeDataObject(formData);
    console.log(typeData.InfoType);
    console.log(typeData.id);
    $.ajax({
      url:"/update?InfoType="+typeData.InfoType+"&id="+typeData.id,
      method:"post",
      data:formData,
      success:function(res){
        if(res.success === 0){
          console.log("success");
          location.href = "/list?listType="+typeData.InfoType;
        }else {
          console.log("failed");
        }
      }
    });
  });
});
