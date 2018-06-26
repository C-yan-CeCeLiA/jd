$(document).ready(function(){
	/*当用户点击按钮时关闭广告*/
	$(".top-btn").click(function(){
		document.getElementById("top-img").innerHTML = ""
	})
	
	
	//miaosha
	$("#miaosha_pre").click(function() {
		alert(1);
		
	})
	
	
	
	
	
	$(".ms-box-fl").mouseover(function(){
		$(".ms-box-fl > a").show();
	}).mouseout(function(){
		$(".ms-box-fl > a").hide();
	});
	$(".album-item").mouseover(function(){
		$(".album-item ~ a").show();
	}).mouseout(function(){
		$(".album-item ~ a").hide();
	});
	$(".me ").mouseover(function(){
		var ul = $(".me > ul").eq(1);
		$("ul ~ a").show();
	}).mouseout(function(){
		$("ul ~ a").hide();
	});
/*所有的<>按钮的显示*/	
	$(".sub-btn").mouseover(function(){
		$(this).css({
			"color":"red"
		});
	}).mouseout(function(){
		$(this).css({
			"color":"black"
		})
	});
	
	$(".more-item").mouseover(function(){
		$(this).css({
			"border":"1px solid red"
		})
	}).mouseout(function(){
		$(this).css({
			"border":"1px solid #fff"
		})
	});
	
	
	/*购物车*/
	$(".shop-box").mouseover(function(){
		$(".shop-box-chird").show();
	}).mouseout(function(){
		$(".shop-box-chird").hide();
	});
	
	/*新人福利*/
	var color;
	$(".profit-ltk").mouseover(function(){
		 color = $(this).css("color");
		
		$(this).css({
			"background":"red",
			"color":"#fff",
		});
	}).mouseout(function(){
		$(this).css({
			"background":"#fff",
			"color":color,
		});
	});
	
	/*main-navigation  li*/
	$(".item").mouseenter(function(){
		$(this).css("background","#999999");
		
		
		$(this).children(".main-child").show();
		}).mouseleave(function(){
		$(this).css("background","none");
		$(this).children(".main-child").stop(false,true).hide();
	})
	/*main-navigation  li里面的a*/
	$(".item>a").mouseover(function(){
		$(this).css("color","#c81623")
	}).mouseout(function(){
		$(this).css("color","#fff")
	});
	/*nav导航条
	 *如果当期元素没有class并且当前元素的class！= “spacer”时
	 *把当前元素的背景色设置为白色
	 *获取当前元素的class名
	 *删除掉统一样式的classname（nav-js）
	 *$.trim(name)去掉首位空格
	 * */
	var name;
	$(".nav-fr_span").mouseover(function(){
		if($(this).attr("class") && $(this).attr("class") != "nav-fr_span"){
			$(this).css("background","#fff");
			name = $(this).attr("class");
			
			name = name.replace("nav-js", "");
			
			name = name.replace("nav-fr_span", "");
			name = $.trim(name);
			name = name + "-child";
			$("."+name).show();
		} 		
	}).mouseout(function(){
		$(this).css("background","#e3e4e5");
		$("."+name).stop(false,true).hide();
	});
	/*右边的 toolbar*/
	$(".toolbar-item").mouseover(function(){
		$(this).children(".item-child").stop(false,true).show();
	}).mouseout(function(){
		$(this).children(".item-child").stop(false,true).hide();
	});
	/*左边的 toolbar*/
	
	/* 排行榜*/
	$(".ranking-item").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(".ranking-goods").eq(index).show().siblings().hide();
		
	});
	/*登陆新闻条
	 * 选取新闻条里的除.news-more的所有子元素
	 * */
	
	$(".news-bar *").not(".news-more").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(".news-list").eq(index).show().siblings().hide();
	})
	var timer3 = null;
	
	var l = 0;
	var publicity = document.getElementById("publicity");
	var main2 = publicity.getElementsByClassName("w")[0].getElementsByClassName("main-2")[0];
	var content = main2.getElementsByClassName("content")[0];
	var content_ul = content.getElementsByClassName("content_ul")[0];
	var li = content_ul.getElementsByTagName("li");

	var timers = null;
	var ind_color =  $(".sup-ind-item").eq(0).css("background");
	timer3 = setInterval(main_2,3000)
	
	var pre = content.getElementsByClassName("sub-btn-pre")[0];
	var next =  content.getElementsByClassName("sub-btn-next")[0];
/*$("button.sub-btn-pre").click(function() {
		
		
		l = l-1;
		console.log("向前" + l)
	})
	$("button.sub-btn-pre").click(function() {
	
		l = l-1;
		console.log("向前" + l)
	})*/
	

	
	function main_2(){
		
		if(l<0){
			l = li.length-1;
		}else if(l > li.length-1){
			l = 0
		}
			
			console.log( "初始值"+l)
			$(".sup-ind-item").click(function(){
				l = $(this).index();
			})
			
			$(".sup-ind-item").eq(l).css("background","#db192a").siblings().css("background",ind_color);
			$(li[l]).addClass("list-active").siblings().removeClass("list-active");
		
			l++
			
	}
	$('.sub-btn-pre').unbind('click');
	$(".sub-btn-pre").bind('click',function() {})
	
	$('.sub-btn-next').unbind('click');
	$(".sub-btn-next").bind('click',function() {
	
	});
	
	main_2()

	//清除sub-btn默认事件
	var sub_btn = document.getElementsByClassName("sub-btn");
	for(var i = 0 ; i<sub_btn.length; i++){
		sub_btn[i].onclick = function(){
			return false;
		}
	}
	//当向前按钮被单击时；
	
	
	
	

	
	
	
	
	
	function seach_box (){
		if(i < $(lns).length){
			
			$(".seach-box").val(arr[i]);
				i++;
		}else{
				i = 0;
			}
	}
	
	/*name为要偏移的元素*/
	var left;
	
	/*function imgmove2(method,name,toward){
		name.method(function(){
		
		})
		*/
	
	function imgmove (name,num){
		
		name.mouseover(function(){
			left = $(this).css("left");
			left=  parseInt(left);
			
			$(this).stop(false,true).animate({
				"left" : (left+num)+"px"
			})
		}).mouseout(function(){
			$(this).stop(false,true).animate({
				"left" : left+"px"
			});
		})
	};
	
	

	
	imgmove($(".coupon-item").find("img"),10);
	
	imgmove($(".entery-live").siblings().find("img"),-10);
	imgmove($(".chn-js").find("img"),-10)
	imgmove($(".find-link >img"),-10)
/*秒杀倒计时*/
function showTime(hour){
		
		var nowtime = new Date();
		var year = nowtime.getFullYear();
		
		var month = nowtime.getMonth()+1;
		var day = nowtime.getDate();
		
		var loctTime = year+"/" +"/"+ month+"/" + day;
		
		var endtime = new Date(loctTime+",24:00:00");
		var lefttime = parseInt((endtime.getTime()-nowtime.getTime())/1000);
		var h = parseInt(lefttime/(60*60)%24);
		var d = parseInt(lefttime/(60)%60);
		var s = parseInt(lefttime%60);
		$(".ms-time-hour>span").html(lessten(h));
		$(".ms-time-m>span").html(lessten(d));
		$(".ms-time-s>span").html(lessten(s));
		var timer = setTimeout(showTime,500);
		
	}
		
	 showTime();
	 function lessten(name){
			if(name<10){
				name = "0" +name;
				return name
			}else{
				
				return name
			}
			
		};
		
		/*秒杀图片动画*/
		$(".sk-item-pic-lk>img").mouseover(function(){
			$(this).animate({"top":"-10px"})
		}).mouseout(function(){
			$(this).animate({
				"top":"0px"
			})
		});
		
		
//<! ----------搜索框热词---------------------------

		
		//获取关键字
	var arr =  new Array();
	var hotword = document.getElementById("hotword");
	var lns = hotword.getElementsByTagName("a");//获取热门搜索词
	$(lns).each(function(){
		var value = $(this).html();
		arr.push(value);//加入进数组
			
	})
	var i=0;
	//搜索框热词
	function seach_box (){
		if(i < $(lns).length){
			//$(".seach-box").attr("value",arr[i]);
			$(".seach-box").val(arr[i]);
				i++;
		}else{
				i = 0;
			}
	}
	var timer2 = null;
	timer2 = setInterval(seach_box,3000)
		
	
	
	$(".seach-box").focus(function(){
		
		$(this).val("");
			window.clearInterval(timer2)
	
	}).blur(function(){
		//$(this).val("平板电脑");
		timer2 = setInterval(seach_box,3000)
		
	})		
		
	//<!--------------------搜索框热词end----------------	
	
	
		
		
	
		
	function tool_appear (element,offset){
		var soTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(soTop >= offset){
			element.fadeIn(1000);
		}else{
			element.fadeOut(1000);}
	};
	tool_appear ($(".toolbar-l"),1645);
	tool_appear ($(".flex_search "),740)
	window.onscroll = function(){
		tool_appear ($(".toolbar-l"),1645)
		tool_appear ($(".flex_search "),740)
	}

	var timer = null;
	function toolMove(element,target,ispendnum){
		element.click(function(){
			timer = setInterval(function(){					
			var sotop =$(document).scrollTop();
					//当偏移量小于或等于目标的值时
			var	offset ;	
			if( sotop < target ){
				offset = target - sotop  ;
				var ispeed = Math.ceil(offset/ispendnum);
					console.log("偏移"+offset+"目标值"+target + "初始值" +$(document).scrollTop()+"速度"+ispeed);
				}else{
					offset =  sotop - target;
					var ispeed = Math.floor(-offset/ispendnum);
					console.log("大于速度"+ispeed);
				}
					//计算速度
					
					
					
			$(document).scrollTop(sotop + ispeed)	
			 istop = true
			 console.log("当前滚动条的位置"+sotop);
			console.log("这是目标"+target)
					 //到达目标点停止
					console.log(sotop == target)
					if(sotop == target){
						window.clearInterval(timer)
						
					}
					
				},30)				
			});
		}

		
	
	
			
	toolMove($(".list-wrap-l").find("li").eq(0),1800,8);
	toolMove($(".list-wrap-l").find("li").eq(1),2600,8);
	toolMove($(".list-wrap-l").find("li").eq(2),3300,8);
	toolMove($(".list-wrap-l").find("li").eq(3),3800,8);
	toolMove($(".list-wrap-l").find("li").eq(4),4300,8);
	toolMove($(".list-wrap-l").find("li").eq(5),5100,8);
	toolMove($(".list-wrap-l").find("li").eq(6),5600,8);
	toolMove($(".list-wrap-l").find("li").eq(7),6100,8);
	toolMove($(".list-wrap-l").find("li").eq(8),6700,8);
	toolMove($(".list-wrap-l").find("li").eq(9),7300,8);
	toolMove($(".list-wrap-l").find("li").eq(10),8100,8);
	toolMove($(".list-wrap-l").find("li").eq(11),0,8);
	var bgc ;
	$(".list-wrap-l > li").mouseover(function(){
		bgc = $(this).css("background");
		$(this).css("background","#c81623").siblings().css("background",bgc);
		
	}).mouseout(function(){
		$(this).css("background",bgc);
	})
	
	
		
})		



