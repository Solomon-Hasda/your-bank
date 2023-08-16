
const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    depositField.value = '';

    const prevDepositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotal = parseFloat(prevDepositTotalElement.innerText)
    
    // now calculate prevDepositTotal and newDepositAmount

    const newDepositTotal = prevDepositTotal + newDepositAmount;
    prevDepositTotalElement.innerText = newDepositTotal

    const BalanceTotalElement = document.getElementById('balance-total');
    const prevBalanceAmount = parseFloat(BalanceTotalElement.innerText);
 
    
    const currentTotalBalance = prevBalanceAmount + newDepositAmount;
    BalanceTotalElement.innerText = currentTotalBalance;
    
})