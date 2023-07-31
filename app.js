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
    e.preventDefault();
}