
const list_of_movies=document.querySelector(".list_of_movies");
const search_field=document.querySelector(".search_field")
const search_button=document.querySelector(".search_button")
const pages=document.querySelector(".pages")
const page_info=document.querySelector(".page_info");

let page=0;
let total_page;
let page_increase = document.querySelector(".page_increase");
let page_decrease = document.querySelector(".page_decrease");

let page_control = document.querySelector(".page_control")

function RenderList(data){
    page_control.style.display="flex"

    console.log(data)
    list_of_movies.innerHTML="";
    let movie_array=data;
    for(let i=0; i<movie_array.length; i=i+1) {
        let title_type_year_container=document.createElement('div')
        title_type_year_container.className="title_type_year_container"
        let image_container=document.createElement('div')
        image_container.className="image_container"
        let li=document.createElement("li")
        li.className="list_item"
        let movie_title=document.createElement("h1");
        movie_title.innerHTML=`${movie_array[i].Title}`;
        let movie_year=document.createElement("div")
        movie_year.innerHTML=`<b>Year : </b>${movie_array[i].Released}`
        let content_type=document.createElement('div')
        content_type.innerHTML=`<b>Content-type : </b>${movie_array[i].Type}`
        let poster=document.createElement("img")
        poster.className="poster"
        poster.src=`${movie_array[i].Poster}`
        //poster.width=200;
        //poster.height=200;
        title_type_year_container.appendChild(movie_title);
        title_type_year_container.appendChild(movie_year);
        image_container.appendChild(poster);
        title_type_year_container.appendChild(content_type);
        let prev=title_type_year_container;
        //read more
        const read_more=document.createElement("div")
        read_more.style.color="blue";
        title_type_year_container.appendChild(read_more)
        //let prev=

        let comment_container=document.createElement("ul");
        for(let j=0; j<movie_array[i].comments.length; j=j+1) {
            let comment = document.createElement("li");
            comment.innerText=movie_array[i].comments[j]
            comment_container.appendChild(comment)
        }

        read_more.innerText="Read More ..."
        read_more.addEventListener('click', ()=>{
            title_type_year_container.innerHTML="";
            let movie_title=document.createElement("h2");
            movie_title.innerHTML=`${movie_array[i].Title}`;
            let movie_year=document.createElement("div")
            movie_year.innerHTML=`<b>Year : </b>${movie_array[i].Released}`
            let content_type=document.createElement('div')
            content_type.innerHTML=`<b>Content-type : </b>${movie_array[i].Type}`
            let rated = document.createElement("div")
            rated.innerHTML=`<b>Rated : </b>${movie_array[i].Rated}`
            let Genre = document.createElement("div")
            Genre.innerHTML=`<b>Genre : </b>${movie_array[i].Genre}`
            let runtime = document.createElement("div")
            runtime.innerHTML=`<b>Runtime : </b>${movie_array[i].Runtime}`
            let Director = document.createElement("div")
            Director.innerHTML=`<b>Director : </b>${movie_array[i].Director}`
            let Writer = document.createElement("div")
            Writer.innerHTML=`<b>Writer : </b>${movie_array[i].Writer}`
            let Actors = document.createElement("div")
            Actors.innerHTML=`<b>Actors : </b>${movie_array[i].Actors}`
            let Plot = document.createElement("div")
            Plot.innerHTML=`<b>Plot : </b>${movie_array[i].Plot}`
            let Language = document.createElement("div")
            Language.innerHTML=`<b>Language : </b>${movie_array[i].Language}`
            let Country = document.createElement("div")
            Country.innerHTML=`<b>Country : </b>${movie_array[i].Country}`
            let Awards = document.createElement("div")
            Awards.innerHTML=`<b>Awards : </b>${movie_array[i].Awards}`
            let imdbRating = document.createElement("div")
            imdbRating.innerHTML=`<b>IMDB Rating : </b>${movie_array[i].imdbRating}`
            let imdbVotes = document.createElement("div")
            imdbVotes.innerHTML=`<b>IMDB Votes : </b>${movie_array[i].imdbVotes}`
            let BoxOffice = document.createElement("div")
            BoxOffice.innerHTML=`<b>Box Office Collection : </b>${movie_array[i].BoxOffice}`


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
            let add_comment = document.createElement("input")
            add_comment.placeholder="add a comment"
            comment_container.appendChild(add_comment)
            let comment_button = document.createElement('button')
            comment_container.appendChild(comment_button)
            comment_button.innerText="Add Comment"
            comment_button.addEventListener('click', ()=>{
                movie_array[i].comments.push(add_comment.value)
                RenderList(movie_array)
            })


            //ratng system
            let rating_container=document.createElement("div");
            if(movie_array[i].has_rated) {
                rating_container.innerHTML=`<b>Your Rating : <b> ${movie_array[i].your_rating}`
            }
            else {
                const optionsData = [
                    { value: '1 Star', text: '1 Star' },
                    { value: '2 Star', text: '2 Star' },
                    { value: '3 Star', text: '3 Star' },
                    { value: '4 Star', text: '4 Star' },
                    { value: '5 Star', text: '5 Star' }
                ];
                const selectElement = document.createElement('select');
                selectElement.id = 'mySelect';
                for (const option of optionsData) {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value;
                    optionElement.text = option.text;
                    selectElement.appendChild(optionElement);
                }

                rating_container.appendChild(selectElement)
                let rating_button = document.createElement('button')
                rating_button.innerHTML=`<b>Rate Now</b>`
                rating_container.appendChild(rating_button)
                rating_button.addEventListener('click', ()=>{
                    movie_array[i].imdbVotes+=1
                   movie_array[i].has_rated=true;
                   movie_array[i].your_rating=selectElement.value
                   RenderList(movie_array)
                })
            }


            title_type_year_container.appendChild(rating_container)
            title_type_year_container.appendChild(comment_container);
        })
            li.appendChild(image_container);
            li.appendChild(title_type_year_container);

            list_of_movies.appendChild(li);
    }
}

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
        page_info.innerHTML=`<b>${page}/${total_page}</b>`;
        //page_info1.innerHTML=`<b>${page}/${total_page}</b>`;
        //pages.innerText=`${page}/${total_page}`
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
               //
            }
            for(let i=0; i<mod_arr.length; i=i+1) {
                mod_arr[i].has_rated=false;
                mod_arr[i].comments=[];
                mod_arr[i].your_rating=0
            }
            RenderList(mod_arr);
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





