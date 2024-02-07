const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', async function () {
  const res = await fetch(url);
  const data = await res.json();
  container.innerHTML=" ";
  const cat = document.createElement('img');
  cat.setAttribute('src', data[0].url);
  cat.style.padding = '20px 0 0 0';
  container.appendChild(cat);
  // console.log(cat);
});
