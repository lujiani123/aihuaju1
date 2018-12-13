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

$.ajax("./php/flower/xianhua.json")
.then(function(res){
    var infos=JSON.parse(localStorage.infos)
    // console.log(infos)
    clearGood()
    renderPage(res)
    choice()
    goodNum()
    addCount()
    addPrice(res)
    
})

function renderPage(json){
    // console.log(json)
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
                                <span class="goods-num-jian fl" >-</span>
                                <input readonly="" type="text" class="goods-num fl" id="goods-num" value=${infos[k].num}>
                                <span class="goods-num-jia fl"  >+</span>
                            </li>
                            <li class="td-price" style="line-height:20px;padding-top:50px;">
                                <b> ¥${json[i].price*infos[k].num}</b>
                            </li>
                            <li class="th-op" style="line-height:20px;padding-top:50px;">
                                <a href="#" id="clear_good" data-id=${json[i].id} clasa="clear">删除</a>
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
//    console.log($(".goods-num"))、
// console.log(localStorage.infos)
var good=JSON.parse(localStorage.infos)
// console.log(good)
for(var i=0;i<good.length;i++){

}
$(".goods-num-jian").click(function(e){
    console.log($(this))
    var id=$(this).attr("data-id")
    console.log(id)
    var good_num=$(this).next().val()    
    if(good_num==1) return false;
    good_num--
    $(this).next().val(good_num)
 
    
})
$(".goods-num-jia").click(function(){
    var good_num=$(this).prev().val()
    good_num++
    $(this).prev().val(good_num)

    
})

  
}
// 删除
function clearGood(){
   
    $("#diecartshow").on("click","#clear_good",clearThis)
   
}
function clearThis(){

    var id=$(this).attr("data-id")
    var infos=JSON.parse(localStorage.infos)
    var goods=[]
    for(var i=0;i<infos.length;i++){
        goods.push(infos[i])
    }
    console.log(id)
    for(var j=0;j<goods.length;j++){
        if(goods[j].id===id){
            goods.splice(j,1)
        }
    }
    localStorage.infos=JSON.stringify(goods);
    location.reload()
}

// 清空购物车

$("#clear").click(function(){
    localStorage.clear()
})

// 共多少件商品
function addCount(){
    // console.log()
    var count=JSON.parse(localStorage.infos).length
    $("#addcount").html(count)
}

// 总计价钱
function addPrice(json){
   var infos=JSON.parse(localStorage.infos);
//    console.log(json)
//    console.log(infos)
   var count=0;
   var arr=[]
   for(var i=0; i<json.length;i++){
       for(var k=0;k<infos.length;k++){
           if(json[i].id===infos[k].id){
            // console.log(json[i].price,infos[k].num)
           arr.push(json[i].price*infos[k].num)

            // console.log(json[i].price*infos[k].num)
           }
         
       }

   }
//    console.log(arr)
   for(var j=0;j<arr.length;j++){
   count+=Number(arr[j])
   }
  $(".sun_price").html("￥"+count)
}