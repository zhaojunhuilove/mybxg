define([
    'jquery',
    'template'
], function($, template) {
    // alert(111)
    $.ajax({
        data : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function(data){
            console.log(data)
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html)
        }
    })
    
});