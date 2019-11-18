$.ajax({
					type: "get",
					url: "http://localhost/w/website/bannerList",
					async: true,
					success: function(res) {
						var imgs=[];
						var urls=[];
						console.log(res);
						$.each(res.data,function(index,item){
							imgs.push(item.img);
							urls.push(item.linkUrl)
						});
						var item_img=$("#myCarousel .carousel-inner .item img");
						item_img.each(function(i) {
					$(this)[0].src = imgs[i];
					$(this).wrap("<a href='"+urls[i]+"'></a>");
				})
				console.log(item_img[0])
			}
		});