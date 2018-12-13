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

$(".logn_pt span").click(function(){
    var index=$(this).index()
    if($(".login").eq(index).hasClass("message")){
        $(".login_detail").css({
            "height":"400px"
        })
    }else{
        $(".login_detail").css({
            "height":"350px"
        })
    }
    
    $(".logn_pt span").eq(index).addClass("cr").siblings("span").removeClass("cr")
    $(".login").eq(index).addClass("active").siblings(".login").removeClass("active")
   
})



// 手机号验证
GL={}
$(".sj1").blur(function(){
	var phone_inp = $(this).val();
	var ret = /[1][34578]\d{9}/;
	if(ret.test(phone_inp)) {
        $("#sendcodemg").removeClass("error").html("");
        //获取手机验证码
	} else {
        
        $("#sendcodemg").addClass("error").html("手机号码格式错误");
	}
})
$("#vcode_btn").click(function() {
    // console.log(111)
    GL.ram = parseInt(10000 + Math.random() * 90000);
    $("#phoneCode").html("您的手机验证码为:" + GL.ram );
    })
    $("#sms_password").blur(function(){
        console.log(GL.ram)
        if($("#sms_password").val()==GL.ram ){
            $("#phoneCode").removeClass("error").html("验证码输入正确");
            $("#phoneCode").css({
                "color":"green"
            })
        }else{
            $("#phoneCode").addClass("error").html("验证码错误");
        }
    var sectionT = 90;
    var timer = setInterval(function() {
        sectionT -= 1;
        $("#vcode_btn").prop("value", sectionT + "s后重新获取");
        if(sectionT == 0) {
            $("#vcode_btn").prop("value", "获取验证码");
            clearInterval(timer);
        }
    }, 1000)
})