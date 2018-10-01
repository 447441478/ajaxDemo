<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript" src="<c:url value='/js/ajax.js'/>"></script>
		<script type="text/javascript">
			var ajax = new Ajax();
			function check1(obj) {
				var name = obj.value;
				var url = "<c:url value='/ValServlet?name="+encodeURI(name)+"'/>"; //encodeURI解决GET方式中文乱码
				ajax.get(url,success1,failure1);
			}
			function success1(info) {
				getSpan.innerHTML=info;
			}
			function failure1(info) {
				getSpan.innerHTML=info;
			}
			function check2(obj) {
				var name = obj.value;
				var data ="name="+name;
				var url = "<c:url value='/ValServlet'/>";
				ajax.post(url,data,success2,failure2);
			}
			function success2(info) {
				postSpan.innerHTML=info;
			}
			function failure2(info) {
				postSpan.innerHTML=info;
			}
			
		</script>
	</head>
	<body>
		get:<input name="name" onblur="check1(this);"/>
		<span id="getSpan"></span>
		<br/><br/><br/>
		post:<input name="name" onblur="check2(this);"/>
		<span id="postSpan"></span>
		<br/><br/><br/>
	</body>
</html>