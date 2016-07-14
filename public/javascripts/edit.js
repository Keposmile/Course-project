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

function check(formData,listType){
  var regDate = /19|20\d{2}-(0|([^0]&\d){1})/g;
  var regNumber = /^([0-9]+)(\.[0-9]*)?/g;
  var regEmail = /([a-z0-9A-Z]{*})(.?)\1@[a-z0-9A-Z]{2,6}.com/g;
  var regId = /([a-z0-9]{24})/g;
  var result = 0;
  var package = {};
  for(var m in formData){
    if(m!="_proto_"){
      if(formData[m] === null || formData[m] === ""){
        result = 1;
        break;
      }
    }
  }
  if(result == 1){
    package = {
      result:1
    };
  }else if (result === 0 ) {
    package = {
      result:0,
      data:formData
    };
  }
  return package;
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
    formData = madeDataObject(formData);
    formData = check(formData,typeData.InfoType);
    if(formData.result === 0){
      $.ajax({
        url:"/update?InfoType="+typeData.InfoType+"&id="+typeData.id,
        method:"post",
        data:formData.data,
        success:function(){
          console.log("success");
          location.href = "/list?listType="+typeData.InfoType;
        }
      });
    }else {
      alert("您输入的数据格式有误,请检查!");
    }

  });
});
