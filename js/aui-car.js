$(function(){
	// 数量减
	$(".minus").click(function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) - 1);
		if (t.text() <= 1) {
			t.text(1);
		}
		TotalPrice();
	});
	// 数量加
	$(".plus").click(function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) + 1);
		if (t.text() <= 1) {
			t.text(1);
		}
		TotalPrice();
	});
	/******------------分割线-----------------******/
    //计算
    function TotalPrice() {
        var num = parseFloat($(".price").text()); //得到商品的数量
        var price = parseFloat($(".num").text()); //得到商品的单价
        var total = price * num; //计算单个商品的总价
        $(".ShopTotal").text(total); //计算该店铺的总价
        $("#AllTotal").text(total); //输出全部总价
    }
    //提交订单的信息到后台文件以保存
	$(".settlement").on('click',function () {
		var num = parseFloat($(".num").text()); //得到商品的数量
		var allprice = parseFloat($("#AllTotal").text());  //全部总价
		// console.log(target);
		$.ajax({
			type: "post",
			url: 'receive-car-session.php',
			async: false,
			data: JSON.stringify({
				pi: allprice,
				productnum: num
			}),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data) {
				var d = $.parseJSON(JSON.stringify(data));
				if (d.rs=="success"){
					window.location.href = 'order.php';
				}
			} // 注意不要在此行增加逗号
		});
	})
});
