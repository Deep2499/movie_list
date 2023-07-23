
const list_of_movies=document.querySelector(".list_of_movies");
const search_field=document.querySelector(".search_field")
const search_button=document.querySelector(".search_button")
const pages=document.querySelector(".pages")
let current_page;
let total_page;
let page_increase = document.querySelector(".page_increase");
let page_decrease = document.querySelector(".page_decrease");

function RenderList(data){
    list_of_movies.innerHTML="";
    let movie_array=data;
    for(let i=0; i<movie_array.length; i=i+1) {
        let title_type_year_container=document.createElement('div')
        let image_container=document.createElement('div')
        let li=document.createElement("li")
        li.className="list_item"
        let movie_title=document.createElement("h2");
        movie_title.innerText=`${movie_array[i].Title}`;
        let movie_year=document.createElement("div")
        movie_year.innerText=`${movie_array[i].Released}`
        let content_type=document.createElement('div')
        content_type.innerText=`${movie_array[i].Type}`
        let poster=document.createElement("img")
        poster.className="poster"
        poster.src=`${movie_array[i].Poster}`
        poster.width=200;
        poster.height=200;
        title_type_year_container.appendChild(movie_title);
        title_type_year_container.appendChild(movie_year);
        image_container.appendChild(poster);
        title_type_year_container.appendChild(content_type);
        let prev=title_type_year_container;
        //read more
        const read_more=document.createElement("div")
        title_type_year_container.appendChild(read_more)
        //let prev=
        read_more.innerText="Read More ..."
        read_more.addEventListener('click', ()=>{
            title_type_year_container.innerHTML="";
            let movie_title=document.createElement("h2");
            movie_title.innerText=`${movie_array[i].Title}`;
            let movie_year=document.createElement("div")
            movie_year.innerText=`${movie_array[i].Released}`
            let content_type=document.createElement('div')
            content_type.innerText=`${movie_array[i].Type}`
            let rated = document.createElement("div")
            rated.innerText=`${movie_array[i].Rated}`
            let Genre = document.createElement("div")
            Genre.innerText=`${movie_array[i].Genre}`
            let runtime = document.createElement("div")
            runtime.innerText=`${movie_array[i].Runtime}`
            let Director = document.createElement("div")
            Director.innerText=`${movie_array[i].Director}`
            let Writer = document.createElement("div")
            Writer.innerText=`${movie_array[i].Writer}`
            let Actors = document.createElement("div")
            Actors.innerText=`${movie_array[i].Actors}`
            let Plot = document.createElement("div")
            Plot.innerText=`${movie_array[i].Plot}`
            let Language = document.createElement("div")
            Language.innerText=`${movie_array[i].Language}`
            let Country = document.createElement("div")
            Country.innerText=`${movie_array[i].Country}`
            let Awards = document.createElement("div")
            Awards.innerText=`${movie_array[i].Awards}`
            let imdbRating = document.createElement("div")
            imdbRating.innerText=`${movie_array[i].imdbRating}`
            let imdbVotes = document.createElement("div")
            imdbVotes.innerText=`${movie_array[i].imdbVotes}`
            let BoxOffice = document.createElement("div")
            BoxOffice.innerText=`${movie_array[i].BoxOffice}`
            let red_less = document.createElement("div")
            red_less.innerText="Read Less ..."


            title_type_year_container.appendChild(movie_title);
            title_type_year_container.appendChild(movie_year);
            title_type_year_container.appendChild(content_type);
            title_type_year_container.appendChild(rated);
            title_type_year_container.appendChild(Genre);
            title_type_year_container.appendChild(runtime);
            title_type_year_container.appendChild(Director);
            title_type_year_container.appendChild(Writer);
            title_type_year_container.appendChild(Actors);
            title_type_year_container.appendChild(Plot);
            title_type_year_container.appendChild(Language);
            title_type_year_container.appendChild(Country);
            title_type_year_container.appendChild(Awards);
            title_type_year_container.appendChild(imdbRating);
            title_type_year_container.appendChild(imdbVotes);
            title_type_year_container.appendChild(BoxOffice);
            title_type_year_container.appendChild(red_less);
        })
            li.appendChild(image_container);
            li.appendChild(title_type_year_container);

            list_of_movies.appendChild(li);
    }
}


/*function fetch_results(movie_string) {
    console.log(`https://www.omdbapi.com/?apikey=deca36a0&s=${movie_string}&page=${page}`)
    fetch(`https://www.omdbapi.com/?apikey=deca36a0&s=${movie_string}&page=${page}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        let old_arr=[];
        old_arr=data.Search
        console.log(old_arr)
        let mod_arr=[];
        for(let i=0; i<old_arr.length; i=i+1) {
            let details;

            fetch(`https://www.omdbapi.com/?apikey=deca36a0&i=${old_arr[i].imdbID}`)
            .then((response1) => {
                return response1.json();
            })
            .then((data1) => {
                details=data1;
                console.log(data1);
                mod_arr.push(

                            {
                                Title: details.Title,
                                Year: details.Year,
                                Rated: old_arr[i].Rated,
                                Released: details.Released,
                                Runtime: details.Runtime,
                                Genre: details.Genre,
                                Director: details.Director,
                                Writer: details.Writer,
                                Actors: details.Actors,
                                Plot: details.Plot,
                                Language: details.Language,
                                Country: details.Country,
                                Awards: details.Awards,
                                Metascore: details.Metascore,
                                imdbRating: details.imdbRating,
                                imdbID: details.imdbID,
                                BoxOffice: details.BoxOffice,
                                Production: details.Production,
                                imdbVotes: details.imdbVotes,
                                Poster: details.Poster,
                                Type: details.Type,
                                Comments: []
                            }
                        )
                    }
                )
            }

        console.log(mod_arr)
        RenderList(mod_arr);
    });
}
*/


function fetch_results(movie_string) {
    //console.log(`https://www.omdbapi.com/?apikey=deca36a0&s=${movie_string}&page=${page}`)
    fetch(`https://www.omdbapi.com/?apikey=deca36a0&s=${movie_string}&page=${page}`)
    .then((response) => {
        console.log(`https://www.omdbapi.com/?apikey=deca36a0&s=${movie_string}&page=${page}`)
        return response.json();
    })
    .then((data) => {

        let old_arr=[];
        old_arr=data.Search
        total_page=Math.ceil(data.totalResults/10);

        pages.innerText=`${page}/${total_page}`
        console.log(total_page);
        console.log(page);
        let mod_arr=[];
        let promises=[];
        for(let i=0; i<old_arr.length; i=i+1) {
            promises.push(`https://www.omdbapi.com/?apikey=deca36a0&i=${old_arr[i].imdbID}`)
        }

        (async () => {
            const response = [];
            for (url of promises) {
              const result = await fetch(url);
              response.push(await result.json());
              mod_arr = await response;
              //console.log(mod_arr)
                RenderList(mod_arr);
            }
          })();


    });
}




page_increase.addEventListener('click', ()=>{
    if(page<total_page){
        page=page+1;
        fetch_results(search_field.value)
    }

})

page_decrease.addEventListener('click', ()=>{
    if(page>1) {
        page=page-1;
        fetch_results(search_field.value)
    }

})

search_button.addEventListener('click', ()=>{
    page=1;
    fetch_results(search_field.value)
})



