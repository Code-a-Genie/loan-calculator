// Listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);

// Calculate results

function calculateResults(e){
    console.log('calculating...');
    // Grab all we need from the UI
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    // for the exact value of the amount entered in decimal
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1+calculatedInterest , calculatedPayments);
    const monthly = (principal * x * calculateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } 
    else{
        showError('Please check your numbers');
    }



     
    e.preventDefault();
}