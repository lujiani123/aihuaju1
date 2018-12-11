$.ajax("./php/flower/xianhua.json")
.then(function(res){
    console.log(res)
    renderPage1(res)
    renderPage2(res)
    renderPage3(res)
    lazyLoading()
    addHua()
    ChoiceStyle()
    goodNum()
    Magnifier()
    btnBanner()
})

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
function renderPage2(json){
    if(cookie("id")){
        var id=cookie("id")
        var html="";
        for(var i=0;i<json.length;i++){
            if(json[i].id==id){
                html+=`
                <div class="goods_info_img">
                <div class="Magnifier_shop">
                <img  class="good_tu" src="${json[i].img}" width="418" height="418"  rel=${json[i].img} alt="">
                <div id="Magnifier_shop_S">
				</div>
				<div class="Magnifier_shop_B">
					<img src="" />
				</div>
                </div>
                <div class="img_list">
                    <ul id="thumblist" class="clearfix">
                    </ul>    
                </div>
                </div>
                <div class="goods_info_desc">
                <h1 >
                ${json[i].title}      
                    <span >${json[i].name}    </span>
                </h1>
                <p class="huayu">
                        你是我一生的追求        
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
                        <div class="clearfix"></div>
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
            <div class="good_div clearfix">
                <div class="price_name fl" style="margin-top:10px;">增加搭配</div>
                <div class="price_right fl">
                        <ul class="add_huacai" id="add_huacai">

                           <li><img src="http://ahj.cm/data/upload//shop/common/05376503176949780.jpg" width="55" title="红玫瑰" height="55"></li>
                            <li><img src="http://ahj.cm/data/upload//shop/common/05376504002786256.jpg" width="55" title="黄百合" height="55"></li>
                            <li><img src="http://ahj.cm/data/upload//shop/common/05376504334705548.jpg" width="55" title="粉康乃馨" height="55"></li>
                            <li><img src="http://ahj.cm/data/upload//shop/common/05376361044471514.jpg" width="55" title="小熊公仔" height="55"></li>
                            <li><img src="http://ahj.cm/data/upload//shop/common/05675966685997187.jpg" width="55" title="花瓶" height="55"></li>
                        </ul>
                        <div class="huacai_box">
                                <div style="padding-left:8px;">玫瑰</div>
                                <div class="huacai_box_close">X</div>
                                <div class="huacai_list">
                                    <ul>
                                        <li>
                                            <a >
                                            <img src="http://ahj.cm/data/upload//shop/common/05376503176949780.jpg" width="55" height="55"></a>
                                            <div>红玫瑰</div>
                                            <div>
                                                <span id="price_9">10.00</span>元/<span id="num_9">1</span>枝  </div>
                                            <div>
                                            <samp style="margin-left: 7px;" >-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input9">
                                                    <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a>添加</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a>
                                            <img src="http://ahj.cm/data/upload//shop/common/05376503430550914.jpg" width="55" height="55"></a>
                                            <div>白玫瑰</div>
                                            <div>
                                                <span id="price_16">10.00</span>元/<span id="num_16">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input16">
                                                <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a>添加</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a>
                                            <img src="http://ahj.cm/data/upload//shop/common/05376503326791118.jpg" width="55" height="55"></a>
                                            <div>香槟玫瑰</div>
                                            <div>
                                                <span id="price_10">10.00</span>元/<span id="num_10">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;" >-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input10"> 
                                                <samp>+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a >添加</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a >
                                            <img src="http://ahj.cm/data/upload//shop/common/05376503506779331.jpg" width="55" height="55"></a>
                                            <div>蓝玫瑰</div>
                                            <div>
                                                <span id="price_17">15.00</span>元/<span id="num_17">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;" >-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input17">
                                                    <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a >添加</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a >
                                            <img src="http://ahj.cm/data/upload//shop/common/05376503620358116.jpg" width="55" height="55"></a>
                                            <div>粉玫瑰</div>
                                            <div>
                                                <span id="price_19">10.00</span>元/<span id="num_19">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input19"> 
                                                <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a>添加</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="huacai_box">
                                <div style="padding-left:8px;">百合</div>
                                <div class="huacai_box_close">X</div>
                                <div class="huacai_list">
                                    <ul>
                                        <li>
                                            <a>
                                            <img src="http://ahj.cm/data/upload//shop/common/05376504002786256.jpg" width="55" height="55"></a>
                                            <div>黄百合</div>
                                            <div>
                                                <span id="price_22">20.00</span>元/<span id="num_22">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input22"> 
                                                <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a>添加</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a >
                                            <img src="http://ahj.cm/data/upload//shop/common/05376504075622487.jpg" width="55" height="55">
                                            </a>
                                            <div>白百合</div>
                                            <div>
                                                <span id="price_25">20.00</span>元/<span id="num_25">1</span>枝                                               
                                            </div>
                                            <div>
                                            <samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input25">
                                                    <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a >添加</a>
                                            </div>
                                        </li>
                                            <li>
                                            <a >
                                            <img src="http://ahj.cm/data/upload//shop/common/05376503923060439.jpg" width="55" height="55"></a>
                                            <div>粉百合</div>
                                            <div>
                                                <span id="price_21">20.00</span>元/<span id="num_21">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input21"> 
                                                <samp>+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn"><a>添加</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="huacai_box">
                                <div style="padding-left:8px;">康乃馨</div>
                                <div class="huacai_box_close">X</div>
                                <div class="huacai_list">
                                    <ul>
                                        <li>
                                            <a>
                                            <img src="http://ahj.cm/data/upload//shop/common/05376504334705548.jpg" width="55" height="55">
                                            </a>
                                            <div>粉康乃馨</div>
                                            <div>
                                                <span id="price_23">10.00</span>元/<span id="num_23">1</span>枝                                                </div>
                                            <div><samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input23"> 
                                                <samp>+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a >添加</a>
                                            </div>
                                        </li>
                                            <li>
                                            <a >
                                            <img src="http://ahj.cm/data/upload//shop/common/05376504253567549.jpg" width="55" height="55">
                                            </a>
                                            <div>红康乃馨</div>
                                            <div>
                                                <span id="price_14">10.00</span>元/<span id="num_14">1</span>支                                                </div>
                                            <div>
                                            <samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input14">
                                                    <samp>+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn">
                                            <a >添加</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="huacai_box">
                                <div style="padding-left:8px;">公仔</div>
                                <div class="huacai_box_close">X</div>
                                <div class="huacai_list">
                                    <ul>
                                        <li>
                                            <a href="javascript:">
                                            <img src="http://ahj.cm/data/upload//shop/common/05376361044471514.jpg" width="55" height="55">
                                            </a>
                                            <div>小熊公仔</div>
                                            <div>
                                                <span id="price_13">10.00</span>元/<span id="num_13">1</span>个                                                </div>
                                            <div><samp style="margin-left: 7px;">-</samp>
                                                <input type="text" value="1" class="huacai_input" id="huacai_input13"> 
                                                <samp >+</samp>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="huacai_btn"><a href="javascript:doxuanpei(13,'小熊公仔',10.00,1,'个')">添加</a>
                                            </div>
                                        </li>
                                     </ul>
                                </div>
                            </div>
                            <div class="huacai_box">
                            <div style="padding-left:8px;">花瓶</div>
                            <div class="huacai_box_close">X</div>
                            <div class="huacai_list">
                                <ul>
                                    <li>
                                        <a >
                                             <img src="http://ahj.cm/data/upload//shop/common/05675966685997187.jpg" width="55" height="55">
                                        </a>
                                        <div>花瓶</div>
                                        <div>
                                            <span id="price_34">35.00</span>元/<span id="num_34">1</span>个                                                </div>
                                        <div>
                                        <samp style="margin-left: 7px;">-</samp>
                                            <input type="text" value="1" class="huacai_input" id="huacai_input34"> 
                                            <samp>+</samp>
                                        </div
                                        <div class="huacai_btn"><a>添加</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
               </div>
               <div class="good_div">
               <div class="price_name fl">购买数量</div>
               <div class="price_right fl">
               <div class="goods_num">
                    <span class="reduce" id="reduce">-</span>
                    <input id="good_num"  value="1" class="good_num" type="text"/>
                    <span class="add" id="add">+</span>
   
               </div>
               <div style="height:auto; overflow:hidden; width:445px;">
                    <a class="btn_add_cart" id="btn_add_cart">
                    <em></em>
                    加入购物车
                    </a>
                    <a class="btn_add_cart_group" id="yes_store_buy">立即购买</a>
                     </div>
               </div>
               
               
               
               </div>
           
            </div>
            <div class="goods_hot fr">
        <div class="hot_right">
            <div class="hot_title">
                <span style="margin-top:2px">热门推荐</span>
            </div>
            <div class="hot_list" id="scrollstroe1" style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; height: 573px;">
                <ul style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; height: 4011px; top: -573px;"><li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/07/1_05530823049121212_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥269.00</a>
                            </p>
                        </li><li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/04/1_05459256343825522_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥288.00</a>
                            </p>
                        </li><li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2016/11/1_05338272865004333_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥330.00</a>
                            </p>
                        </li>
                                            <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05435813030694076_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥259.00</a>
                            </p>
                        </li>
                                            <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05440268714951412_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥360.00</a>
                            </p>
                        </li>
                                            <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/10/1_05612209554345168_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥359.00</a>
                            </p>
                        </li>
                          <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/04/1_05451408124530351_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥226.00</a>
                            </p>
                        </li>
                        <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/06/1_05517932466204118_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥325.00</a>
                            </p>
                        </li>
                                            <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05435822807948425_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥348.00</a>
                            </p>
                        </li>
                         <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2016/12/1_05355659049872363_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥360.00</a>
                            </p>
                        </li>
                        <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05439512898675033_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥286.00</a>
                            </p>
                        </li>
                        <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2018/06/1_05834385211527689_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥179.00</a>
                            </p>
                        </li>
                        <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2018/07/1_05853070095504617_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="/goods-12773.html">￥239.00</a>
                            </p>
                        </li>
                         <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05430712367218803_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥3520.00</a>
                            </p>
                        </li>
                                            <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/01/1_05370328829018113_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#l">￥289.00</a>
                            </p>
                        </li>
                         <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/07/1_05530823049121212_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥269.00</a>
                            </p>
                        </li>
                        <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/04/1_05459256343825522_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥288.00</a>
                            </p>
                        </li>
                                            <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2016/11/1_05338272865004333_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥330.00</a>
                            </p>
                        </li>
                                    <li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05435813030694076_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥259.00</a>
                            </p>
                        </li><li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/03/1_05440268714951412_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#">￥360.00</a>
                            </p>
                        </li><li style="overflow: hidden; float: none; width: 191px; height: 191px;">
                            <a href="#">
                                <img src="http://ahj.cm/data/upload/g/1/2017/10/1_05612209554345168_220.jpg" width="150" height="150"></a>
                            <p>
                                <a href="#l">￥359.00</a>
                            </p>
                        </li></ul>
            </div>
            <div class="hot_down">
                <span class="top fl" id="nextbtn1"></span>
                <span class="down fl" id="prevbtn1"></span>
            </div>
        </div>
    </div>
           
    </div>
     <div class="details" >
     <img src="http://ahj.cm/h/templates/hua/images/tisa.jpg" style="width:100%"/>
     <img src="http://ahj.cm/data/upload//shop/textures/05442136963364804.gif" style="width:100%"/>
     </div>    
     <div class="goodsDetail">
            <div class="brand">
               <h2> 品牌介绍</h2>
               <img src="../images/voi.png" style="width:100%"/>
               <img src="http://www.aihuaju.com/static/images/zgxhsc/chaomo_pc.jpg" style="width:100%"/>
               <img src="http://www.aihuaju.com/static/images/zgxhsc/chaonv_pc.jpg" style="width:100%"/>
     
            </div>
            <div class="goods_show">
            <h2> 商品展示IMAGE</h2>
            <div class="florist-wrapper">
            <div class="left">
                <div class="florist-face">
                    <img src="http://ahj.cm/data/upload//shop/florist/05872285634846669.jpg" alt="Crazy J" title="Crazy J">
                </div>
                <p class="florist-store" title="重庆交通大学店">重庆交通大学店</p>
            </div>
            <div class="right">
                <h2 class="florist-name">本作品原创花艺师：<b>Crazy J</b></h2>
                <p class="florist-brief">与花相知6年，钟爱清新自然的韩系花束，于昆明系统学习花艺知识，作品风格百变，个性突出，不走寻常路。</p>
               <h3 class="florist-honor">个人荣誉：</h3>
                    <ul class="florist-honor-list">                                                     
                    <li>重庆第八届全国园博会花艺展参赛
                    </li>
                    <li>曾设计重庆西部奥特莱特庆典大堂插花
                    </li>
                    <li>爱花居高级花艺师</li>
                    </ul>
                <h3 class="florist-tells">花艺师寄语：</h3>
                <p class="florist-tells-content">情似花斑斓，爱似花娇艳。</p>
            </div>
          </div>
        </div>
        <ul class="introduce_img">
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799088358444_1280.jpg" style="width:100%"/></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799088414791_1280.jpg" style="width:100% ;margin-top:-5px;""/></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799091831610_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799089457060_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799089379691_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799089379691_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799089556316_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/08/1_05886799094119672_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/06/1_05815323988575515_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/06/1_05815324010947464_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/06/1_05815324029528269_1280.jpg" style="width:100%" /></li>
        <li><img src="http://ahj.cm/data/upload/a/2018/06/1_05815324052556371_1280.jpg" style="width:100%" /></li>
        
        </ul>
     </div>      
                
                `
            }
    }
    document.querySelector(".goods_info").innerHTML=html   
}
}

// 小图
function renderPage3(json){
    if(cookie("id")){
        var id=cookie("id")
        var html="";
        for(var i=0;i<json.length;i++){
            if(json[i].id==id){
                var json1=json[i].smallimg
             
                for(var i=0;i<json1.length;i++){
                html+=`
            
                <li class="">
                    <img mid="${json1[i].img}" big="${json1[i].img}" src=${json1[i].img} width="68" height="68">
                    <em></em>
                </li>
                `
            }
        }
    }
    document.querySelector("#thumblist").innerHTML=html   
}
}

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
function goodNum(){
    var good_num=Number($("#good_num").val())
    $("#reduce").click(function(){
        
        if(good_num==1) return false;
        good_num--
        $("#good_num").val(good_num)
        
    })
    $("#add").click(function(){
        good_num++
        $("#good_num").val(good_num)

        
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
            $(".Magnifier_shop_B").css({ "transform": "scale(1,1)", "left": "440px" })
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
    