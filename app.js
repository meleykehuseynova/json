fetch('https://dummyapi.online/api/movies').then((a) =>
a.json().then((b) =>{
  b.map((film)=>{
    console.log(film.movie);
  })
}
)
);

