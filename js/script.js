import { BASE_URL } from "./env.js";
import {createMovieList} from "./createMoveElement.js"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUxZTc1MGRiMzJmNjRmMjdjOGIzMTc1YWE4OGRlZCIsIm5iZiI6MTc1ODg4MDM0NC4zODgsInN1YiI6IjY4ZDY2MjU4YjkxZDljN2Q3M2M4MzVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbzi_KxKTOHpu5kImvIwHQ7hwoVo4tXkmmOFXGXlB-0'
  }
};


window.addEventListener("load", () =>{
 
  fetchApi();

})

function fetchApi(endPoint){
  fetch(`${BASE_URL}/${endPoint??"now_playing"}`, options)
  .then(response => response.json())
  .then(data => {console.log(data)

  data = data.results;
  
  createMovieList(data);
})
.then(err => console.log(err));
}


document.querySelector("#menu-filter").addEventListener("click", (e)=>{

  if(e.target.tagName === "A"){
   
     document.querySelectorAll("#menu-filter a").forEach(link => {
      link.classList.remove("active");
    });

    const targetValue = e.target.getAttribute("data-value")

    e.target.classList.add("active");

    fetchApi(targetValue);

  } else{
    return console.log("no data")
  }
  
})


