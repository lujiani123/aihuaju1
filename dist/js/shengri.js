
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
// 生日鲜花
$.ajax("./php/birthday/birthday_floor.json")
.then(function(res){
    console.log(res)
    renderPage1(res)
})
function renderPage1(json){
    var html="";
    for(var i=0;i<json.length;i++){
        html+=`
        <div class="floor_list">
            <a href="#" class="pic">
                <img src=${json[i].img} alt="">
            </a>
            <a href="#" class="name">${json[i].title}</a>
            <p class="wood">${json[i].name}</p>
            <div class="goumai_box">
                <div class="price">
                    <i>¥</i>
                    <span>${json[i].price}</span>
                </div>
                <a href="#" class="buy">立即抢购 &gt;</a>
            </div> 
        </div> 
        `
    }
    document.querySelector("#floor_warp").innerHTML=html
}


// 生日蛋糕
$.ajax("./php/birthday/birthday_cake.json")
.then(function(res){
    console.log(res)
    renderPage2(res)
})
function renderPage2(json){
    var html="";
    for(var i=0;i<json.length;i++){
        html+=`
        <div class="floor_list">
            <a href="#" class="pic">
                <img src=${json[i].img} alt="">
            </a>
            <a href="#" class="name">${json[i].title}</a>
            <p class="wood">${json[i].name}</p>
            <div class="goumai_box">
                <div class="price">
                    <i>¥</i>
                    <span>${json[i].price}</span>
                </div>
                <a href="#" class="buy">立即抢购 &gt;</a>
            </div> 
        </div> 
        `
    }
    document.querySelector("#gaogao_warp").innerHTML=html
}


// 生日礼物
$.ajax("./php/birthday/birthday_gift.json")
.then(function(res){
    console.log(res)
    renderPage3(res)
})
function renderPage3(json){
    var html="";
    for(var i=0;i<json.length;i++){
        html+=`
        <div class="floor_list">
            <a href="#" class="pic">
                <img src=${json[i].img} alt="">
            </a>
            <a href="#" class="name">${json[i].title}</a>
            <p class="wood">${json[i].name}</p>
            <div class="goumai_box">
                <div class="price">
                    <i>¥</i>
                    <span>${json[i].price}</span>
                </div>
                <a href="#" class="buy">立即抢购 &gt;</a>
            </div> 
        </div> 
        `
    }
    document.querySelector("#liwu_warp").innerHTML=html
}