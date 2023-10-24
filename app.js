let apiKey="http://www.omdbapi.com/?i=tt3896198&apikey=4554e702&t="
let loadingsts=false;

let content=document.getElementById('content');
let notfound=document.getElementById('notfound');
content.classList.add('hide')
notfound.classList.add('hide')
function load(){
    let wel=document.getElementById('welc');
    wel.style.display='none';
    let ld=document.getElementById('ld')
    if(loadingsts==true){
        ld.classList.add('loader')
    }
    else{
        ld.classList.remove('loader')
    }
}
function disply(data){
    let img=document.getElementById('imag')
    img.src=data.Poster
    let nam=document.getElementById('til')
    nam.innerText=data.Title
    let actor=document.getElementById('actor')
    let awad=document.getElementById('awad')
    let bo=document.getElementById('bo')
    let con=document.getElementById('con')
    let release=document.getElementById('release')
    let website=document.getElementById('website')
    let type=document.getElementById('type')
    let writers=document.getElementById('writers')
    let dir=document.getElementById('dir')
    let Plot=document.getElementById('Plot')
    actor.innerText=data.Actors
    awad.innerText=data.Awards
    bo.innerText=data.BoxOffice
    con.innerText=data.Country
    release.innerText=data.Released
    website.innerText=data.Response
    type.innerText=data.Type
    writers.innerText=data.Writer
    dir.innerText=data.Director
    Plot.innerText=data.Plot
    let imdb=document.getElementById('indb')
    let gen=document.getElementById('Genre')
    let tim=document.getElementById('time')
    imdb.innerText=data.Released
    gen.innerText=data.Genre
    tim.innerText=data.Runtime
    let lik=document.getElementById('lik');
    lik.innerText=data.imdbVotes;
}
function togetdetails(){
    loadingsts=true;
    load();
    let mvn=document.getElementById('inpp');
    let apiget=apiKey+mvn.value

fetch(apiget).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
   if(data.Error !="Movie not found!"){
    loadingsts=false;
    load();
    disply(data);
    content.classList.remove('hide')
    notfound.classList.add('hide')
   }
   else{
    loadingsts=false;
    load();
    content.classList.add('hide')
    notfound.classList.remove('hide')
   }
})
}





