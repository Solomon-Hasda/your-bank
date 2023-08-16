
const withDrawButton = document.getElementById('withdraw-button');
withDrawButton.addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldTotal = parseFloat(withdrawField.value) ;

    withdrawField.value = '';

    const prevWithdrawElement = document.getElementById('withdraw-total');
    const prevWithdrawTotal = parseFloat(prevWithdrawElement.innerText);
    
    const totalWithdrawAmount = prevWithdrawTotal + withdrawFieldTotal;
    prevWithdrawElement.innerText = totalWithdrawAmount;

    const totalBalanceElement = document.getElementById('balance-total');
    const prevTotalBalance = parseFloat(totalBalanceElement.innerText);
    
    const currentTotalBalance = prevTotalBalance - withdrawFieldTotal;
    totalBalanceElement.innerText = currentTotalBalance;
})