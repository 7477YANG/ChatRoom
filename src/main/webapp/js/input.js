/*�ύ����*/
$(function () {
    $("input[name='button_one']").click(function () {
        var input_textarea = $("textarea[name='input_textarea']").val();
        $.ajax({
            url: "http://localhost:8080/ChatServlet",
            type: "post",
            data: {
                input_textarea: input_textarea
            },
            success: function (data) {
                if(data !=null){
                    //������������
                    $("textarea[name='input_textarea']").val("");
                }
            }
        })
    })
})

