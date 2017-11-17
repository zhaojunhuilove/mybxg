define([
    'jquery',
    'template',
    'util'
], function($,template,util) {
    
    // 编辑讲师
    // // 获取地址栏id
   
    var tcId = util.qs('tc_id',location.search);
    

    if(tcId){           
        $.ajax({
            type : 'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},
            dataType : 'json',
            success : function(data){
                // console.log(data)
                data.result.tc_operate = '编辑讲师';
                var html = template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
                $('#addBtn').click(function(){
                    submitForm('/api/teacher/update');     
                })
                
            }
        });
    }else{
        
        var html = template('teacherTpl',{tc_operate : '添加讲师'});
        
        $('#teacherInfo').html(html);

        $('#addBtn').click(function(){
            
            submitForm('/api/teacher/add');     
        })

    };
    

    // 添加讲师
    function submitForm(url){    
        $.ajax({
            type : 'post',
            url : url,
            data : $('#addForm').serialize(),
            dataType : 'json',
            success : function(data){  
            //    console.log(data)         
                if(data.code == 200){
                    location.href='/index.php/teacher/list';
                }
            }
        })
    }
    
       
});