let themeChanger = document.getElementsByClassName("themeChanger")[0]
themeChanger.addEventListener("click", changeTheme)


let loader = document 
function changeTheme() {
    let body = document.querySelector("body")
    body.classList.toggle("dark")
}
// console.log(changeTheme);

// DARK MODE //

async function sendRequest(url, method, data) {
    if(method == "POST") {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        response = await response.json()
        return response
    } else if(method == "GET") {
        url = url+"?"+ new URLSearchParams(data)
        let response = await fetch(url, {
            method: "GET"
        })
        response = await response.json()
        return response
    }
}

let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", findMovie)

async function findMovie() {
    document.querySelector(".loader").style.display = 'block'
    let searchTitle = document.getElementsByName("search")[0].value;
    let response = await sendRequest("http://www.omdbapi.com/", "GET", {
        apikey: "1b7ff984",
        t: searchTitle
    })
    console.log(response);
    if(response.Response =="False") {
        document.querySelector(".loader").style.display = "none"
        alert("Фильм не найден")
    } else {
        document.querySelector(".loader").style.display = "none"
        document.getElementById('main').style.display = "block"
        showMovie(response)
        findSimilarMovies()
    }
}

function showMovie(movie) {
    let title = movie.Title
    let img = movie.Poster

    
    document.getElementById("movieTitle").innerHTML = title
    document.getElementsByClassName("movieImage")[0].style.backgroundImage = `url(${img})`

    let params = [
        "imdbRating", "Year", "Released", "Genre", "Country", "Language", "Director", "Writer", "Actors",
    ]


    let movieInfo = document.querySelector(".movieInfo")
    movieInfo.innerHTML = ""

    for(let i = 0; i < params.length; i++) {
        let param = params[i]
        let value = movie[param]

        let desc = `
        <div class="desc">
        <div class="tittle">
            ${param}
        </div>
        <div class="value">
            ${value}
        </div>
    </div>
        `

        movieInfo.innerHTML = movieInfo.innerHTML + desc

        console.log(param, value)
    }
}

async function findSimilarMovies() {
    let searchTitle = document.getElementsByName ("search") [0].value 
    let response = await sendRequest ("http://www.omdbapi.com/", "GET", {
        apikey: "1b7ff984",
        s: searchTitle
    })

    console.log(response)
    if(response.Response == "False") {

    } else {
        showSimilarMovies(response.Search)

        document.getElementById('similarMoviesTitle').innerHTML = `Похожих фильмов ${response.totalResults}`
    }
}

function showSimilarMovies(movies) {
    let similarMovies = document.querySelector('.similarMovies')
    similarMovies.innerHTML = ""

    for(let i=0; i < movies.length; i++) {
        let movie = movies[i]
        if(movie.Poster != "N/A" ) {
            let similarMovie = `
            <div class="similarMovie" style="background-image: url('${movie.Poster}');">
            <div class="saved" data-imdbID="${movie.imdbID}" data-poster="${movie.Poster}" data-title="${movie.Title}">
               <img src="./img/favBtn.svg" alt="favoritesStar">
            </div>
            <div class="similartittle">
               ${movie.Title}
            </div>
        </div>
        `

        similarMovies.innerHTML = similarMovies.innerHTML + similarMovie;
        let saved = document.querySelectorAll(".saved");
        saved.forEach((elem)=> {
            elem.addEventListener("click", addSaved)
        })
        }
    }
}

function addSaved() {
    let elem = event.target
    let movieId = elem.getAttribute("data-imdbID");
    let title = elem.getAttribute("data-title");
    let poster = elem.getAttribute("data-poster");
   
    let favorites = localStorage.getItem("favorites");

    if(favorites == null) {
        favorites = "[]"
    }

    favorites = JSON.parse(favorites)

    console.log(favorites)
    console.log(movieId)
    const movieIndex = favorites.findIndex(fav => fav.movieId == movieId);
    console.log(movieIndex)

    if(movieIndex >= 0) {
        favorites.splice(movieIndex, 1)
        localStorage.setItem("favorites", JSON.stringify(favorites))
        elem.classList.remove("active")
    } else {
        let object ={movieId, title, poster}
        addFavoriteLS(object)
        elem.classList.add("active")
  }
}

function addFavoriteLS(movie){
    let favorites = localStorage.getItem('favorites')
    if(!favorites) {
        favorites = []
    } else {
        favorites = JSON.parse(favorites)
    }
    favorites.push(movie)
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

function showFavorites() {
    let favorites = localStorage.getItem("favorites")
    if(favorites == null) {
        favorites = "[]"
    }
    favorites = JSON.parse(favorites)

    let similarMoviesTitle = document.getElementById("similarMoviesTitle")
    similarMoviesTitle.innerHTML = `Фильмов в избранном ${favorites.length}`
    let similarMovies = document.querySelector(".similarMovies")
    similarMovies.innerHTML = ""
    favorites.forEach( (fav) => {
        let movieId = fav.movieId
        let poster = fav.poster
        let title = fav.title

        similarMovies.innerHTML = similarMovies.innerHTML + `
        <div class="similarMovie" style="background-image: url('${poster}');>
        <div class="saved active" data-imdbid="${movieId}" data-poster="${poster}" data-title="${title}"></div>
        <div class="similarTitle">${title}</div>
        </div>`
    })

    let saved = document.querySelectorAll(".saved");
    saved.forEach((elem)=>{
        elem.addEventListener("click", favoriteHandler)
    })
}

function favoriteHandler() {
    addSaved()
    showFavorites()
}
