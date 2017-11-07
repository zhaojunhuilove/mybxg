define(['jquery','template','cookie'],function($,template){
	// 侧边栏点击效果
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
// 退出登录
	 $('#btnOut').click(function(){
		 
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code == 200){
					location.href = "/"
				}
			}
		})
    })

	// 获取登陆信息
	var info = $.cookie('loginInfo');
	// console.log(info)
	var tpl =  '<div class="avatar img-circle">'
                +'<img src="{{tc_avatar}}">'
           		+'</div>'
           		+'<h4>{{tc_name}}</h4>';
	var html = template.render(tpl,JSON.parse(info));
	// console.log(html);
	$('.aside .profile').html(html);
})
	