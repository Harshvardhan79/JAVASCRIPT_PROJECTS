// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

// url = 'https://randomuser.me/api/';

const inputField = document.querySelector('#user-input');
const userCard = document.querySelector('.user-card');

let clearT;
inputField.addEventListener('input', () => {
  let userValue = '';
  userCard.style.display = 'block';

  clearTimeout(clearT);

  async function Datafetch() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    userValue = data.results[0].name.first;
    if (userValue != '') {
      const newUser = document.createElement('div');
      newUser.innerHTML = userValue;
      console.log(newUser);
      userCard.appendChild(newUser);
    }
  }

  clearT = setTimeout(Datafetch, 500);
});
