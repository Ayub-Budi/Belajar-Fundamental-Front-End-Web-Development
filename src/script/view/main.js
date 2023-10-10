import "../component/movies-list";
import "../component/app-tentang";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("app-tentang");
  const moviesListElement = document.querySelector("movies-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovies(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const infoMovie = async () => {
    try {
      const result = await DataSource.informationMovie();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    moviesListElement.movies = results;
  };

  const fallbackResult = (message) => {
    moviesListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
  infoMovie();
};

export default main;
