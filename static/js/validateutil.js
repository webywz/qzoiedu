/**
* 数据验证类
*/
var ValidateUtil = new function() 
{
    /**
    * 用正则表达式替换前后空格
    *
    * @param str
    * @return str
    */
    this.trim= function(str)       
    {      
        var t = str.replace(/(^\s*)|(\s*$)/g, "");     
        return t.replace(/(^　*)|(　*$)/g, "");     
    }
   /**
    * 去掉字符串左边的空格
    *
    * @param str
    * @return str
    */
    this.ltrim= function(str)       
    {      
        return str.replace(/(^\s*)/g, ""); 
    }   
   /**
    * 去掉字符串右边的空格
    *
    * @param str
    * @return str
    */
    this.rtrim= function(str)       
    {      
    return str.replace(/(\s*$)/g, "");  
    }     
    /**
    * 检查字符串是否为空
    *
    * @param str
    * @return boolean true：是，false：不是
    */      
    this.strIsNull=function(str)
    {
       if(str==undefined || str==null || str=="")
       {
            return true;
       }
       return false;
    }
    /**
    * 检查是否为英文
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isEng = function(str)
     {
        var re = /^[A-Za-z]+$/;
        return re.test(str);
    }
    /**
    * 检查是否为数字
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isInteger = function(str)
     {
        var re = /^[-]?[0-9]+$/;
        return re.test(str);
    }
    /**
    * 检查是否为正整数
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isPositiveInteger = function(str)
     {
        var re = /^[0-9]+$/;
	//var re = /^\+?[1-9][0-9]*$/; 更严格的模式，可以看情况开启
        return re.test(str);
    }    
    /**
    * 检查是否为负整数
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isNegativeInteger = function(str) 
    {
        var re = /^-[0-9]+$/;
        return re.test(str);
    }      
     /**
    * 检查是否为汉字
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isChineseChar = function(str) 
    {
        var re = /^[\u4e00-\u9fa5]+$/;
        return re.test(str);
    }
    /**
    * 检查是否为英文和数字
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isEngInteger = function(str)
     {
        var re = /^[0-9A-Za-z]+$/;
        return re.test(str);
    }
    /**
    * 检查是否为英文和汉字
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isEngChinesechar = function(str) 
    {
        var re = /^[A-Za-z\u4e00-\u9fa5]+$/;
        return re.test(str);
    }   
    
    /**
    * 检查是否为英文汉字 下划线 和数字
    *
    * @param str
    * @return boolean true：是，false：不是
    */        
    this.isEngChinesecharIntegerUnderline = function(str) 
    {
        var re = /^[0-9A-Za-z\u4e00-\u9fa5_]+$/;
        return re.test(str);
    }   
      
    /**
    * 检查是否为数字和汉字
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isIntegerChinesechar= function(str) 
    {
        var re = /^[0-9\u4e00-\u9fa5]+$/;
        return re.test(str);
    }      
    /**
    * 检查是否为数字和字母和下划线
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isEngIntegerUnderline = function(str) 
    {
        var re = /^[0-9A-Za-z_]+$/;
        return re.test(str);
    }      
    /**
    * 检查字符串长度是否是 n位
    *
    * @param str  字符串
    * @param limitsize 限制长度
    * @return boolean true：是，false：不是
    */
    this.strIsOverlength = function(str,limitsize) 
    {
        if(this.strIsNull(str))
        {
            return false;   
        }
        if(str.length==limitsize)
        {
            return true;   
        }
        return false;
    }      
    /**
    * 检查字符串长度至少n位的限制
    *
    * @param str  字符串
    * @param leastsize 限制长度
    * @return boolean true：是，false：不是
    */
    this.strLeastsize = function(str,leastsize) 
    {
        if(this.strIsNull(str))
        {
            return false;   
        }
        if(str.length<=leastsize)
        {
            return true;   
        }
        return false;
    }  
    /**
    * 检查字符串长度至少n位 最多 m位 的限制
    *
    * @param str  字符串
    * @param leastminsize 最少限制长度
    * @param leastmaxsize 最多限制长度
    * @return boolean true：是，false：不是
    */
    this.strLeastnmsize = function(str,leastminsize,leastmaxsize)
     {
        if(this.strIsNull(str))
        {
            return false;   
        }
        if(str.length>=leastminsize && str.length<=leastmaxsize)
        {
            return true;   
        }
        return false;
    } 
    /**
    * 检查是否为浮点数
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isAge = function(str)
     {
        var re = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
        return re.test(str);
    }       
    /**
    * 检查是否为浮点数
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isDouble = function(str) 
    {
        var re = /^\d+(\.\d+)?$/;
        return re.test(str);
    }    
    /**
    * 检查至少n位 最多 m位 的限制的浮点数
    *
    * @param str  字符串
    * @param leastminsize 最少限制长度
    * @param leastmaxsize 最多限制长度
    * @return boolean true：是，false：不是
    */
    this.isDoubleLeastnmsize = function(str,leastminsize,leastmaxsize) 
    {
        var re =  eval("/^(0|[1-9]\\d*)(\\.\\d{"+leastminsize+","+leastmaxsize+"})+$/");
        return re.test(str);
    }     
    /**
    * 检查是否为正浮点数
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isPositiveDouble= function(str)
     {
        var re = /^[1-9]d*.d*|0.d*[1-9]d*$/;
        return re.test(str);
    }     
    /**
    * 检查是否为负浮点数
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isNegativeDouble  = function(str) 
    {
        var re = /^(-(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
        return re.test(str);
    }     
    /**
    * 检查两个字符串是否相等
    *
    * @param str  字符串
    * @param leastsize 限制长度
    * @return boolean true：是，false：不是
    */
    this.strEquals = function(str1,str2)
     {
        if(str1==str2)
        {
            return true;   
        }
        return false;
    }     
    /**
    * 检查是否为邮箱格式
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isEmail = function(str) 
    {
        var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return re.test(str);
    }       
    /**
    * 检查是否为电话格式  包括手机和固定电话
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isTelephone = function(str) 
    {  
       if(this.isMobile(str) || this.isFixedPhone(str))
       {
            return true; 
       }
        return false;
    }      
    /**
    * 检查是否为手机格式
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isMobile = function(str)
     {
        if(str.length != 11) {
        	return false;
        }
    	var re = /^(1)\d{10}$/;
        return re.test(str);
    }      
    /**
    * 检查是否为固定电话
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isFixedPhone = function(str)
     {
        var re =/^(\d{2,4}[-_－—]?)?\d{3,9}([-_－—]?\d{3,9})?([-_－—]?\d{1,7})?$/;
        var re1 = /^0?1[35]\d{9}$/;
        return (re.test(str) || re1.test(str));
    }   
    /**
    * 检查是否为邮政编码
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isZipCode = function(str) 
    {
        var re = /^[0-9]{6}$/;
        return re.test(str);
    } 
    /**
    * 检查是否为传真号码
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isFax = function(str) 
    {
        var re = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
        return re.test(str);
    } 
    /**
    * 检查是否为url
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isURL = function(str)
     {
      var strRegex =/(https|http|ftp|rtsp|mms):\/\/(\w+:{0,1}\w*@)?(\w+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      var re=new RegExp(strRegex);  
      return re.test(str);
    } 
    /**
    * 检查是否为中文url
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isChineseDomain = function(str) 
    {
        var re = /^[A-Za-z0-9\u4E00-\u9FA5][A-Za-z0-9\u4E00-\u9FA5\-]{0,19}([\.][A-Za-z0-9\u4E00-\u9FA5][A-Za-z0-9\u4E00-\u9FA5\-]{0,19})*$/;
        return re.test(str);
    } 
    /**
    * 检查是否为ip地址
    * 包括 ipv4和ipv6
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isIPAddress = function(str)
     {
        if(this.isIPAddress4(str) || this.isIPAddress6(str))
        {
            return true;   
        }
        return false;
    }
    /**
    * 检查是否为ipv4
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isIPAddress4 = function(str) 
    {
        var ipreg = /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-4])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
        return ipreg.test(str)
    }
    /**
    * 检查是否为ipv6
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isIPAddress6 = function(str)
     {
        var re = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/;
        return re.test(str);
    }
    /**
    * 检查是否为qq号
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isQQ = function(str)
     {
        var re = /^[1-9]\d{4,8}$/;
        return re.test(str);
    }
    /**
    * 检查是否为身份证
    *
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isIDCard = function(str) 
    {
        var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return re.test(str);
    }    
    /**
    * 检查有效长日期格式是否正确 ,只检查位数不做正确性测试
    *  YYYY-MM-DD HH:MM:SS  YYYY/MM/DD HH:MM:SS
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isDateTime = function(str)
     {
        var re =/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        return re.test(str);
    }      
    /**
    * 检查有效短日期格式是否正确 ,只检查位数不做正确性测试
    *  YYYY-MM-DD YYYY/MM/DD
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isDate = function(str)
     {
        var re =/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
        return re.test(str);
    }     
    /**
    * 检查是否是闰年 传入年份或者年月日
    * YYYY   YYYY-MM-DD
    * @param str 
    * @return boolean true：是，false：不是
    */
    this.isLeapYear = function(str)
     {
        if(this.strLeastsize(str,4))
        {
            var year = str.substring(0,4);
            if((year%4==0&& year%100!=0)||year%400==0)
            {
                return true;   
            }       
        }        
        return false;
    }       
    /**
    * 文件扩展名名称是否是图片类型
    * @param str
    * @return boolean true：是，false：不是
    */
    this.isImageFiletype = function(str) 
    {
        var re =/\.jpg$|\.jpeg$|\.gif$|\.png$/i;
        return re.test(str);
    } 
}