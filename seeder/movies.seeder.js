const Movie = require('../models/movie.model');

try{
await Movie.create({
    name:"",
    description:"",
    casts:[],
    director:"",
    trailerUrl:"",
    posterUrl:"",
    language:"",
    releaseDate:"",
    releaseStatus:""
})
}catch(error){
    console.log("You ran into an error while creating movies",error)
}
