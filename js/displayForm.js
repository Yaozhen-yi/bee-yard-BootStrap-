var displayFormData = JSON.parse(sessionStorage.getItem('displayFormData')) || {};
var formData = JSON.parse(sessionStorage.getItem('formData')) || {};

document.addEventListener('DOMContentLoaded', ()=> {
    
    // 显示订购人信息
    document.getElementById('information1').textContent = displayFormData.name || '';
    document.getElementById('information2').textContent = displayFormData.phone || '';
    document.getElementById('information3').textContent = displayFormData.address || '';
    document.getElementById('information4').textContent = displayFormData.email || '';

    
    // 显示商品信息
    if (formData.weight1 && formData.taste1 && formData.quantity1 && formData.result1) {
        // 所有属性都有值
        document.getElementById('honey-series').classList.remove('hidden');
        document.getElementById('displayWeight1').textContent = formData.weight1 + '公斤';
        document.getElementById('displayTaste1').textContent = formData.taste1 || '';
        document.getElementById('displayQuantity1').textContent = formData.quantity1 || '';
        document.getElementById('displayResult1').textContent = formData.result1 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('honey-series').classList.add('hidden');
    }

    if (formData.taste2 && formData.quantity2 && formData.result2) {
        // 所有属性都有值
        document.getElementById('narrow-mouth').classList.remove('hidden');
        document.getElementById('displayTaste2').textContent = formData.taste2 || '';
        document.getElementById('displayQuantity2').textContent = formData.quantity2 || '';
        document.getElementById('displayResult2').textContent = formData.result2 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('narrow-mouth').classList.add('hidden');
    }

    if (formData.taste3 && formData.quantity3 && formData.result3) {
        // 所有属性都有值
        document.getElementById('suger').classList.remove('hidden');
        document.getElementById('displayTaste3').textContent = formData.taste3 || '';
        document.getElementById('displayQuantity3').textContent = formData.quantity3 || '';
        document.getElementById('displayResult3').textContent = formData.result3 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('suger').classList.add('hidden');
    }

    if (formData.taste4 && formData.quantity4 && formData.result4) {
        // 所有属性都有值
        document.getElementById('portable').classList.remove('hidden');
        document.getElementById('displayTaste4').textContent = formData.taste4 || '';
        document.getElementById('displayQuantity4').textContent = formData.quantity4 || '';
        document.getElementById('displayResult4').textContent = formData.result4 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('portable').classList.add('hidden');
    }

    if (formData.taste5 && formData.quantity5 && formData.result5) {
        // 所有属性都有值
        document.getElementById('gift_wide_mouth').classList.remove('hidden');
        document.getElementById('displayTaste5').textContent = formData.taste5 || '';
        document.getElementById('displayQuantity5').textContent = formData.quantity5 || '';
        document.getElementById('displayResult5').textContent = formData.result5 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('gift_wide_mouth').classList.add('hidden');
    }
    

    if (formData.taste6 && formData.quantity6 && formData.result6) {
        // 所有属性都有值
        document.getElementById('gift_Narrow_mouth').classList.remove('hidden');
        document.getElementById('displayTaste6').textContent = formData.taste6 || '';
        document.getElementById('displayQuantity6').textContent = formData.quantity6 || '';
        document.getElementById('displayResult6').textContent = formData.result6 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('gift_Narrow_mouth').classList.add('hidden');
    }

    if (formData.taste7 && formData.quantity7 && formData.result7) {
        // 所有属性都有值
        document.getElementById('lip_balm').classList.remove('hidden');
        document.getElementById('displayTaste7').textContent = formData.taste7 || '';
        document.getElementById('displayQuantity7').textContent = formData.quantity7 || '';
        document.getElementById('displayResult7').textContent = formData.result7 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('lip_balm').classList.add('hidden');
    }

    if (formData.taste8 && formData.quantity8 && formData.result8) {
        // 所有属性都有值
        document.getElementById('Honey_loquat').classList.remove('hidden');
        document.getElementById('displayTaste8').textContent = formData.taste8 || '';
        document.getElementById('displayQuantity8').textContent = formData.quantity8 || '';
        document.getElementById('displayResult8').textContent = formData.result8 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('Honey_loquat').classList.add('hidden');
    }

    if (formData.quantity9 && formData.result9) {
        // 所有属性都有值
        document.getElementById('Fruit_enzyme').classList.remove('hidden');
        document.getElementById('displayQuantity9').textContent = formData.quantity9 || '';
        document.getElementById('displayResult9').textContent = formData.result9 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('Fruit_enzyme').classList.add('hidden');
    }

    if (formData.quantity10 && formData.result10) {
        // 所有属性都有值
        document.getElementById('honey_vinegar').classList.remove('hidden');
        document.getElementById('displayQuantity10').textContent = formData.quantity10 || '';
        document.getElementById('displayResult10').textContent = formData.result10 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('honey_vinegar').classList.add('hidden');
    }

    if (formData.taste11 && formData.quantity11 && formData.result11) {
        // 所有属性都有值
        document.getElementById('pollen_grains').classList.remove('hidden');
        document.getElementById('displayTaste11').textContent = formData.taste11 || '';
        document.getElementById('displayQuantity11').textContent = formData.quantity11 || '';
        document.getElementById('displayResult11').textContent = formData.result11 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('pollen_grains').classList.add('hidden');
    }

    if (formData.taste12 && formData.quantity12 && formData.result12) {
        // 所有属性都有值
        document.getElementById('Queen_Bee_Capsule').classList.remove('hidden');
        document.getElementById('displayTaste12').textContent = formData.taste12 || '';
        document.getElementById('displayQuantity12').textContent = formData.quantity12 || '';
        document.getElementById('displayResult12').textContent = formData.result12 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('Queen_Bee_Capsule').classList.add('hidden');
    }

    if (formData.quantity13 && formData.result13) {
        // 所有属性都有值
        document.getElementById('Propolis').classList.remove('hidden');
        document.getElementById('displayQuantity13').textContent = formData.quantity13 || '';
        document.getElementById('displayResult13').textContent = formData.result13 || '';
    } else {
        // 有任意一个属性没有值
        document.getElementById('Propolis').classList.add('hidden');
    }
    
    
    // 计算总金额
    const grandTotal = parseFloat(formData.grandTotal || 0);
    document.getElementById('displayGrandTotal').textContent = grandTotal;

});


function submitOrder() {
    fetch('/config.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(config => {
        const secureToken = config.email.secureToken;
    // 订购人信息
    let SubscriberInfo = {
        name: document.getElementById('information1').textContent,
        phone: document.getElementById('information2').textContent,
        address: document.getElementById('information3').textContent,
        email: document.getElementById('information4').textContent
    };

    // 商品信息
    let productInfo = [
        {
            weight: document.getElementById('displayWeight1').textContent,
            taste: document.getElementById('displayTaste1').textContent,
            quantity: document.getElementById('displayQuantity1').textContent.textContent,
            result: document.getElementById('displayResult1').textContent
        },
        {
            taste: document.getElementById('displayTaste2').textContent,
            quantity: document.getElementById('displayQuantity2').textContent.textContent,
            result: document.getElementById('displayResult2').textContent
        },
        {
            taste: document.getElementById('displayTaste3').textContent,
            quantity: document.getElementById('displayQuantity3').textContent.textContent,
            result: document.getElementById('displayResult3').textContent
        },
        {
            taste: document.getElementById('displayTaste4').textContent,
            quantity: document.getElementById('displayQuantity4').textContent.textContent,
            result: document.getElementById('displayResult4').textContent
        },
        {
            taste: document.getElementById('displayTaste5').textContent,
            quantity: document.getElementById('displayQuantity5').textContent.textContent,
            result: document.getElementById('displayResult5').textContent
        },
        {
            taste: document.getElementById('displayTaste6').textContent,
            quantity: document.getElementById('displayQuantity6').textContent.textContent,
            result: document.getElementById('displayResult6').textContent
        },
        {
            taste: document.getElementById('displayTaste7').textContent,
            quantity: document.getElementById('displayQuantity7').textContent.textContent,
            result: document.getElementById('displayResult7').textContent
        },
        {
            taste: document.getElementById('displayTaste8').textContent,
            quantity: document.getElementById('displayQuantity8').textContent.textContent,
            result: document.getElementById('displayResult9').textContent
        },
        {
            quantity: document.getElementById('displayQuantity9').textContent.textContent,
            result: document.getElementById('displayResult9').textContent
        },
        {
            quantity: document.getElementById('displayQuantity10').textContent.textContent,
            result: document.getElementById('displayResult10').textContent
        },
        {
            taste: document.getElementById('displayTaste11').textContent,
            quantity: document.getElementById('displayQuantity11').textContent.textContent,
            result: document.getElementById('displayResult11').textContent
        },
        {
            taste: document.getElementById('displayTaste12').textContent,
            quantity: document.getElementById('displayQuantity12').textContent.textContent,
            result: document.getElementById('displayResult12').textContent
        },
        {
            quantity: document.getElementById('displayQuantity13').textContent.textContent,
            result: document.getElementById('displayResult13').textContent
        },
        {
            grandResult:document.getElementById('displayGrandTotal').textContent
        }
    ];

    // 构建邮件正文
    let body = '訂購人訊息:<br>' +
               '姓名：' + SubscriberInfo.name + '<br>' +
               '電話：' + SubscriberInfo.phone + '<br>' +
               '地址：' + SubscriberInfo.address + '<br>' +
               'E-mail：' + SubscriberInfo.email + '<br><br>' +
               '訂購商品信息:<br>';

    productInfo.forEach((item, index) => {
        if (item.weight || item.taste || item.quantity || item.result) {
            body += '商品 ' + (index + 1) + ':<br>';
            if (item.weight) {
                body += '公斤：' + item.weight + '<br>';
            }
            if (item.taste) {
                body += '口味：' + item.taste + '<br>';
            }
            if (item.quantity) {
                body += '數量：' + item.quantity + '<br>';
            }
            if (item.result) {
                body += '金額：' + item.result + '<br>';
            }
            body += '<br>';
        }
    });
    body += '總金額: ' + document.getElementById('displayGrandTotal').textContent;

    Email.send({
        SecureToken: secureToken,
        To: 'zhenyiyao0221@gmail.com',
        From: "zhenyiyao0221@gmail.com",
        Subject: "訂購信息",
        Body: body,
    }).then(
        message => {
            alert("送出成功!");
            document.querySelector('.btn').textContent = "送出成功";
        }
    ).catch(
        error => {
            alert("送出失敗: " + error);
        }
    );
})
}

    //送出成功後將按鈕的字改為送出成功
//     const submitButton = document.querySelector('.btn');
//     submitButton.textContent = "送出成功";

//     submitButton.disabled = true;

    console.log("訂購人:",displayFormData);
    console.log("訂購商品:",formData)
// }

    

    
