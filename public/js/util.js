define([
    'jquery'
], function($) {

    //获取地址栏id
    function qs(key,param){
        
        var obj = {};
        if(param){
            var p = param.substr(1);
            if(p){
                var arr = p.split('&');
                arr.forEach(function(item) {
                    var kv = item.split('=');
                    obj[kv[0]] = kv[1];
                });
            }
            return obj[key];
        }
        return '';
        
    }
    function setMenu(pathname){
       
        $('.aside .navs a[href="'+pathname+'"]').addClass('active').closest('ul').show();
    }

    return {
        qs : qs,
        setMenu : setMenu
    }
    
});
