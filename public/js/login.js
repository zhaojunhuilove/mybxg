define(['jquery','cookie'], function($) {
        $("#btn").click(function(){
            // alert(111)
            $.ajax({
                type:'post',
                url:'/api/login',
                data:$("#FormData").serialize(),
                dataType:'json',
                success:function(data){
                    // console.log(data)
                    if(data.code == 200){
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                        location.href = "index.php/index/index";
                    }
                }
            })
            return false;
        })
    
});