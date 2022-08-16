// Deposit counting function
document.getElementById('deposit').addEventListener('click', function () {
    //declear neded variable
    const depositMoney = document.getElementById('deposit-money');
    const depositInput = document.getElementById('deposit-input');
    const previousDeposit = depositMoney.innerText;
    const depositInputValue = depositInput.value;
    const totalStokMoney = document.getElementById('total-stok-money');
    const previousStockText = totalStokMoney.innerText;

    //sum of present deposit amount & previous amount
    // const prasentDeposit = parseFloat(previousDeposit) + parseFloat(depositInputValue);

    //output variable
    depositMoney.innerText = parseFloat(previousDeposit) + parseFloat(depositInputValue); // sum of total deposit  money

    totalStokMoney.innerText = parseFloat(previousStockText) + parseFloat(depositInputValue);//total stock money

    depositInput.value = '';
});

// Withdraw counting
document.getElementById('withdraw').addEventListener('click', function () {
    //diclear needed variable
    const withDrawInput = document.getElementById('withdraw-input');
    const withDrawMoney = document.getElementById('withdraw-money');
    const withDrawInputValue = withDrawInput.value;
    const previousWithdrawMoney = withDrawMoney.innerText;
    withDrawInput.value = '';
    if (isNaN(withDrawInputValue)) {
        alert('Please provide valid number');
        return;
    }
    //total stock money
    const totalStock = document.getElementById('total-stok-money');
    const totalStockText = totalStock.innerText;
    const totalStockC = parseFloat(totalStockText);

    //converte string money to number
    const withDrawInputC = parseFloat(withDrawInputValue);
    const previousMoneyC = parseFloat(previousWithdrawMoney);

    if (withDrawInputC > totalStockC) {
        alert('Do not have enough money');
        return;
    }

    withDrawMoney.innerText = previousMoneyC + withDrawInputC;
    totalStock.innerText = totalStockC - withDrawInputC;

})
