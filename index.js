// IP Request https://www.omdbapi.com/?i="tt4154796"&apikey=4148fa0f
// All Data Requests http://www.omdbapi.com/?apikey=4148fa0f&
// All Poster Request http://img.omdbapi.com/?apikey=?
// example API https:jsonplaceholder.typicode.com/users
let isModalOpen = false;


function searchPage() {
    var search = document.getElementById("search").value;
    event.preventDefault()
    localStorage.setItem("searchID", search)
    console.log(search)
    const video = document.querySelector('.btn__video')
    const spinner = document.querySelector('.btn__spinner')
    video.classList += " btn__video--invisible";
    spinner.classList += " btn__spinner--visible";
    setTimeout(() => {
        video.classList.remove("btn__video--invisible");
        spinner.classList.remove("btn__spinner--visible");
        window.location.href = `${window.location.origin}/search.html`
    }, 1000);

}





function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}


async function getMovieOne() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt6146586&apikey=4148fa0f`);
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
async function getMovieTwo() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt4154796&apikey=4148fa0f`);
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
async function getMovieThree() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt9376612&apikey=4148fa0f`);
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
async function getMovieFour() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt5433138&apikey=4148fa0f`);
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
async function getMovieFive() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt1745960&apikey=4148fa0f`);
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
async function getMovieSix() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt0993846&apikey=4148fa0f`);
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
async function getMovieSeven() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt2294449&apikey=4148fa0f`);
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
async function getMovieEight() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3501632&apikey=4148fa0f`);
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
async function getMovieNine() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt5463162&apikey=4148fa0f`);
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
async function getMovieTen() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt1411697&apikey=4148fa0f`);
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






// ToggleModal
