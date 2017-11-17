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

            // 启用和注销
            $('#teacherInfo').find('.switchBtn').click(function(){
                
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                var tcStatus = td.attr('data-tcstatus');
                // alert(tcStatus)
                var that = this;
                $.ajax({
                    data : 'post',
                    url : '/api//teacher/handle',
                    dataType : 'json',
                    data : {tc_id : tcId,tc_status : tcStatus},
                    success : function(data){
                        td.attr('data-tcstatus',data.result.tc_status);
                        // console.log(data)
                        if(data.result.tc_status == 1){
                            $(that).text('启 用');
                        }else{
                            $(that).text('注 销');
                        }
                    }
                })
            })

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