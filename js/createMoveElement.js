export const createMovieList = (movieData) =>{
const movieList = document.getElementById("movie-list");
const template = document.querySelector("template");

movieList.innerHTML = ""; 


  movieData.forEach(movie =>{

    const clone = template.content.cloneNode(true);

    const h3 = clone.querySelector("h3");
    const desc = clone.querySelector("#desc");
    const relDate = clone.querySelector("#rel-date");
    const OGTitle = clone.querySelector("#OG-title");
    const imgScr = clone.querySelector("#poster");

    imgScr.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    
    h3.textContent = movie.title;
    desc.textContent = movie.overview;
    OGTitle.textContent = movie.original_title;
    relDate.textContent = movie.release_date;

    movieList.appendChild(clone);

  })
}