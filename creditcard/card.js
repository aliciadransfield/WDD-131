function isCardNumberValid(number) {
    return number === '1234123412341234'
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg;
}

function isExpired(month,year) {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // 0-indexed
    const currentYear = Number(now.getFullYear().toString().slice(-2)); // get last 2 digits
    const expMonth = Number(month);
    const expYear = Number(year);

    if (expYear < currentYear) return true;
    if (expYear === currentYear && expMonth < currentMonth) return true;
    return false;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    const form = event.target; 
    const cardNumber = event.target.creditCardNumber.value.trim();
    const expMonth = event.target.expMonth.value.trim();
    const expYear = event.target.expYear.value.trim();

    if (isNaN(cardNumber) || cardNumber.length !== 16) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card is not valid/n';
    }
    if (isExpired(expMonth, expYear)) {
        errorMsg += 'Card is expired.\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    alert('Card accepted!');
    return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)