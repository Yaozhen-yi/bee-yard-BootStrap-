var displayFormData = JSON.parse(sessionStorage.getItem('displayFormData')) || {};
var formData = JSON.parse(sessionStorage.getItem('formData')) || {};

document.addEventListener('DOMContentLoaded', () => {
    
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
    // 模拟提交订单逻辑
    // 这里可以添加实际的订单提交逻辑，例如通过AJAX发送数据到服务器

    // 显示弹出窗口
    alert("送出成功!");
    console.log("訂購人:",displayFormData);
    console.log("訂購商品:",formData)
}
    

    
