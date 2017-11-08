define([
    'jquery',
    'template'
], function($, template) {
    // 讲师管理
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data){
            console.log(data)
            var html = template('teacherTpl',{list:data.result});
            // console.log(html)
            $('#teacherInfo').html(html);
        }
    })
    
});