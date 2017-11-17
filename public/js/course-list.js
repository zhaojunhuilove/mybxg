define([
    'jquery',
    'template',
    'util'
], function($, template,util) {
    
    util.setMenu(location.pathname);
    
    $.ajax({
        type : 'get',
        url : '/api/course',
        dataType : 'json',
        success : function(data){
            
            var html = template('courselistTpl',{list : data.result});
            // console.log(html)
            $("#courselistInfo").html(html);
        }
    })
    
});