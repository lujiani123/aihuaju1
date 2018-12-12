

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