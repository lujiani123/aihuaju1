$(function(){

// 鲜花分类开始
$(".additional_categories li").hover(function(){
    var index=$(this).index();
    // console.log(index)
    $(".sub_wrap").eq(index).addClass("active").siblings(".sub_wrap").removeClass("active")
})

// 鲜花分类结束


// 轮播图
function Banner(){}
        $.extend(Banner.prototype,{
        
            init : function(options){
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
            //    console.log(this.btn_list)
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
               this.ul = $("#banner ul");
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                // console.log(this.item_width)
               this.wrap = $("#banner");
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
           
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));

                this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
               
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                this.btn_list.eq(index).addClass("active")
                .siblings("span").removeClass("active");
            },
            autoPlay:function(){
                // 自动执行;
                // console.log(111)
                this.autoPlay_timer = setInterval(function(){
                    this.right_btn.triggerHandler("click");
                }.bind(this),3000)
//              console.log("自动播放")
            },
            stopPlay:function(){
                clearInterval(this.autoPlay_timer);
//              console.log("停止播放")
            }
        })
       

        var banner = new Banner();

        banner.init({
            item_list : "#banner li",
            btn_list : ".dots span" ,
            right_btn:".btn_right"


        })
        banner.autoPlay();

       
// 轮播图结束
       
// 限时活动开始
$("#goods_ac li").hover(function(){
    var index=$(this).index();
    $("#goods_ac li").eq(index).addClass("active").siblings("li").removeClass("active")
    $(".goods_a li").eq(index).addClass("active").siblings("li").removeClass("active")

})


$(".top1 li").hover(function(){
    // console.log(11)
    var index=$(this).index();
    // console.log(index)
    $(".top1 .div_textures").eq(index).removeClass("dp_n").siblings(".div_textures").addClass("dp_n")
    $(".top1 .div_text").eq(index).addClass("dp_n").siblings(".div_text").removeClass("dp_n")
},function(){
    var index=$(this).index();
    $(".top1 .div_textures").eq(index).addClass("dp_n").siblings(".div_textures").removeClass("dp_n")
    $(".top1 .div_text").eq(index).removeClass("dp_n").siblings(".div_text").addClass("dp_n")
})



// 1F为你精选鲜花
// 轮播图
function Banner(){}
        $.extend(Banner.prototype,{
        
            init : function(options){
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
            //    console.log(this.btn_list)
                this.ul = $(options.this_ul);
                this.wrap = $(options.this_wrap);
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
              
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                // console.log(this.item_width)
               
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
           
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));

                this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
                this.nowIndex = $(target).index();
                console.log(nowIndex)
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                this.btn_list.eq(index).addClass("active")
                .siblings("span").removeClass("active");
            },
            autoPlay:function(){
                // 自动执行;
                // console.log(111)
                this.autoPlay_timer = setInterval(function(){
                    clearInterval(this.autoPlay_timer);
                    this.right_btn.triggerHandler("click");
                }.bind(this),3000)
//              console.log("自动播放")
            },
            stopPlay:function(){
                clearInterval(this.autoPlay_timer);
//              console.log("停止播放")
            }
        })
       

        var banner = new Banner();

        banner.init({
            item_list : "#bests_banner li",
            btn_list : ".dot1 span" ,
            right_btn:".next",
            this_ul:"#bests_banner ul",
            this_wrap:"#bests_banner"


        })
        // banner.autoPlay();




$("#h3_right span").hover(function(){
    var index=$(this).index();
    $("#h3_right span").eq(index).addClass("active").siblings("span").removeClass("active")
    $("#floor_index1 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
    $(".r .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")


})


// 2F新品上架
function Banner(){}
        $.extend(Banner.prototype,{
        
            init : function(options){
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
            //    console.log(this.btn_list)
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
               this.ul = $("#new_banner ul");
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                // console.log(this.item_width)
               this.wrap = $("#new_banner");
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
           
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));

                this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
               
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                this.btn_list.eq(index).addClass("active")
                .siblings("span").removeClass("active");
            },
            autoPlay:function(){
                // 自动执行;
             
                this.autoPlay_timer = setInterval(function(){
                    this.right_btn.triggerHandler("click");
                }.bind(this),3000)
//              console.log("自动播放")
            },
            stopPlay:function(){
                clearInterval(this.autoPlay_timer);
//              console.log("停止播放")
            }
        })
       

        var banner = new Banner();

        banner.init({
            item_list : "#new_banner li",
            btn_list : ".dots2 span" ,
            right_btn:".next"


        })
        banner.autoPlay();


        $("#h3_right2 span").hover(function(){
            var index=$(this).index();
            $("#h3_right2 span").eq(index).addClass("active").siblings("span").removeClass("active")
            $("#floor_index2 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
            $("#good_2 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
        
        
        })
})


// 3F热卖·爆款鲜花
function Banner(){}
        $.extend(Banner.prototype,{
        
            init : function(options){
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
            //    console.log(this.btn_list)
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
               this.ul = $("#hots_banner ul");
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                // console.log(this.item_width)
               this.wrap = $("#hots_banner");
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
           
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));

                this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
               
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                this.btn_list.eq(index).addClass("active")
                .siblings("span").removeClass("active");
            },
            autoPlay:function(){
                // 自动执行;
             
                this.autoPlay_timer = setInterval(function(){
                    this.right_btn.triggerHandler("click");
                }.bind(this),3000)
//              console.log("自动播放")
            },
            stopPlay:function(){
                clearInterval(this.autoPlay_timer);
//              console.log("停止播放")
            }
        })
       

        var banner = new Banner();

        banner.init({
            item_list : "#hots_banner li",
            btn_list : ".dots3 span" ,
            right_btn:".next"


        })
        banner.autoPlay();

        $("#h3_right3 span").hover(function(){
            var index=$(this).index();
            $("#h3_right3 span").eq(index).addClass("active").siblings("span").removeClass("active")
            $("#goods_3 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
            $("#love1 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
        
        
        })

        // 4楼
        function Banner(){}
        $.extend(Banner.prototype,{
        
            init : function(options){
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
            //    console.log(this.btn_list)
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
               this.ul = $("#fashions_banner ul");
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                // console.log(this.item_width)
               this.wrap = $("#fashions_banner");
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
           
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));

                this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
               
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                this.btn_list.eq(index).addClass("active")
                .siblings("span").removeClass("active");
            },
            autoPlay:function(){
                // 自动执行;
             
                this.autoPlay_timer = setInterval(function(){
                    this.right_btn.triggerHandler("click");
                }.bind(this),3000)
//              console.log("自动播放")
            },
            stopPlay:function(){
                clearInterval(this.autoPlay_timer);
//              console.log("停止播放")
            }
        })
       

        var banner = new Banner();

        banner.init({
            item_list : "#fashions_banner li",
            btn_list : ".dots4 span" ,
            right_btn:".next"


        })
        banner.autoPlay();

        $("#h3_right4 span").hover(function(){
            var index=$(this).index();
            $("#h3_right4 span").eq(index).addClass("active").siblings("span").removeClass("active")
            $("#floor_index4 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
            $("#love2 .item").eq(index).removeClass("dp_n").siblings(".item").addClass("dp_n")
        
        
        })


        // 品牌
        $(".brand_img_small li").hover(function(){
            var index=$(this).index();
            $(".brand_img_big li").eq(index).addClass("active").siblings("li").removeClass("active")
        })

        $(".article_list1 li").hover(function(){
            var index=$(this).index();
            // console.log(index)
            var dataImg=$(".article_list1 a").eq(index).attr("data-img")
          $("#lazy").attr("src",dataImg)
        })
        $(".article_list2 li").hover(function(){
            var index=$(this).index();
            // console.log(index)
            var dataImg=$(".article_list2 a").eq(index).attr("data-img")
          $("#lazy2").attr("src",dataImg)
        })