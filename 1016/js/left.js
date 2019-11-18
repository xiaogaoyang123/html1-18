$.ajax({
			type: "get",
			url: "http://127.0.0.1/w/website/findGoodsTypeList",
			async: true,
			success: function(res) {
				//console.log(res.data);
				var shuju = res.data;
				var nav = $(".left0 ul");
				$.each(shuju, function(index, item) {
					console.log(item.name);
					var str = `<li class='goodsType'> <img src = '${item.icon}'/>${item.name} </li>`
					nav.append(str)
				});
			}
		});