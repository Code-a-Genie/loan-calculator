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
    const calculatedInterest = parseFloat(interest.value)/100 / 12
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1+calculatedInterest , calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

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
function showError(error){
    // create a div
    const errorDiv = document.createElement('div');
    // get elments
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add a class
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error)); 

    // to insert error above heading
    card.insertBefore(errorDiv,heading);

   //    Clear out error message after  secs;
     setTimeout(clearError, 3000);

}
    // clear error
    function clearError(){
        document.querySelector('.alert').remove();
    }