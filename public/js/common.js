define(['jquery','template','cookie','util'],function($,template,util){
	// 侧边栏点击效果
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	  function setMenu(pathname){
       	$('.aside .navs a').removeClass("active");
        $('.aside .navs a[href="'+pathname+'"]').addClass('active').closest('ul').show();
    }

	// alert(location.pathname)
	setMenu(location.pathname)

	// $('.aside .navs ul>li').bind('click', function(){
	// 	$('.aside .navs ul>li>a').removeClass("active");
		
	// 	$(this).addClass('active');
		
	// })


	

// 退出登录
	 $('#btnOut').click(function(){
		 
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code == 200){
					$.removeCookie('loginInfo',{path:'/'});
					location.href = '/';
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
	var html = template.render(tpl,info?JSON.parse(info):{});
	// console.log(html);
	$('.aside .profile').html(html);
	
})
	