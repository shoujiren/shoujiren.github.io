
var soData = 
{
	search_lisr : [
	{
		"name":"百度",
		"action":"http://www.baidu.com/s",
		"para":{
			"name":"word",
			"other":[]
		},
		"web_url":"http://www.baidu.com/",
		"value":"百度一下~~"
	},
	{
		"name":"Google",
		"action":"http://google.allsearch.vip/",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"http://g.findll.com/",
		"web_url6":"https://muzhiso.wallpai.com/",
		"web_url7":"http://g.findll.com/search",
		"web_url2":"http://www.guge.tw/",
		"web_url3":"http://g.findll.com/",
		"web_url4":"https://www.laiguge.net/",
		"web_url5":"https://aigg.info/",
		"value":"谷歌搜索"
	},
	{
		"name":"必应",
		"action":"http://cn.bing.com/search",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"http://cn.bing.com/",
		"value":"有求必应！"
	},
	{
		"name":"搜狗",
		"action":"https://www.sogou.com/web",
		"para":{
			"name":"query",
			"other":[{
				"key":"ie",
				"value":"utf8"
			}]
		},
		"web_url":"https://www.sogou.com/",
		"value":"Sogou~~"
	},
	{
		"name":"知乎",
		"action":"https://www.zhihu.com/search",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"https://www.zhihu.com/",
		"value":"网络问答社区"
	},
	{
		"name":"github",
		"action":"https://github.com/search",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"https://github.com/",
		"value":"github"
	},
	{
		"name":"微信",
		"action":"http://weixin.sogou.com/weixin",
		"para":{
			"name":"query",
			"other":[{
				"key":"type",
				"value":"2"
			},
			{
				"key":"ie",
				"value":"utf8"
			}]
		},
		"web_url":"http://weixin.sogou.com/",
		"value":"搜索微信文章~~"
	},
	{
		"name":"豆瓣",
		"action":"https://www.douban.com/search",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"https://douban.com/",
		"value":"豆瓣电影、图书~~"
	},
	{
		"name":"京东",
		"action":"http://search.jd.com/Search",
		"para":{
			"name":"keyword",
			"other":[{
				"key":"enc",
				"value":"UTF-8"
			}]
		},
		"web_url":"http://www.jd.com/",
		"value":"京东"
	},
	{
		"name":"淘宝",
		"action":"https://s.taobao.com/search",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"http://www.taobao.com/",
		"value":"淘宝"
	},
	{
		"name":"天猫",
		"action":"https://list.tmall.com/search_product.htm",
		"para":{
			"name":"q",
			"other":[]
		},
		"web_url":"http://www.tmall.com/",
		"value":"Tmall"
	},
	{
		"name":"高德",
		"action":"http://ditu.amap.com/search",
		"para":{
			"name":"query",
			"other":[]
		},
		"web_url":"http://ditu.amap.com/",
		"value":"高德地图"
	},
	{
		"name":"影视",
		"action":"http://v.baidu.com/v",
		"para":{
			"name":"word",
			"other":[{
				"key":"fr",
				"value":"video"
			},{
				"key":"ie",
				"value":"utf-8"
			}]
		},
		"web_url":"http://hao123.com/",
		"value":"hao123影视~~"
	}
	]
}

// 搜索切换
var searchData = soData["search_lisr"];
var searchHtml = "";
for(var i = 0; i < searchData.length; i++){
	searchHtml += "<li data-num="+i+">"+searchData[i]["name"]+"</li>";
}
$(".search .gloup").html(searchHtml);

$("body").on("click",".search .gloup li",function(){
	searchTabFn($(this).data("num"));
})

searchTabFn(0)
function searchTabFn(num){
	$(".search .gloup li").removeClass("active")
	$(".search .gloup li:eq("+num+")").addClass("active");
	$(".search .input form").attr("action",searchData[num]["action"]);

	$(".search .input .search_input").attr("name",searchData[num]["para"]["name"]);
	$(".search .input .search_input").attr("placeholder",searchData[num]["value"]);

	if(searchData[num]["para"]["other"].length > 0){

		var input_html = "";
		for(var i = 0; i < searchData[num]["para"]["other"].length; i++){
			input_html += '<input type="hidden" class="hidden_input other_input" name="'+searchData[num]["para"]["other"][i]["key"]+'" value="'+searchData[num]["para"]["other"][i]["value"]+'">';
		}
		$(".search .input form").append(input_html);

	}else{
		$('.other_input').remove();
	}
}

// 导航切换
navTabFn(0)
function navTabFn(num){
	$(".plate_menu li").removeClass("active");
	$(".plate_menu li:eq("+num+")").addClass("active");
	$(".plate_conn li").removeClass("active");
	$(".plate_conn li:eq("+num+")").addClass("active");
}
$("body").on("click",".plate_menu li",function(){
	navTabFn($(this).data("num"));
})
