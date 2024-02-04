// btn uppercase
// "btn lowercase
// btn capitalize
// btn bold
// btn italic
// btn underline

const output = document.querySelector('#output-field');
const inputBox = document.querySelector('#input-field');

const Boldbtn = document.querySelector('.btnbold');
const Upperbtn = document.querySelector('.btnuppercase');
const Lowerbtn = document.querySelector('.btnlowercase');
const Capitalizebtn = document.querySelector('.btncapitalize');
const Italicbtn = document.querySelector('.btnitalic');
const underbtn = document.querySelector('.btnunderline');

let convertWord = inputBox.value;

Boldbtn.addEventListener('click', () => {
  
  output.innerHTML = `<b>${convertWord}</b>`;
});

Italicbtn.addEventListener('click', () => {
  output.innerHTML = `<i>${inputBox.value}</i>`;
});

underbtn.addEventListener('click', () => {
  output.innerHTML = `<u>${inputBox.value}</u>`;
});

Upperbtn.addEventListener('click', () => {
  output.innerHTML = `${inputBox.value.toUpperCase()}`;
});

Lowerbtn.addEventListener('click', () => {
  output.innerHTML = `${inputBox.value.toLowerCase()}`;
});

Capitalizebtn.addEventListener('click', () => {
  let ans = inputBox.value[0].toUpperCase() + inputBox.value.substring(1);
  output.innerHTML = `${ans}`;
});


