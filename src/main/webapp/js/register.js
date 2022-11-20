//������֤��
$(".sendVerifyCode").on("click", function () {
    var data = {};
    data.username = $("#newUser").val();
    if (data.username === '') {
        alert("please input phone number");
        return;
    }

    /*
    * ���ţ�133��149��153��173��177��180��181��189��191��193��199
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

























