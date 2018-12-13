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
// console.log(localStorage.infos==null) 
var count=0;
if(localStorage.infos==null){
      count=0;
}else{
    var infos=JSON.parse(localStorage.infos)
    count=JSON.parse(localStorage.infos).length
}
$(".count").html(count)
// 展开收起

$("#moreattr .sm-wrap").click(function(){
    if( $(".guilist .show").nextAll("li").hasClass("active")){
        $(".guilist .show").nextAll("li").removeClass("active")
        $("#moreattr .sm-wrap").html("更多搜索选项<lable>   ∧</lable>")
    }else{
        $("#moreattr .sm-wrap").html("收起<lable>   ∧</lable>")
        $(".guilist .show").nextAll("li").addClass("active")
    }
})



// 列表渲染
$.ajax("./php/flower/xianhua.json")
.then(function(res){
    // console.log(res)
    renderPage(res)
    refreshto()

})
 function renderPage(json){
     var html="";
     for(var i=0;i<json.length;i++){
         html+=`
         <li data-id=${json[i].id}>
            <div class="li_div_box">
                <div class="li_div_box_cur">
                
                        <img src=${json[i].img} width="220" height="220">
                  
                    <p>
                    <a href="#" target="_blank">${json[i].title}</a>
                        <span class="p" >¥<font >${json[i].price}</font>
                            <samp>¥${json[i].oldprice}</samp>
                        </span>
                    </p>
                    <p class="desc">
                        <a href="#" target="_blank">${json[i].name}</a>
                    </p>
                    <p class="li_bar">
                    <span class="news">新品</span>
                    <span class="bao">爆款</span>
                    <span class="salenum">${json[i].pay}人已付款</span>
                    <span class="span-comparison">
                            <em></em>加入对比
                    </span>
                    </p>
                </div>
            </div>
         </li>
         
         
         `
     }
     document.querySelector("#list_floor").innerHTML=html
 }


//  跳转详情页
function refreshto(){
    var oList=document.querySelector("#list_floor")
    oList.onclick=function(event){
        var e=event||window.event;
        var target=e.target||e.srcElement;
        var imglist=document.querySelectorAll("#list_floor img");
        var imgarr=Array.from(imglist)
        // console.log(imgarr)
        console.log(target)
        var liData=target.parentNode.parentNode.parentNode
        if(imgarr.indexOf(target)!=-1){
            cookie("id",liData.getAttribute("data-id"))
    
            location.href="detail.html"
        }
    }

    
}