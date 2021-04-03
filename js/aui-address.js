/**
 * 校验文本是否为空
 * tips：提示信息
 * 使用方法：$("#id").validate("提示文本");
 * @Mr.D
 */
$.fn.validate = function(tips){

    if($(this).val() == "" || $.trim($(this).val()).length == 0){
        alert(tips + "不能为空！");
        return false;
        // throw SyntaxError(); //如果验证不通过，则不执行后面
    }
}

$(function(){

    $("#savebtn").on('click',function (){
        $("#aui-address-username").validate('收货人姓名');
        $("#aui-address-telephone").validate('收货人手机号码');
        $("#J_Address").validate('收货人所在地区');
        $("#aui-address-areadetails").validate('收货人详细街道地址');

        $.ajax({
            type: "post",
            url: 'receive-address-session.php',
            async: false,
            data: JSON.stringify({
                u: $("#aui-address-username").val(),
                p: $("#aui-address-telephone").val(),
                a1: $("#J_Address").val(),
                a2: $("#aui-address-areadetails").val()
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
    });
});