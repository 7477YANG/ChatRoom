//������֤��
$(".sendVerifyCode").on("click", function () {
    var data = {};
    data.username = $("#newUser").val();
    if (data.username === '') {
        alert("please input phone number");
        return;
    }

    /*
    *���ţ�133��149��153��173��177��180��181��189��191��193��199
    *�ƶ���134��135��136��137��138��139��147��150��151��152��157��158��159��178��182��183��184��187��188��198
    *��ͨ��130��131��132��145��155��156��166��171��175��176��185��186
    *��磺190,192,197
    * */

    /*У���ֻ�����ĺϷ���*/
    var reg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    if (!reg.test(data.username)) {
        alert("please input correct phone number");
        return;
    }

    $.ajax({
        url: "http://localhost:8080/SendSmsServlet",
        async: true,
        type: "post",
        dataType: "text",
        data: data,
        success: function (data) {
            if (data === 'success') {
                return;
            }
        }
    });
})
//ajax�ύ����
$(".sub-btn").on("click", function () {
    var data = {};
    data.username = $.trim($("input[name=username]").val());
    data.password = $.trim($("input[name=password]").val());
    data.Code = $.trim($("input[name=verifyCode]").val());
    if (data.username == '') {
        alert("please input phone number");
        return;
    }
    if (data.password == '') {
        alert("please input password");
        return;
    }
    if (data.Code == '') {
        alert("please input verify code");
        return;
    }
    $.ajax({
        url: "http://localhost:8080/Register",
        async: false,
        type: "post",
        dataType: "text",
        data: data,
        success: function (data) {
            if (data === 'success') {
                alert("register successfully");
                window.location.href = "http://localhost:8080/login.jsp";
            } else {
                alert("register failed");
            }

        }
    });
})

//��֤�뵹��ʱ
$(function () {
    $(".sendVerifyCode").on("click", function () {
        var that = $(this);
        var seconds = 60;
        that.attr("disabled", true);
        that.html(seconds + 's');
        let promise = new Promise((resolve, reject) => {
            let setTimer = setInterval(
                () => {
                    seconds -= 1;
                    that.html(seconds + 's');
                    if (seconds <= 0) {
                        resolve(setTimer)
                    }
                }
                , 1000)
        })
        promise.then((setTimer) => {
            // console.info('���');
            clearInterval(setTimer);
            that.attr("disabled", false);
        })

    })
});

//�ж������ǿ��
$(function(){
    //������ʧȥ�����¼�
    $("#newPassword").blur(function(){
        //��ȡ������ֵ
        var password = $("#newPassword").val();
        //�ж������ǿ��:

        const finalCheckPwd = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/;
        if (finalCheckPwd.test(password)) {
            $("#passwordStrength").html("���ߣ���������");
            $("#passwordStrength").css("color", "green");

        }
        else if (password.length >= 6 && password.length <= 16) {
            $("#passwordStrength").html("��ͭ������ǿ��һ��");
            $("#passwordStrength").css("color", "orange");
        }
        else {
            $("#passwordStrength").html("�˼����������������");
            $("#passwordStrength").css("color", "red");
        }
    })
});

//�ж����������Ƿ�һ��
$(function(){
    $("#confirmPassword").blur(function(){
        var password = $("#newPassword").val();
        var password2 = $("#confirmPassword").val();
        if(password !== password2){
            $("#confirmPw").html("�������벻һ��");
            $("#confirmPw").css("color", "red");
        }
        else{
            $("#confirmPw").html("��������һ��");
            $("#confirmPw").css("color", "green");
        }
    })
});














//�ж��ֻ��ŵĺϷ���
$(function(){
    //������ʧȥ�����¼�
    $("#newUser").blur(function(){
        //��ȡ������ֵ
        var phone = $("#newUser").val();
        //�ж������ǿ��:
        const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
        if (reg.test(phone)) {
            $("#checkNumber").html("�ֻ�����Ϸ�");
            $("#checkNumber").css("color", "green");

        }
        else {
            $("#checkNumber").html("�ֻ����벻�Ϸ�");
            $("#checkNumber").css("color", "red");
        }
    })
});























