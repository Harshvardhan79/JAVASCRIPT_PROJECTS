//Thanks chai_aur_code
const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

const myDiv = document.querySelector('.cursor');




document.addEventListener('mousemove', (e) => {
  let mover=document.querySelector(".cursor");

  mover.style.left=`${e.clientX}px`;
  mover.style.top=`${e.clientY}px`;



  let colorCursor = parseInt(Math.random() * 10 + 1);
  document.querySelector(
    '.cursor'
  ).style.backgroundColor = `${colors[colorCursor]}`;
});

// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
