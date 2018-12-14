
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



// 购物车数量
// console.log(JSON.parse(localStorage.infos))
var count=0;
if(localStorage.infos==null){
      count=0;
}else{
    var infos=JSON.parse(localStorage.infos)
    count=JSON.parse(localStorage.infos).length
}
$(".count").html(count)

$.ajax("./php/flower/xianhua.json")
.then(function(res){
    // console.log(res)
    renderPage1(res)
    renderPage4(res)
    // renderPage2(res)
    renderPage3(res)
    renderPage5(res)

    lazyLoading()
    addHua()
    ChoiceStyle()
    // goodNum()
    Magnifier()
    btnBanner()
    addCart()
    jiashu(res)
    jianshu(res)
})
console.log(localStorage.infos)
function renderPage1(json){
        if(cookie("id")){
            var id=cookie("id")
            var html="";
            for(var i=0;i<json.length;i++){
                if(json[i].id==id){
                    html+=`
                    <a href="index.html">首页</a>>
                    <a href="floorlist.html">鲜花</a>>
                    <a>${json[i].title}</a>
                    
                    `
                }
        }
        document.querySelector(".nav_bar").innerHTML=html   
    }
}
function renderPage4(json){
    if(cookie("id")){
        var id=cookie("id")
        var html="";
        for(var i=0;i<json.length;i++){
            if(json[i].id==id){
                html+=`
                
                <div class="Magnifier_shop">
                <img  class="good_tu" src="${json[i].img}" width="418" height="418"  rel=${json[i].img} alt="">
                <div id="Magnifier_shop_S">
				</div>
				<div class="Magnifier_shop_B">
					<img src="" />
				</div>
               
                `
            }
            }
        }
        document.querySelector(".info_img").innerHTML=html
}
function renderPage5(json){
    if(cookie("id")){
        var id=cookie("id")
        var html="";
        for(var i=0;i<json.length;i++){
            if(json[i].id==id){
                html+=`
                <h1 >
                    ${json[i].title}      
                        <span >${json[i].name}    </span>
                    </h1>
                    <p class="huayu">
                            ${json[i].huayu}        
                    </p>
                    <p class="huayu husyu2">
                            
                        适合对象：
                        恋人        
                    </p>
                    <div class="goods_div" id="goods_detail_price">
                            <div class="price_name fl">价格</div>
                                <div class="price_right fl" id="member_price">
                                    <p>
                                        <font>¥</font>
                                        <font class="goods_price" id="price">${json[i].price}</font>
                                    <span class="mat_price">&nbsp;¥${json[i].oldprice}</span>
                                    </p>
                                    <div class="goods_attr">
                                    <ul>
                                        <li>近期销量 <font>${json[i].pay}</font></li>
                                        <li>累计评价 <font>${json[i].assess}</font></li>
                                        <li>好评量 <font>${json[i].comment}</font></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="price_name fl mr_t10">标签</div>
                            <div class="price_right fl mr_t10">
                                <span class="bar">
                                    <a style="color:#555555" href="#">玫瑰</a>
                                </span>
                                <span class="bar">
                                    <a style="color:#555555" href="#">红玫瑰</a>
                                </span>
                                <span class="bar">
                                    <a style="color:#555555" href="#">红色</a>
                                </span>
                                <span class="bar">
                                    <a style="color:#555555" href="#">花束</a>
                                </span>
                                <span class="bar">
                                    <a style="color:#555555" href="#">同学</a>
                                </span>
                                
                                <span id="more_goods_tags" class="">
                                    更多+
                                </span>
                            </div>
                </div> 
                <div class="goods_div">
                <div class="fl adder">配送至</div>
                <div class="text">
                    <div id="areazone">请选择地区</div>
                    <b>∨</b>
                </div>
            </div>
            <div class="goods_div">
                    <div class="price_name fl" style="margin-top:10px;">选择款式</div>
                    <div class="price_right fl">
                        <ul class="associated_goods">
                            <li class="cur">
                                <img src=${json[i].smallimg[0].img} width="40"> 
                                满载幸福 - 99朵红玫瑰，外围满天星点缀                               
                                <div class="cur_ico">
                                <img src="./images/li_cur.png" width="17">
                                </div>
                            </li>
                            <li>
                                <img src=${json[i].smallimg[1].img} width="40">
                                LOVE 99 - 99枝红玫瑰，外围满天星                                
                                <div class="cur_ico">
                                <img src="./images/li_cur.png" width="17">
                                </div>
                            </li>
                            <li>
                                <img src=${json[i].smallimg[2].img} width="40">
                                浪漫火花 - 99枝红玫瑰，搭配满天星                                
                                <div class="cur_ico">
                                <img src="./images/li_cur.png" width="17">
                                </div>
                            </li>
                            <li>
                                <img src=${json[i].smallimg[3].img} width="40">
                                    恒久挚爱 - 99枝红玫瑰，搭配满天星                              
                                <div class="cur_ico"><img src="./images/li_cur.png" width="17">
                                </div>
                            </li>
                            </ul>
                    </div>
                </div>
              
               
                `
            }
            }
        }
        document.querySelector("#good_ditails").innerHTML=html
}


// 小图
function renderPage3(json){
    // console.log(json)
    if(cookie("id")){
        var id=cookie("id")
        var html="";
        for(var i=0;i<json.length;i++){
            if(json[i].id==id){
                var json1=json[i].smallimg
        // console.log(json1)
             
                for(var k=0;k<json1.length;k++){
                html+=`
                <li class="">
                    <img src=${json1[k].img}  mid=${json1[k].img} width="68" height="68">
                    <em></em>
                </li>
                `
            }
        }
    }
    document.querySelector("#thumblist").innerHTML=html   
}
}
// renderPage3()
// 懒加载
function lazyLoading(){
    $("#thumblist li").hover(function(){
        var index=$(this).index();
        var dataId=$("#thumblist li img").eq(index).attr("mid")
        $(".good_tu").attr("src",dataId)
    })
}

// 选择款式
function  ChoiceStyle(){
    $(".associated_goods li").click(function(){
        var index=$(this).index()
        $(".associated_goods li").eq(index).addClass("cur").siblings("li").removeClass("cur")
    })
}


// 添加搭配
function addHua(){
    $("#add_huacai li").click(function(){
        var index=$(this).index()
        if($(".huacai_box").eq(index).hasClass("active")){
            $(".huacai_box").eq(index).removeClass("active")
        }else{
            $(".huacai_box").eq(index).addClass("active").siblings(".huacai_box").removeClass("active")
        }
        console.log(index)
    })
}

// 购买数量
// function goodNum(){
//     var good_num=Number($("#good_num").val())
//     $("#reduce").click(function(){
        
//         if(good_num==1) return false;
//         good_num--
//         $("#good_num").val(good_num)
        
//     })
//     $("#add").click(function(){
//         good_num++
//         $("#good_num").val(good_num)

        
//     })
// }
function jianshu(json){
    // var good_num=Number($("#good_num").val())
    // if(good_num==1) return false;
    // good_num--
  
    $("#reduce").click(function(){
        var infos=JSON.parse(localStorage.infos)
   for(var i=0; i<json.length;i++){
        for(var k=0;k<infos.length;k++){
            if(json[i].id===infos[k].id){
                if(infos[k].num==1) return false
                infos[k].num--
                //  location.reload()
                $("#good_num").val(infos[k].num)

            }
        }
    }
    localStorage.infos=JSON.stringify(infos)
    })
}

function jiashu(json){
    $("#add").click(function(){
        var infos=JSON.parse(localStorage.infos)
        console.log(infos)
   for(var i=0; i<json.length;i++){
        for(var k=0;k<infos.length;k++){
            if(json[i].id===infos[k].id){
                infos[k].num++
            //   location.reload()
            $("#good_num").val(infos[k].num)

            }
        }
    }
    localStorage.infos=JSON.stringify(infos)
    })
}

// // 放大镜
function Magnifier(){
    $(".Magnifier_shop").mouseenter(function() {
        $(this).css("box-shadow", "0 0 5px 3px #666");
        var Magnifier_shop_B_src = $(".Magnifier_shop>img").prop("src");
        $(".Magnifier_shop_B>img").prop("src", Magnifier_shop_B_src);
        $(".Magnifier_shop_B>img").css("width", "960px");
        $(".Magnifier_shop_B>img").css("height", "960px");
        $("#Magnifier_shop_S").stop().fadeIn(500);
        $("#Magnifier_shop_S").mousemove(function(e) {
            var e = e || event;
            $(".Magnifier_shop_B").css({ ",l": "scale(1,1)", "left": "440px" })
            var x = e.pageX - $(this).width() / 2 - $(".Magnifier_shop").offset().left;
            var y = e.pageY - $(this).height() / 2 - $(".Magnifier_shop").offset().top;
            if(x < 0) {
                x = 0
            }
            if(x > 220) {
                x = 220
            }
            if(y < 0) {
                y = 0
            }
            if(y > 220) {
                y = 220
            }
            $("#Magnifier_shop_S").css("left", x + "px");
            $("#Magnifier_shop_S").css("top", y + "px");
            $(".Magnifier_shop_B>img").css("left", -2 * x + "px");
            $(".Magnifier_shop_B>img").css("top", -2 * y + "px");
        })
    }).mouseleave(function() {
        $("#Magnifier_shop_S").stop().fadeOut(500);
        $(".Magnifier_shop_B").css({ "transform": "scale(0,0)", "left": "0" })
        $(this).css("box-shadow", "none");
    })
}

// 右侧点击更换
function btnBanner(){
    var i=0;
    $("#nextbtn1").click(function(){
        if(i==0) return false;
       
        $(".hot_list ul").css({
          top:i*570
        })
        i++
    })
    $("#prevbtn1").click(function(){
       if(i==7) return false;
        $(".hot_list ul").css({
          top:-i*570
        })
        i++
    })

}

// 加入购物车
function addCart(){
    $("#btn_add_cart").click(function(){
        if(cookie("id")){
            id=cookie("id")
            console.log(id)
            var good={}
            if(localStorage.infos){
                var goods=JSON.parse(localStorage.infos)
                // console.log(goods)
                var bstop=true;
                for(var key in goods){
                   if(goods[key].id==id){
                       bstop=false;
                       goods[key].num=1+parseInt(goods[key].num)
                       localStorage.infos=JSON.stringify(goods);
                   }
                }
                if(bstop){
                    good.num=1;
                    good.id=id;
                    goods.push(good);
                    localStorage.infos=JSON.stringify(goods);
                }

            }else{
                var goods=[];
                good.num=1;
                good.id=id
                goods.push(good)
                localStorage.infos=JSON.stringify(goods)
            }
        }
       
    })
}