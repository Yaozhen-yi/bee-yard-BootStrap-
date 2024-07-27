document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    //定義各個品項的價格表
    const prices1 = {
        "3": {
            "flowers": 700,
            "Xianfengcao": 700,
            "tallow-tree": 700,
            "litchi": 800,
            "Longan": 900,
            "thousand-layers": 900,
            "red-chai": 900
        },
        "5": {
            "flowers": 1000,
            "Xianfengcao": 1000,
            "tallow-tree": 1000,
            "litchi": 1100,
            "Longan": 1300,
            "thousand-layers": 1300,
            "red-chai": 1300
        }
    };

    const prices2 = {
        "flowers": 400,
        "Xianfengcao": 400,
        "tallow-tree": 400,
        "litchi": 450,
        "Longan": 450,
        "thousand-layers": 450,
        "red-chai": 450,
        'crystallized':600
    };

    const prices3 = {
        "flowers": 250,
        "Xianfengcao": 250,
        "tallow-tree": 250,
        "litchi": 300,
        "Longan": 300,
        "thousand-layers": 300,
        "red-chai": 300,
    };

    const prices4 = {
        "flowers": 120,
        "Xianfengcao": 120,
        "tallow-tree": 120,
        "litchi": 120,
        "Longan": 120,
        "thousand-layers": 120,
        "red-chai": 120,
    };

    const prices5 = {
        "flowers": 500,
        "Xianfengcao": 500,
        "tallow-tree": 500,
        "litchi": 500,
        "Longan": 500,
        "thousand-layers": 500,
        "red-chai": 500,
    };

    const prices6 = {
        "flowers": 500,
        "Xianfengcao": 500,
        "tallow-tree": 500,
        "litchi": 500,
        "Longan": 500,
        "thousand-layers": 500,
        "red-chai": 500,
    };

    const prices7 = {
        "green-tea": 80,
        "Orange": 80,
        "Osmanthus-fragrans": 80,
        "natural": 80
    };

    const prices8 = {
        "small": 150,
        "big": 300
    };
    const prices9 = 450;

    const prices10 = 400;

    const prices11 = {
        "camellia": 400,
        "Xianfengcao": 400,
        "Rapeseed-flowers": 400,
        "Adenophora-parviflora": 400,
        "Pu-salt": 500,
    };

    const prices12 = {
        "capsule": 1500,
        "canned": 1500,
    };

    const prices13 = 1500

    //定義函式用來計算結果
    function calculateTotal1() {
        const weight = document.getElementById('weight1').value;
        const taste = document.getElementById('taste1').value;
        const quantity = parseInt(document.getElementById('quantity1').value) || 0;

        const pricePerItem = prices1[weight][taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result1').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal2() {
        const taste = document.getElementById('taste2').value;
        const quantity = parseInt(document.getElementById('quantity2').value) || 0;

        const pricePerItem = prices2[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result2').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal3() {
        const taste = document.getElementById('taste3').value;
        const quantity = parseInt(document.getElementById('quantity3').value) || 0;

        const pricePerItem = prices3[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result3').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal4() {
        const taste = document.getElementById('taste4').value;
        const quantity = parseInt(document.getElementById('quantity4').value) || 0;

        const pricePerItem = prices4[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result4').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal5() {
        const taste = document.getElementById('taste5').value;
        const quantity = parseInt(document.getElementById('quantity5').value) || 0;

        const pricePerItem = prices5[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result5').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal6() {
        const taste = document.getElementById('taste6').value;
        const quantity = parseInt(document.getElementById('quantity6').value) || 0;

        const pricePerItem = prices6[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result6').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal7() {
        const taste = document.getElementById('taste7').value;
        const quantity = parseInt(document.getElementById('quantity7').value) || 0;

        const pricePerItem = prices7[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result7').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal8() {
        const taste = document.getElementById('taste8').value;
        const quantity = parseInt(document.getElementById('quantity8').value) || 0;

        const pricePerItem = prices8[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result8').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal9() {
        const quantity = parseInt(document.getElementById('quantity9').value) || 0;

        const totalPrice = prices9 * quantity;
        document.getElementById('result9').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal10() {
        const quantity = parseInt(document.getElementById('quantity10').value) || 0;

        const totalPrice = prices10 * quantity;
        document.getElementById('result10').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal11() {
        const taste = document.getElementById('taste11').value;
        const quantity = parseInt(document.getElementById('quantity11').value) || 0;

        const pricePerItem = prices11[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result11').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal12() {
        const taste = document.getElementById('taste12').value;
        const quantity = parseInt(document.getElementById('quantity12').value) || 0;

        const pricePerItem = prices12[taste];
        const totalPrice = pricePerItem * quantity;
        document.getElementById('result12').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateTotal13() {
        const quantity = parseInt(document.getElementById('quantity13').value) || 0;

        const totalPrice = prices13 * quantity;
        document.getElementById('result13').textContent = totalPrice;
        calculateAmountTotal();
    }

    function calculateAmountTotal() {

        const total1 = parseInt(document.getElementById('result1').textContent) || 0;
        const total2 = parseInt(document.getElementById('result2').textContent) || 0;
        const total3 = parseInt(document.getElementById('result3').textContent) || 0;
        const total4 = parseInt(document.getElementById('result4').textContent) || 0;
        const total5 = parseInt(document.getElementById('result5').textContent) || 0;
        const total6 = parseInt(document.getElementById('result6').textContent) || 0;
        const total7 = parseInt(document.getElementById('result7').textContent) || 0;
        const total8 = parseInt(document.getElementById('result8').textContent) || 0;
        const total9 = parseInt(document.getElementById('result9').textContent) || 0;
        const total10 = parseInt(document.getElementById('result10').textContent) || 0;
        const total11 = parseInt(document.getElementById('result11').textContent) || 0;
        const total12 = parseInt(document.getElementById('result12').textContent) || 0;
        const total13 = parseInt(document.getElementById('result13').textContent) || 0;
        
        const grandTotal = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13;

        document.getElementById('grandTotal').textContent = grandTotal;
    }


    //change事件監聽,當下拉菜單的值發生變化掉用calculateTotal函式
    document.getElementById('weight1').addEventListener('change', calculateTotal1);
    document.getElementById('taste1').addEventListener('change', calculateTotal1);
    document.getElementById('quantity1').addEventListener('change', calculateTotal1);
    document.getElementById('quantity1').addEventListener('blur', calculateTotal1);

    document.getElementById('taste2').addEventListener('change', calculateTotal2);
    document.getElementById('quantity2').addEventListener('change', calculateTotal2);
    document.getElementById('quantity2').addEventListener('blur', calculateTotal2);

    
    document.getElementById('taste3').addEventListener('change', calculateTotal3);
    document.getElementById('quantity3').addEventListener('change', calculateTotal3);
    document.getElementById('quantity3').addEventListener('blur', calculateTotal3);

    document.getElementById('taste4').addEventListener('change', calculateTotal4);
    document.getElementById('quantity4').addEventListener('change', calculateTotal4);
    document.getElementById('quantity4').addEventListener('blur', calculateTotal4);

    document.getElementById('taste5').addEventListener('change', calculateTotal5);
    document.getElementById('quantity5').addEventListener('change', calculateTotal5);
    document.getElementById('quantity5').addEventListener('blur', calculateTotal5);

    document.getElementById('taste6').addEventListener('change', calculateTotal6);
    document.getElementById('quantity6').addEventListener('change', calculateTotal6);
    document.getElementById('quantity6').addEventListener('blur', calculateTotal6);

    document.getElementById('taste7').addEventListener('change', calculateTotal7);
    document.getElementById('quantity7').addEventListener('change', calculateTotal7);
    document.getElementById('quantity7').addEventListener('blur', calculateTotal7);

    document.getElementById('taste8').addEventListener('change', calculateTotal8);
    document.getElementById('quantity8').addEventListener('change', calculateTotal8);
    document.getElementById('quantity8').addEventListener('blur', calculateTotal8);

    document.getElementById('quantity9').addEventListener('change', calculateTotal9);
    document.getElementById('quantity9').addEventListener('blur', calculateTotal9);

    document.getElementById('quantity10').addEventListener('change', calculateTotal10);
    document.getElementById('quantity10').addEventListener('blur', calculateTotal10);


    document.getElementById('taste11').addEventListener('change', calculateTotal11);
    document.getElementById('quantity11').addEventListener('change', calculateTotal11);
    document.getElementById('quantity11').addEventListener('blur', calculateTotal11);
    
    document.getElementById('taste12').addEventListener('change', calculateTotal12);
    document.getElementById('quantity12').addEventListener('change', calculateTotal12);
    document.getElementById('quantity12').addEventListener('blur', calculateTotal12);

    document.getElementById('quantity13').addEventListener('input', calculateTotal13);
    document.getElementById('quantity13').addEventListener('blur', calculateTotal13);

    document.getElementById('grandTotal').addEventListener('change', calculateAmountTotal);
    // 初始计算一次
    calculateTotal1();
    calculateTotal2();
    calculateTotal3();
    calculateTotal4();
    calculateTotal5();
    calculateTotal6();
    calculateTotal7();
    calculateTotal8();
    calculateTotal9();
    calculateTotal10();
    calculateTotal11();
    calculateTotal12();
    calculateTotal13();
    calculateAmountTotal();

    window.submitForm = function() {
        // Collect data
        const data = {
            weight1: document.getElementById('weight1').value,
            taste1: document.getElementById('taste1').value,
            quantity1: document.getElementById('quantity1').value,
            result1: document.getElementById('result1').textContent,

            taste2: document.getElementById('taste2').value,
            quantity2: document.getElementById('quantity2').value,
            result2: document.getElementById('result2').textContent,

            taste3: document.getElementById('taste3').value,
            quantity3: document.getElementById('quantity3').value,
            result3: document.getElementById('result3').textContent,

            taste4: document.getElementById('taste4').value,
            quantity4: document.getElementById('quantity4').value,
            result4: document.getElementById('result4').textContent,

            taste5: document.getElementById('taste5').value,
            quantity5: document.getElementById('quantity5').value,
            result5: document.getElementById('result5').textContent,

            taste6: document.getElementById('taste6').value,
            quantity6: document.getElementById('quantity6').value,
            result6: document.getElementById('result6').textContent,

            taste7: document.getElementById('taste7').value,
            quantity7: document.getElementById('quantity7').value,
            result7: document.getElementById('result7').textContent,

            taste8: document.getElementById('taste8').value,
            quantity8: document.getElementById('quantity8').value,
            result8: document.getElementById('result8').textContent,

            quantity9: document.getElementById('quantity9').value,
            result9: document.getElementById('result9').textContent,

            quantity10: document.getElementById('quantity10').value,
            result10: document.getElementById('result10').textContent,

            taste11: document.getElementById('taste11').value,
            quantity11: document.getElementById('quantity11').value,
            result11: document.getElementById('result11').textContent,

            taste12: document.getElementById('taste12').value,
            quantity12: document.getElementById('quantity12').value,
            result12: document.getElementById('result12').textContent,

            quantity13: document.getElementById('quantity13').value,
            result13: document.getElementById('result13').textContent,

            grandTotal: document.getElementById('grandTotal').textContent
        };

        // Store in sessionStorage
        sessionStorage.setItem('formData', JSON.stringify(data));

        console.log(data)
        // Redirect to display page
        window.location.href = "form.html";
    }
})