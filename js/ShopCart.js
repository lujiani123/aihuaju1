$.ajax("./php/flower/xianhua.json")
.then(function(res){
    var infos=JSON.parse(localStorage.infos)
    console.log(infos)
    renderPage(res)
    choice()
    goodNum()
    
})

function renderPage(json){
    console.log(json)
    var html="";
    var infos=JSON.parse(localStorage.infos)
    for(var i=0;i<json.length;i++){
        if(infos){
            for(var k in infos){
                if(json[i].id==infos[k].id){
                    html+=`
                        <ul class="clearfix">
                            <li class="J_SelectAll1">
                               
                                <img src="http://ahj.cm/h/templates/hua/images/checked.jpg" style="display: none;" width="16" height="16" style="" class="checked_checked"/>
                                <input type="checkbox" class="singcartg" value="0|1035696" />
                                
                                <a href="" target="blank">
                                    <img src="${json[i].img}" width="86" height="86">
                                </a>

                            </li>
                            <li class="td-inner">
                                <p class="goods-name">${json[i].title}</p>
                                <p class="pcc">鲜花支数：${json[1].num}支</p>
                                <p class="pcc">花材: ${json[1].name}</p>
                            </li>
                            <li class="td-addcai">
                                <p class="pcc" style="margin-top:3px;"><br></p>
                            </li>
                            <li class="td-price" style="line-height:20px;padding-top:50px;">
                                ¥${json[i].price}
                            </li>
                            <li class="td-price yzhecart">
                                
                            </li>
                            <li class="td-order-num" style="margin-top:10px">
                                <span class="goods-num-jian fl">-</span>
                                <input readonly="" type="text" class="goods-num fl" id="goods-num" value=${infos[k].num}>
                                <span class="goods-num-jia fl" >+</span>
                            </li>
                            <li class="td-price" style="line-height:20px;padding-top:50px;">
                                <b> ¥${json[i].price*infos[k].num}</b>
                            </li>
                            <li class="th-op" style="line-height:20px;padding-top:50px;"><a href="#">删除</a>
                            </li>
                        </ul>
                    
                    
                    
                    
                    `
                }
            }
        }
    }
    document.querySelector("#diecartshow").innerHTML=html

}

// 选择
function choice(){
    $(".singcartg").click(function(e){
      
         $(this).css({
             "display":"none"
         })
         $(this).prev().css({
            "display":"block"

         })
           
        // }
    })
    $(".checked_checked").click(function(e){
     
         $(this).css({
             "display":"none"
         })
         $(this).next().css({
            "display":"block"

         })
           
        // }
    })
    $("#J_SelectAll2_checkbox").click(function(){
        $(".singcartg").css({
            "display":"none"
        })
        $(".checked_checked").css({
            "display":"block"
        })
        $("#J_SelectAll2_checkbox").css({
            "display":"none"
        })
        $("#J_SelectAll2_img").css({
            "display":"block"
        })
    })
    $("#J_SelectAll2_img").click(function(){
        $(".singcartg").css({
            "display":"block"
        })
        $(".checked_checked").css({
            "display":"none"
        }).attr("checked","dischecked")
        $("#J_SelectAll2_checkbox").css({
            "display":"block"
        })
        $("#J_SelectAll2_img").css({
            "display":"none"
        })
    })
    $("#J_SelectAll1_checkbox").click(function(){
        $(".singcartg").css({
            "display":"none"
        })
        $(".checked_checked").css({
            "display":"block"
        })
        $("#J_SelectAll1_checkbox").css({
            "display":"none"
        })
        $("#J_SelectAll1_img").css({
            "display":"block"
        })
    })
    $("#J_SelectAll1_img").click(function(){
        $(".singcartg").css({
            "display":"block"
        })
        $(".checked_checked").css({
            "display":"none"
        }).attr("checked","dischecked")
        $("#J_SelectAll1_checkbox").css({
            "display":"block"
        })
        $("#J_SelectAll1_img").css({
            "display":"none"
        })
    })
}

// 数量
// 购买数量
function goodNum(){
//    console.log($(".goods-num"))
$(".goods-num-jian").click(function(e){

    var good_num=$(this).next().val()    
    if(good_num==1) return false;
    good_num--
    $(this).next().val(good_num)
    for(var k in infos){

    }
    
})
$(".goods-num-jia").click(function(){
    var good_num=$(this).prev().val()
    good_num++
    $(this).prev().val(good_num)

    
})

  
}