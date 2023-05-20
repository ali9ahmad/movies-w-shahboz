// GET ELEMENTS FROM HTML
var elMoviesList = document.querySelector(".js-movies__list");
var elMovieTemplate = document.querySelector(".js-movie__template").content;
var newMoviesFragment = document.createDocumentFragment();
// ----------------------------------------------------------------
var elMovieSearchForm = document.querySelector(".js-search-form");
var elMovieSearchInput = elMovieSearchForm.querySelector(".js-search-input");
var elMovieSearchGenres = elMovieSearchForm.querySelector(".js-search-genres");
var elMovieSearchFromYear = elMovieSearchForm.querySelector(".js-from-year");
var elMovieSearchToYear = elMovieSearchForm.querySelector(".js-to-year");
var elMovieSearchSortSelect =
    elMovieSearchForm.querySelector(".js-sort-movies");


/* console.log(elMoviesList, elMovieSearchForm, elMovieSearchInput, elMovieSearchGenres, elMovieSearchFromYear, elMovieSearchToYear, elMovieSearchSortSelect, elMovieTemplate); */


// MOVIES GENRES GENERATED FUNCTION
var genres = [];
function generateGenres() {
    movies.forEach(function (movie) {
        // console.log(movie);
        movie.Categories.split("|").forEach(function (category) {
            // console.log(category);
            if (!genres.includes(category)) {
                genres.push(category);
            }
        });
        genres.sort();
    });
}

generateGenres();

