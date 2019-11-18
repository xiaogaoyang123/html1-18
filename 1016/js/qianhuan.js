yy("nav");
//导航获取
$.ajax({
	type: "get",
	url: "http://127.0.0.1/w/website/findGoodsTypeList",
	async: true,
	success: function(res) {
		//				console.log(res.data);
		var shuju = res.data;
		var nav = $(".nav0 ul");
		$.each(shuju, function(index, item) {
			console.log(item.name);
			var str = `<li class='goodsType'> <img src = '${item.icon}'/>${item.name} </li>`
			nav.append(str)
		});
	}
});
//导航接口调用

$(".nav0").on("click", ".goodsType", function() {
	var x = $(this).index();
	var text = $(".goodsType").eq(x).text();
	//			console.log(text);
	getGoods(text, 1);

	fenye(text);
});
//分页

function fenye(sp) {
	$("#page").Page({
		totalPages: 20, //分页总数
		liNums: 7, //分页的数字按钮数(建议取奇数)
		activeClass: 'activP', //active 类样式定义
		callBack: function(page) {
			//console.log(page)
			getGoods(sp, page)
		}
	});
}

//		fenye("新品")

//搜索
function sousuo0() {
	var text = $("#chazhao")[0].value;
	getGoods(text, 1);
	fenye(text);
}
$(".sousuo").click(function() {
	sousuo0();
})
document.onkeydown = function(event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode == 13) {
		sousuo0()
	}
}