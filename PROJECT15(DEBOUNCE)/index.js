// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

// url = 'https://randomuser.me/api/';

const inputField = document.querySelector('#user-input');

inputField.addEventListener('input', () => {
  let user = ' ';
  fetch('https://randomuser.me/api/')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      user = data.results[0].name.first;
      console.log(user);
    });

});
