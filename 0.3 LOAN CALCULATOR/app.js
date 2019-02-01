// Listen For Submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Show loader image for some seconds
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    window.setTimeout(calculateResults, 2000);

});

// Calculate Results
function calculateResults(){

    // Getting Elements
    const amountE = document.getElementById('amount');
    const interestE = document.getElementById('interest');
    const yearsE = document.getElementById('years');
    const monthlyPaymentD = document.getElementById('monthly-payment');
    const totalPaymentD = document.getElementById('total-payment');
    const totalInterestD = document.getElementById('total-interest');

    // Converting Inputs to Fload Data Type
    const  amount= parseFloat(amountE.value);
    const  interest= parseFloat(interestE.value);
    const  years= parseFloat(yearsE.value);

    // The Calculation
    const calcInterest = (interest/100) * amount;
    const totalInterest = calcInterest * years;
    const totalPayment = (calcInterest * years) + amount;
    const monthlyPayment = totalPayment/(12*years);

    if(isFinite(totalPayment)){
        monthlyPaymentD.value = monthlyPayment.toFixed(2);
        totalPaymentD.value = totalPayment.toFixed(2);
        totalInterestD.value = totalInterest.toFixed(2);

        // Show result and hide loader
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';

    }else{
        displayError('Please Check The Numbers');
    } //  End Else
}  // End calculateResults

function displayError(error){

    // HIDE LOADING AND RESULTS
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';

    // Create error div
    const errorDiv = document.createElement('div');
    // Add Error Class
    errorDiv.className = 'alert alert-danger';
    // Create text node and append child
    errorDiv.appendChild(document.createTextNode(error));
    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // append Error to card
    card.insertBefore(errorDiv, heading);

    // clear Error after some seconds
                    // function, Time in millisecs
    window.setTimeout(clearError, 3000);
    // NB:: THE clearError type of function above is thesame as the
    // type used in addEventListener() methods, Hence it does not contain
    // parenthesis
    
}  // End display Error

// Clear Error Function
function clearError(){
        const errorDiv = document.querySelector('.alert-danger');
        errorDiv.remove();
}