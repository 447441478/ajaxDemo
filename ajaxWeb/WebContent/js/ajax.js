//定义一个Ajax 函数
function Ajax() {
	//定义一个get方法
	this.get=function(url,success,failure) {
		//获取 XMLHttpRequest对象
		var xhr = null;
		//兼容常见浏览器
		if( XMLHttpRequest ){ //高版本IE、火狐、谷歌 等
			xhr = new XMLHttpRequest();
		}else{ //低版本IE 等
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		}
		//设置请求方式
		xhr.open("GET",url,true);
		
		//设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4){ //接收完成
				if( xhr.status == 200 ){ //成功响应
					success(xhr.responseText); //回调成功方法
				}else{
					failure(xhr.status) //回调失败方法
				}
				
			}
		}
		//开始请求
		xhr.send(); //GET不需要请求体，参数在url中
	}
	
	//定义个post方法
	this.post=function(url,data,success,failure){
		//获取 XMLHttpRequest对象
		var xhr = null;
		//兼容常见浏览器
		if( XMLHttpRequest ){ //高版本IE、火狐、谷歌 等
			xhr = new XMLHttpRequest();
		}else{ //低版本IE 等
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		}
		//设置请求方式
		xhr.open("POST",url,true);
		//设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4){ //接收完成
				if( xhr.status == 200 ){ //成功响应
					success(xhr.responseText); //回调成功方法
				}else{
					failure(xhr.status) //回调失败方法
				}
				
			}
		}
		//设置请求头---post 必须设置请求头
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//发送请求
		xhr.send(data); //post 需要请求体
	}
	
}