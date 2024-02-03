const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

//Making a cursor
let removeInterval;
cursor.addEventListener('click', (e) => {
  let blink = true;
  removeInterval = setInterval(() => {
    if (blink) {
      cursor.style.background = 'yellow';
    } else {
      cursor.style.background = 'black';
    }
    blink = !blink;
  }, 400);
});

let wordWritten = '';
const temp = document.querySelector('.temp');

cursor.addEventListener('keydown', (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    wordWritten += e.key;
    typedTextSpan.innerHTML = wordWritten;
  } else if (e.keyCode >= 97 && e.keyCode <= 122) {
    wordWritten += e.key;
    typedTextSpan.innerHTML = wordWritten;
  }

  if (e.key == 'Enter') {
    clearInterval(removeInterval);
  }

  if (e.keyCode == 8) {
    let str=typedTextSpan.innerHTML
    let newarr = str.split('');

    let newstr = '';
    newarr.pop();
    newarr.forEach((element) => {
      newstr += element;
    });
    wordWritten=newstr;
    typedTextSpan.innerHTML = newstr;
  }
});


