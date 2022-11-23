// IP Request https://www.omdbapi.com/?i="tt4154796"&apikey=4148fa0f
// All Data Requests http://www.omdbapi.com/?apikey=4148fa0f&
// All Poster Request http://img.omdbapi.com/?apikey=?
// example API https:jsonplaceholder.typicode.com/users

const posterListEl = document.querySelector(' .poster__container');
var input__enter = document.getElementById('search')
let isModalOpen = false;
const searchID = localStorage.getItem("searchID")

async function renderPosts(searchID) {
  const posts = await fetch (`https://www.omdbapi.com/?apikey=4148fa0f&s=${searchID}`)
  const posterData = await posts.json();

  posterListEl.innerHTML = posterData.Search.map(post => posterHTML(post)).join('');
}



document.getElementById('search__btn').onclick = async function (){
  event.preventDefault()
const video = document.querySelector('.btn__video')
const spinner = document.querySelector('.btn__spinner')
video.classList += " btn__video--invisible";
spinner.classList += " btn__spinner--visible";

  var search = document.getElementById("search").value;
  const posts = await fetch (`https://www.omdbapi.com/?apikey=4148fa0f&s=${search || searchID}`)
const posterData = await posts.json();

setTimeout(() => {
  video.classList.remove("btn__video--invisible");
spinner.classList.remove("btn__spinner--visible");
  posterListEl.innerHTML = posterData.Search.map(post => posterHTML(post)).join('');
  console.log(spinner)
}, 1000);

};

function toggleModal() {
  if(isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function posterHTML(post) {
  return `<div class="poster" onclick="toggleModal(); getMovie('${post.imdbID}')">
  <img
    src="${post.Poster}"
    alt=""
    class="poster__img"
  />
  <p class="movie__title">${post.Title}</p>
  <p class="year poster__year">${post.Year}</p>
  </div>`
  }

  async function getMovie(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=4148fa0f`);
    const movieData = await movies.json();
  const  { Title, Year, Runtime, Genre, Director, Actors, Plot, Awards, Poster, Metascore, imdbRating, imdbVotes, BoxOffice, } = movieData
  
  document.getElementById('title').textContent = Title;
  document.getElementById('year').textContent = Year;
  document.getElementById('genre').textContent = Genre;
  document.getElementById('runtime').textContent = Runtime;
  document.getElementById('plot').textContent = Plot;
  document.getElementById('director').textContent = Director;
  document.getElementById('actors').textContent = Actors;
  document.getElementById('awards').textContent = Awards;
  document.getElementById('metascore').textContent = Metascore;
  document.getElementById('boxoffice').textContent = BoxOffice;
  document.getElementById('imdbRating').textContent = imdbRating;
  document.getElementById('imdbVotes').textContent = imdbVotes;
  document.getElementById('poster').src = Poster;
  }

  renderPosts(searchID) 