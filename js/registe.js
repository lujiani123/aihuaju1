// 顶部导航
$(window).scroll(function(){
    var scroll=$(this).scrollTop()
    if(scroll>=50){
        $(".top-fixed-d").css({
            "display":"block"
        })
    }else{
        $(".top-fixed-d").css({
            "display":"none"
        })
    }
})


// 手机号验证

$("#user_name").blur(function(){
	var phone_inp = $(this).val();
	var ret = /[1][34578]\d{9}/;
	if(ret.test(phone_inp)) {
        //获取手机验证码
        $("#sendcodemg").html("");
		$("#vcode_btn").click(function() {
			if($("#vcode_btn").attr("value") == "获取验证码") {
				var ram = parseInt(10000 + Math.random() * 90000);
                $("#phoneCode").html("您的手机验证码为:" + ram);
                $("#telcode").blur(function(){
                    if($("#telcode").attr("value")==ram){
                        $("#phoneCode").html("验证码输入正确");
                        $("#phoneCode").css({
                            "color":"green"
                        })
                    }
                })
				var sectionT = 90;
				var timer = setInterval(function() {
					sectionT -= 1;
					$("#vcode_btn").prop("value", sectionT + "s后重新获取");
					if(sectionT == 0) {
						$("#vcode_btn").prop("value", "获取验证码");
						clearInterval(timer);
					}
				}, 1000)
			}
			return false;
		});
	} else {
        
        $("#sendcodemg").addClass("error").html("手机号码格式错误");
        $("#sendcodemg").css({
            "color":"red",
            "display":"block"
        })
	}
})


// 密码
$("#password").blur(function(){
    var password_inp = $(this).val();
    var regPwd = /^[\u4e00-\u9fa5a-z0-9\-_、]{6,20}$/;
    if(regPwd.test(password_inp)){
        $("#pwderror").html("")
    }else{
        $("#pwderror").addClass("error").html("密码长度至少6位字符")
    }

})

// 确认密码 
var password_inp=$("#password").val()
$("#password_confirm").blur(function(){
    var password_confirm_inp = $(this).val();
    if(password_inp==password_confirm_inp){
        $("#conerror").html("")
    }else{
        $("#conerror").addClass("error").html("输入的两次密码不一致")
    }
})

$("#submit_btn").on("click",registe)
function registe(){
    // console.log(111)
   
        var username=$("#user_name").val()
        var password=$("#password").val()
        console.log(!username)
        if(username&&password){
        var options={
            url:"http://localhost:8888/api/users/register",
            type:"POST",
            data:{
                username : username,
                password : password
              }
        }
        $.ajax(options)
        .then(function(res){
            // console.log(res)
            if(res.statu=="success"){
                location.href = "http://localhost:8888/success.html"
            }else{
                alert("用户名重复");
              }

        },function(err){
            console.log(err,"错误")
          })
    }else{
        alert("账号或者密码不能为空")
    }
    
}
