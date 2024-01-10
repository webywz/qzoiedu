function getOneCheckedItems(name)
    {
              var items = document.getElementsByName( name );
            var checked = new Array();
            var index = 0;
            if( items.length > 0 )
            {
                for( var i=0; i<items.length; i++ )
                {
                    if( items[i].checked ) 
                    {
                        checked[ index++ ] = items[ i ].value;
                    }
                }
            }
            if(checked.length==0 || checked.length>1){
                 alert( '请选择一个记录' );
                    return null;
            }
            return checked[0];
    }
    function getAllCheckedItems( name )
    {
            var items = document.getElementsByName( name );
            var checked = new Array();
            var index = 0;
            if( items.length > 0 )
            {
                for( var i=0; i<items.length; i++ )
                {
                    if( items[i].checked ) 
                    {
                        checked[ index++ ] = items[ i ].value;
                    }
                }
            }
            return checked;
    }
    function selectAll(input1,input2)
    {
        var objForm = document.forms[input1];
        var objLen = objForm.length;
        for (var iCount = 0; iCount < objLen; iCount++)
        {
            if (input2.checked == true)
            {
                if (objForm.elements[iCount].type == "checkbox")
                {
                    objForm.elements[iCount].checked = true;
                }
            }
            else
            {
                if (objForm.elements[iCount].type == "checkbox")
                {
                    objForm.elements[iCount].checked = false;
                }
            }
        }
    }
function memberValidEmail(bdname,msg)
{
    var email = document.getElementById(bdname).value;
    //alert("email="+email);
    //邮件地址正则表达式 
    isEmail1 = /^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/;
    //邮件地址正则表达式 
    isEmail2 = /^.*@[^_]*$/;
    //验证邮件地址，返回结果 
    var mail = isEmail1.test(email) && isEmail2.test(email);
    //alert("mail:="+mail);
    if(!mail){
        alert(msg);
        return false;
    }
    return true;
}
//去掉字串左边的空格
function lTrim(str)
{
  if (str.charAt(0) == " ")
  {
    //如果字串左边第一个字符为空格
    str = str.slice(1);//将空格从字串中去掉
    //这一句也可改成 str = str.substring(1, str.length);
    str = lTrim(str);    //递归调用
  }
  return str;
}
//去掉字串右边的空格
function rTrim(str)
{
  var iLength;
  
  iLength = str.length;
  if (str.charAt(iLength - 1) == " ")
  {
    //如果字串右边第一个字符为空格
    str = str.slice(0, iLength - 1);//将空格从字串中去掉
    //这一句也可改成 str = str.substring(0, iLength - 1);
    str = rTrim(str);    //递归调用
  }
  return str;
}
//去掉字串两边的空格
function trim(str)
{
  return lTrim(rTrim(str));
}
//判断是否为数字;如果不是数字就返回false;bdname是表单的id;msg是信息
function memberCheckNum(bdname,msg){
    var obj = document.getElementById(bdname);
    var value = obj.value;
    for(i=0; i<value.length; i++){
        if (value.substring(i, i+1)<"0" || value.substring(i, i+1)>"9"){
            alert(msg);
            return(false);
        }
    }
    return true;
}