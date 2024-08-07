document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        checkForm();
    });

    function checkForm() {
        // 取得姓名的输入
        var name = document.getElementById('name').value;
        if (name == null || name == "") {
            alert("姓名必須填寫");
            return false;
        }
        document.getElementById('information1').textContent = name;

        // 取得电话的输入
        var phone = document.getElementById('phone').value;
        if (phone == "") {
            alert("請輸入電話號碼");
            return false;
        }
        document.getElementById('information2').textContent = phone;

        // 取得地址的输入
        var address = document.getElementById('address').value;
        if (address == "") {
            alert("請输入地址");
            return false;
        }
        document.getElementById('information3').textContent = address;

        // 取得邮箱的输入
        var email = document.getElementById('email').value;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            alert("不是一個有效的 e-mail 地址");
            return false;
        }
        document.getElementById('information4').textContent = email;
}

document.addEventListener('DOMContentLoaded', (event) => {
    window.sendOutForm = function () {
        const data = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
        };
        sessionStorage.setItem('displayFormData', JSON.stringify(data));
        console.log(data);

        window.location.href = "displayForm.html";
    }
})
