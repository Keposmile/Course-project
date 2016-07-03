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
$(function(){
  var addForm = $("#addForm");
  var formData = {};
  var submitBtn =$("#submitBtn");
  submitBtn.click(function(){
    formData = madeDataObject(formData);
    console.log(formData);
    $.ajax({
      url:"/edit",
      method:"post",
      data:formData,
      success:function(res){
        alert("success!");
      }
    });
  });
});
