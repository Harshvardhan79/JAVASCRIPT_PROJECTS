const baseURL = 'https://source.unsplash.com/all/300x300';

// this url gives an image. Use this and NO API calls

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://source.unsplash.com/all/300x300');


const btn=document.querySelector("button");
const content=document.querySelector(".content");


btn.addEventListener("click",()=>{
  content.innerHTML=' ';
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `https://source.unsplash.com/all/300x300`);
  console.log(newImage)
  content.appendChild(newImage);
  
})
