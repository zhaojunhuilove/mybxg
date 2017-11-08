require.config({
    baseUrl : '/public/assets',
    paths : {
        jquery : 'jquery/jquery.min',
        template : 'artTemplate/template-web',
        cookie : 'jquery-cookie/jquery.cookie',
        bootstrap : 'bootstrap/js/bootstrap',
        common : '../js/common',
        login : '../js/login',
        teacher_list : '../js/teacher-list',
    },
    shim : {
        bootstra : {
            deps : ['jquery']
        }
    }
})