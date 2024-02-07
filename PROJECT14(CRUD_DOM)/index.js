const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  const newSection = document.createElement('section');
  const titleInside = document.createElement('div');
  titleInside.innerHTML = title.value;
  const authorInside = document.createElement('div');
  authorInside.innerHTML = author.value;
  const yearInside = document.createElement('div');
  yearInside.innerHTML = year.value;

  newSection.appendChild(titleInside);
  newSection.appendChild(authorInside);
  newSection.appendChild(yearInside);

  bookList.appendChild(newSection);
});
