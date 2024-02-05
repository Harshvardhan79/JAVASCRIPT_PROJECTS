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

Boldbtn.addEventListener('click', () => {
  if (output.innerHTML != 'Output') {
    let newOuter = output.innerHTML;
    output.innerHTML = `<b>${newOuter}</b>`;
  } else {
    output.innerHTML = `<b>${inputBox.value}</b>`;
  }
});

Italicbtn.addEventListener('click', () => {
  if (output.innerHTML != 'Output') {
    let newOuter = output.innerHTML;
    output.innerHTML = `<i>${newOuter}</i>`;
  } else {
    output.innerHTML = `<i>${inputBox.value}</i>`;
  }
});

underbtn.addEventListener('click', () => {
  if (output.innerHTML != 'Output') {
    let newOuter = output.innerHTML;
    output.innerHTML = `<u>${newOuter}</u>`;
  } else {
    output.innerHTML = `<u>${inputBox.value}</u>`;
  }
});

Upperbtn.addEventListener('click', () => {
  console.log(output.textContent);
  if (output.textContent == 'Output') {
    output.innerHTML = `${inputBox.value.toUpperCase()}`;
  } else {
  output.innerHTML = output.innerHTML.replace(
    output.textContent,
    output.textContent.toUpperCase()
  );
  }
});

Lowerbtn.addEventListener('click', () => {
  if (output.textContent == 'Output') {
    output.innerHTML = `${inputBox.value.toLowerCase()}`;
  } else {
    output.innerHTML = output.innerHTML.replace(
      output.textContent,
      output.textContent.toLowerCase()
    );
  }
});

Capitalizebtn.addEventListener('click', () => {
  let ans = inputBox.value[0].toUpperCase() + inputBox.value.substring(1);
  output.innerHTML = `${ans}`;
});
