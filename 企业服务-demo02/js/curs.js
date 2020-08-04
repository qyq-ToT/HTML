

    jQuery(document).ready(function () {
        //编写jQuery相关代码
        //获取head的所有类名为btn的按钮
        var $btn = $(".btn");
        console.log($btn);
        $btn.mouseenter(function () {
            $(this).css({cursor:"pointer"})
        })
        $btn.click(function () {
            $(this).css({
                color:"#FFFFFF",
                backgroundColor:"#3894ff",
            })
            $(this).siblings().css({
                color:"#3894ff",
                backgroundColor:"#FFFFFF"
            })
            alert("当前id:"+this.id+"修改渲染数据，方法还没写");
            console.log(this.id)
        })

        //获取所有里面的小按钮
        var $Cusbtn = $(".cusbtn");
        $Cusbtn.click(function () {
            alert(123)
        })
        $Cusbtn.mouseenter(function () {
            $(this).css({cursor:"pointer"})
        })
    })
