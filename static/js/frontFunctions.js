/**
 * 前端常用方法组件封装
 */
$.extend({
	/**
	 * 封装生成常规form表单的方法
	 * var paramObj = {
		   containerName:"formId",
		   pageUrl:"/modules/apply",
		   actionName:"actionName",
		   readonly:true,
		   params:{"WID":wid}
	  };
	  $.buildForm(paramObj);
	 */
	buildForm : function(paramObj){
		var options = paramObj;
		var containerName = paramObj.containerName;
		var actionName = paramObj.actionName;
		var pageUrl = paramObj.pageUrl;
		var params = paramObj.params;
		delete options.containerName;
		delete options.actionName;
		delete options.pageUrl;
		delete options.params;
		options.height = null;
		options.minLineNum = 10;
		options.textareaEasyCheck = true;
		options.root = WIS_EMAP_SERV.getContextPath();
		options.cols = (paramObj.cols&&!(isNaN(paramObj.cols)))?parseInt(paramObj.cols):3;
		options.readonly = paramObj.readonly?paramObj.readonly:false;
		options.isEmpty = paramObj.isEmpty?paramObj.isEmpty:false;
		var ROOT_PATH = paramObj.rootpath?paramObj.rootpath:WIS_CONFIG.ROOT_PATH;
		var datamodel = WIS_EMAP_SERV.getModel(ROOT_PATH+pageUrl+".do",actionName,"form");
		options.data = paramObj.data?paramObj.data:datamodel;
		options.inputWidth = options.inputWidth?options.inputWidth:'6';
		options.model = options.model?options.model:'h';
		options.defaultOptions = paramObj.defaultOptions?paramObj.defaultOptions:{};
		options.defaultOptions["tree"] = {unblind: '/'};
		if(!options.defaultOptions.uploadfile){
			options.defaultOptions['uploadfile'] = {
				limit:3,
				size: 5120,
				type: ['doc','jpg','png','jpeg','bmp','docx','zip','rar','pdf','xls','xlsx','txt']
			};
		}
		
		var formObj = $("#"+containerName).emapForm(options);
		if(!options.isEmpty){
			params = (params==undefined)?null:params;
			var data = BH_UTILS.doSyncAjax(ROOT_PATH+pageUrl+"/"+actionName+".do",params,"POST");
			var value = data.datas[actionName].rows;
			if(value && value.length>0){
				$("#"+containerName).emapForm('setValue',value[0]);
			}
		}
		return formObj;
	},

	/**
	 * 封装生成常规table的方法
	 * 调用示例：
	 * var paramObj = {
           containerName:"girdId",
    	   pagePath:"modules/apply.do",
    	   action:"actionName",
    	   customColumns: this.getCustomColumns(),
    	   searchContainerName:"searchId"
       };
       $.createTable(paramObj);
	 */
	createTable : function(paramObj){
		var options = paramObj;
		var containerName = paramObj.containerName;
		var searchContainerName = paramObj.searchContainerName;
		delete options.containerName;
		delete options.searchContainerName;
		options.height = null;
		options.minLineNum = 10;
		options.enableBrowserSelection = true;
		options.fastRender = true;
		options.params = paramObj.params?paramObj.params:{};
		options.pageable = (paramObj.pageable==undefined)?true:paramObj.pageable;
		options.sortable = (paramObj.sortable==undefined)?true:paramObj.sortable;
		options.customColumns = paramObj.customColumns?paramObj.customColumns:[];
		options.selectionMode = paramObj.selectionMode?paramObj.selectionMode:'custom';
		options.onceParams = paramObj.onceParams?paramObj.onceParams:{};
		options.fxss=true;
		var tableObj = $("#"+containerName).emapdatatable(options);
		
		//如果参数传了高级查询的DOM元素id,则为table创建一个相关的高级查询组件
		if(searchContainerName){
			$.createSearcher(searchContainerName,paramObj.pagePath,paramObj.action,function(condition){
				$("#"+containerName).emapdatatable('reloadFirstPage',{"querySetting":condition});
			});
		}
		return tableObj;
	},



	/**
	 * 封装生成高级查询组件的方法
	 * 调用示例：
	 * $.createSearcher('searchContainerName','modules/apply.do','actionName',function(condition){
	       //具体操作
	   }); 
	 */
	createSearcher : function(containerName,pagePath,actionName,callback){
		var dataModel = WIS_EMAP_SERV.getModel(pagePath,actionName,"search");
		$("#"+containerName).emapAdvancedQuery({
			data:dataModel
		});
		$("#"+containerName).on('search',function(e,condition){
			if(typeof(callback)=="function"){
				callback(condition);
			}
		});
	},
	
	/**
	 * ajax查询请求
	 * 
	 * @param url
	 * @param params
	 * @isParamFix 参数固定，增加"requestParamStr="
	 * @returns {}
	 */
	 ajaxQuery : function(url,params,name,isParamFix,async) {
		var rData = "";
		$.ajax({
			url : url,
			type : 'post',
			dataType : 'json',
			data : isParamFix == true?("requestParamStr=" + JSON.stringify(params)):params,
			async:async==true?true:false,
			error : function(resp) {
	            if(resp.status == 0 || resp.status == 401)
	            {
	                window.location.reload();
	            }
	            else if (resp.status == 403)
	            {
					BH_UTILS.bhDialogWarning({
						title: '提示',
						content:'当前角色权限不足，请切换角色后重新操作',
						buttons: [{
							text: '确认',
							className: 'bh-btn-warning',
							callback: function() {
							}
						}]
					});
					return false;
	            }
	            // 长时间未操作提示错误
	            if(resp.statusText.indexOf("NetworkError") > -1)
	            {
	                BH_UTILS.bhDialogDanger({
	                    title: '网络错误',
	                    content:'您可以尝试刷新页面解决该问题', 
	                    buttons:[{
	                        text: '关闭',
	                        className: 'bh-btn-default'
	                    }]
	                });
	                return false;
	            }			
				$.bhDialog({title:'后台数据异常，请联系管理员',iconType:'warning'});
				return;
			},
			success : function(data) {
				if (data.code == 0) {
					if(data.datas && data.datas[name]){//适用动作
						rData = data.datas[name].rows;
					}else{
						rData = data.data;
					}
				} else {
					if(data.msg != ""){
						BH_UTILS.bhDialogWarning({
		      				title:'提示',
		      				content:data.msg,
		      				buttons:[{text:'确定',className:'bh-btn-warning',callback:function(){}}]
		  				});
					}else{
						$.bhDialog({title:'数据获取异常，请联系管理员',iconType:'warning'});
					}
					return;
				}
			}
		});
		return rData;
	},
	/**
	 * ajax执行请求
	 * 
	 * @param url
	 * @param params
	 * *@isParamFix 参数固定，增加"requestParamStr="
	 * @returns callback
	 */
	ajaxaction : function(url,params,callback,isParamFix,async){
		$.ajax({
			url:url,
			type:'post',
			dataType:'json',
			data:isParamFix == true?("requestParamStr=" + encodeURIComponent(JSON.stringify(params))):params,
			async:async==true?true:false,
			error:function(resp){
				$('.app-ajax-loading').jqxLoader('close');
	            if(resp.status == 0 || resp.status == 401)
	            {
	                window.location.reload();
	            }
	            else if (resp.status == 403)
	            {
					BH_UTILS.bhDialogWarning({
						title: '提示',
						content:'当前角色权限不足，请切换角色后重新操作',
						buttons: [{
							text: '确认',
							className: 'bh-btn-warning',
							callback: function() {
							}
						}]
					});
					return false;
	            }
	            // 长时间未操作提示错误
	            if(resp.statusText.indexOf("NetworkError") > -1)
	            {
	                BH_UTILS.bhDialogDanger({
	                    title: '网络错误',
	                    content:'您可以尝试刷新页面解决该问题', 
	                    buttons:[{
	                        text: '关闭',
	                        className: 'bh-btn-default'
	                    }]
	                });
	                return false;
	            }			
				$.bhDialog({title:'后台数据异常，请联系管理员',iconType:'warning'});
				return;
			},
			success:function(data){
				if(data.code == 0){
					callback(data);
				}else{
					$('.app-ajax-loading').jqxLoader('close');
					if(data.msg != ""){
						BH_UTILS.bhDialogWarning({
		      				title:'提示',
		      				content:data.msg,
		      				buttons:[{text:'确定',className:'bh-btn-warning',callback:function(){}}]
		  				});
					}else{
						$.bhDialog({title:'数据获取异常，请联系管理员',iconType:'warning'});
					}
					return;
				}
			}
		});
	},
	
	/**
	 * 封装的成功弹出框，可以定时消失
	 * @param title 标题
	 * @param content 内容
	 * @param time 消失的时间 毫秒为单位
	 */
//	tPopup : function(title,content,time,callback){
//		var classJudge = false;
//		var utils = require('utils');
//		var bhVersion = utils.getConfig('BH_VERSION');
//		if(bhVersion == ''||bhVersion == null || bhVersion == undefined ||bhVersion == '1.1'){
//			//need className
//			classJudge = true;
//		}
//		var paramObj = {};
//		var uniqueClassMark = $.randomString();
//		paramObj["title"] = title;
//		paramObj["content"] = content;
//		paramObj["iconType"]="success";
//		if (!paramObj["content"] || paramObj["content"] === '') {
//			paramObj["content"] = paramObj["title"];
//			paramObj["title"] = "提示";
//		}
//		var buttons=[{text:'确定',className:(classJudge?'bh-btn-primary ':'')+uniqueClassMark,callback:(callback?callback:null)}];
//		paramObj["buttons"] = buttons;
//		time = (time&&!isNaN(time))?parseInt(time):3000;
//		$.bhDialog(paramObj);
//		setTimeout(function(){
//			$("."+uniqueClassMark).trigger('click');
//			$(".bh-btn-primary " + uniqueClassMark).trigger('click');
//		},time);
//	},
	
	/**
	 * 修改后的成功提示
	 * @param content 内容
	 */
	tPopup : function(content){
		$.bhTip({
            content: content,
            state: 'success'
        });
	},
	
	/**
	 * 获取一个指定长度的随机字符串
	 * @param len 生成的字符串的长度 默认32位
	 */
	randomString : function(len){
		len = len||32;
		var usingChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var maxPos = usingChars.length;
		var resultStr = "";
		for(var i=0;i<len;i++){
			resultStr +=usingChars.charAt(Math.floor(Math.random()*maxPos));
		}
		return resultStr;
	},
	
	/**
	 * 确认弹出框
	 * 
	 * @param url
	 * @param params
	 * @returns callback
	 */
	confirmDialog : function(title,callback,text){
		var classJudge = false;
		var utils = require('utils');
		var bhVersion = utils.getConfig('BH_VERSION');
		if(bhVersion == ''||bhVersion == null || bhVersion == undefined ||bhVersion == '1.1'){
			//need className
			classJudge = true;
		}
		var buttons = [
		   {
			   text:text?text:"确认",
			   className:classJudge?"bh-btn-warning":'',
			   callback:function(){
				   callback();
			   }
		   },
		   {
			   text:"取消",
			   className:classJudge?"bh-btn-default":''
		   }
	    ];
	    $.bhDialog({'title':title,"iconType":"warning",buttons:buttons});
	},
	
	/**
	 * 封装导出功能
	 * @param el 封装好的参数对象，其中需拼装的属性有 "app","contextPath","module","page","action","querySetting","*order","containerId"
	 */
	exportfn : function(el){
		var $table = $("#"+el.containerId);
		if(el.isGrid){
			$table = $("#"+el.containerId).emapGrid('getTable');
		}
		var url = el.contextPath+"/sys/emapcomponent/imexport/export.do";
		var params = el;
		params["module"] = el.module?el.module:"*default";
		if(!el.colnames){
			
			var visibleColumns = $table.emapdatatable("getVisibleColumns");
			var colnames = "";
			for(var i = 0;i<visibleColumns.length;i++){
				if(visibleColumns[i].datafield && visibleColumns[i].datafield != "field_checkbox"){
					colnames += visibleColumns[i].datafield.replace("_DISPLAY", "")+",";
				}
			}
			params["colnames"] = colnames.substr(0,colnames.length-1);
		}
		if(!el.order){
			var pxzd = $table.emapdatatable("getSort");
			if (pxzd && pxzd.length>0) {
				params["*order"] = pxzd.exp.replace("_DISPLAY", "");
			}
		}else{
			params["*order"] = el.order;
		}
		
		jQuery.ajax({
			url:url,
			data:params,
			type:'post',
			dataType:'json',
			cache:false,
			success:function(ret){
				var attachment = ret.attachment;
				var url = el.contextPath +"/sys/emapcomponent/file/getAttachmentFile/"+attachment+".do";
				window.location.href = url;
				return false;
			},
			error:function(resp)
			{
	            if(resp.status == 401)
	            {
	                window.location.reload();
	            }
	            else if (resp.status == 403)
	            {
					BH_UTILS.bhDialogWarning({
						title: '提示',
						content:'当前角色权限不足，请切换角色后重新操作',
						buttons: [{
							text: '确认',
							className: 'bh-btn-warning',
							callback: function() {
							}
						}]
					});
					return false;
	            }
	            // 长时间未操作提示错误
	            if(resp.statusText.indexOf("NetworkError") > -1)
	            {
	                BH_UTILS.bhDialogDanger({
	                    title: '网络错误',
	                    content:'您可以尝试刷新页面解决该问题', 
	                    buttons:[{
	                        text: '关闭',
	                        className: 'bh-btn-default'
	                    }]
	                });
	                return false;
	            }
			}
		});
	},
	
	/**
	 * 刷新字典
	 * 用于实时刷新字典内容
	 * @param appname 调用动作的app名称
	 * @param dicid	刷新的字典的id
	 */
	refreshDic : function(appname, dicid) {
		$.ajax({
			url: WIS_EMAP_SERV.getContextPath() + "/sys/emapcomponent/clearDicCache.do?app=" + appname + "&dic=" + dicid + "",
			type: 'post',
			dataType: 'json',
			async: false,
			error: function(resp) {
				if (resp.status == 0 || resp.status == 401) {
					window.location.reload();
				} else if (resp.status == 403) {
					BH_UTILS.bhDialogWarning({
						title: '提示',
						content: '当前角色权限不足，请切换角色后重新操作',
						buttons: [{
							text: '确认',
							className: 'bh-btn-warning',
							callback: function() {}
						}]
					});
					return false;
				}

				// 长时间未操作提示错误
				if (resp.statusText.indexOf("NetworkError") > -1) {
					BH_UTILS.bhDialogDanger({
						title: '网络错误',
						content: '您可以尝试刷新页面解决该问题',
						buttons: [{
							text: '关闭',
							className: 'bh-btn-default'
						}]
					});
					return false;
				}
				return;
			},
			success: function(data) {
				if (data.code == 0) {} else {
					return;
				}
			}
		});
	},
	
	getImageSrc : function(token) {
		var fileUrl = '';
		$.ajax({
			type: "post",
			url: contextPath + "/sys/emapcomponent/file/getUploadedAttachment/" + token + ".do",
			dataType: "json",
			async: false, // 默认为true 异步
			success: function(res) {
				if (res.success) {
					$(res.items).each(function() {
						fileUrl = this.fileUrl;
					});
				}
			}
		});
		return fileUrl;
	}
});