const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const bod = document.querySelector('body');



let interval;
buttonStart.addEventListener('click', function () {
  if(!interval){
    interval = setInterval(function () {
      let i = parseInt(Math.random() * 200 + 1);
      let j = parseInt(Math.random() * 200 + 1);
      let k = parseInt(Math.random() * 200 + 1);
      bod.style.background = `rgb(${i},${j},${k})`;
      console.log('HEkki');
    }, 1000);
  }
});

buttonStop.addEventListener('click', function () {
  clearInterval(interval);
  interval=null;
});
