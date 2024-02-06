const url = 'https://api.chucknorris.io/jokes/random';


const content=document.querySelector(".content");
const btn=document.querySelector(".btn");
let joke="";
btn.addEventListener("click",()=>{
  joke="";
  fetch(url).then(async function(res){  
    const data=await res.json();
     joke+= await data.value;
     content.innerHTML=joke;
  })
})
