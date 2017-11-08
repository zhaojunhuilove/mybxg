define([
    'jquery',
    'template',
    'bootstrap'
], function($, template) {
    // 讲师管理
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data){
            // console.log(data)
            var html = template('teacherTpl',{list:data.result});
            // console.log(html)
            $('#teacherInfo').html(html);
            // 讲师查看
            $('#teacherInfo').find('.examine').click(function(){
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                // console.log(tcId)
                $.ajax({
                    data : 'get',
                    url : '/api/teacher/view',
                    data : {tc_id : tcId},
                    dataType : 'json',
                    success : function(data){
                        // console.log(data)
                        var html = template('modalTpl',data.result);
                        $('#modatInfo').html(html);
                        $('#teacherModal').modal();
                    }
                })
            })
        }
    })
    
});