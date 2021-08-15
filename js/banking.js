// Handle Deposit Button Event
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    const currentValue = depositTotal.innerText;
    depositTotal.innerText = parseFloat(currentValue) + parseFloat(depositValue);

// Update Balance Total
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + parseFloat(depositValue);
balanceTotal.innerText = newBalanceTotal; 

//clear the deposit input field
    depositInput.value = '';
});

//Handle Withdraw Button Event 
document.getElementById('withdraw-button').addEventListener('click', function(){


    // Withdraw Variables
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawAmount = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawValue);
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    // Set Withdraw Amount
    if(withdrawValue <= previousBalanceTotal){
        withdrawTotal.innerText = withdrawAmount;
         // update balance 
        const newBalance = previousBalanceTotal - withdrawValue;
        balanceTotal.innerText = newBalance;
    }
    else{
        alert('Insufficient Funds');
    }
    

   

//clear withdraw input 
withdrawInput.value = '';
});