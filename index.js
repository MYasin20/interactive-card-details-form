// listen input then display from card display
const cardForm = document.getElementById('card-form');
const cardName = document.getElementById('card-input-name');
const cardNumber = document.getElementById('card-input-number');
const cardCvc = document.getElementById('card-input-cvc');
const cardExpMonth = document.getElementById('card-exp-month');
const cardExpYear = document.getElementById('card-exp-year');

const registerSuccess = document.querySelector('.register-success');
const continueBtn = document.querySelector('.continue-btn');
const container = document.querySelector('.container');
const confirmBtn = document.querySelector('.confirm-btn');

const cardNameDisplay = document.querySelector('.cc-holder-name-display');
const cardNumberDisplay = document.querySelector('.cc-number-display');
const cvcDisplay = document.querySelector('.cvc-display');
const expMonthDisplay = document.querySelector('.exp-month-display');
const expYearDisplay = document.querySelector('.exp-year-display');

const errorBlankName = document.getElementById('error-blank-name');
const errorBlankExpiry = document.getElementById('error-blank-expiry');
const errorBlankCvc = document.getElementById('error-blank-cvc');

const errorFormat = document.querySelector('.error-format');


cardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  registerSuccess.classList.add('open');
  continueBtn.classList.add('open');
  container.classList.add('closed');
});

cardName.addEventListener('change', (e) => {
  cardNameDisplay.textContent = e.target.value.toUpperCase();
  if(e.target.value === '') {
    cardNameDisplay.textContent = 'JANE APPLESEED';
    cardName.classList.add('error-display');
    errorBlankName.classList.add('open');
  } else {
    cardName.classList.remove('error-display');
    errorBlankName.classList.remove('open');
  }
});

cardNumber.addEventListener('input', (e) => {
  let cardValue = cardNumber.value.replaceAll(' ', '');
  let newValue = ''; 
  let regex = /[A-Z]/i;
  let isWrongFormat = regex.test(e.target.value);
  
  for(let i = 0; i < cardValue.length; i++) {
    newValue += cardValue[i];
    if(i !== 0 && (i+1) % 4 === 0) {
      newValue += ' ';
    }
  }

  cardNumber.value = newValue;

  if(e.target.value === '') {
    cardNumberDisplay.textContent = '0000 0000 0000 0000';
    
  } else if (isWrongFormat) {
    errorFormat.classList.add('open');
    cardNumber.classList.add('error-display');
    
  } else {
    errorFormat.classList.remove('open');
    cardNumber.classList.remove('error-display');
  }

  cardNumberDisplay.textContent = e.target.value;
});


cardExpMonth.addEventListener('change', (e) => {
  let expDate = e.target.value;
  if(expDate === '') {
    expMonthDisplay.textContent = '00';
    errorBlankExpiry.classList.add('open');
    cardExpMonth.classList.add('error-display');
    cardExpYear.classList.add('error-display');
  } else {
    if(expDate > 12) {
      errorBlankExpiry.textContent = 'Wrong format of months or year';
      errorBlankExpiry.classList.add('open');
      cardExpMonth.classList.add('error-display');
      cardExpYear.classList.add('error-display');
    } else {
      expMonthDisplay.textContent = expDate;
      errorBlankExpiry.classList.remove('open');
      errorBlankExpiry.textContent = "Can't be blank";
      cardExpMonth.classList.remove('error-display');
      cardExpYear.classList.remove('error-display');
    }
  }
});

cardExpYear.addEventListener('change', (e) => {
  let expYear = e.target.value;
  if(expYear === '') {
    expYearDisplay.textContent = '00';
  } else {
    expYearDisplay.textContent = expYear;
  }
});

cardCvc.addEventListener('change', (e) => {
  cvcDisplay.textContent = e.target.value;
  let regex = /[A-Z]/gi;
  let isWrongFormat = regex.test(e.target.value);
  if(e.target.value === '') {
    errorBlankCvc.textContent = "Can't be blank";
    errorBlankCvc.classList.add('open');
    cardCvc.classList.add('error-display');
  } else if(isWrongFormat){
    errorBlankCvc.textContent = 'Wrong format, only numbers';
    errorBlankCvc.classList.add('open');
    cardCvc.classList.add('error-display');
  } else {
    cardCvc.classList.remove('error-display');
    errorBlankCvc.classList.remove('open');

  }
});
