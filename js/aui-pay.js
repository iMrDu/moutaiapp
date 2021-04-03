/**
 * 校验文本是否为空
 * tips：提示信息
 * 使用方法：$("#id").validate("提示文本");
 * @Mr.D
 * pay-session.php
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
        var recv = $(".aui-address-box-default").children().children().children().text();
        if (recv=="点此添加收货人信息"){
            alert("请添加收货人信息");
            return false;
        }

        window.location.href = 'pay.php';
    });
});