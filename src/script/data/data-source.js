class DataSource {
  static searchMovies(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b9948172d95de23b52b95b80a43d6e84&language=en-US&query=${keyword}&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static informationMovie() {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=b9948172d95de23b52b95b80a43d6e84`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`Movies not found`);
        }
      });
  }

  static PopularMovie() {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=b9948172d95de23b52b95b80a43d6e84`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`Movies not found`);
        }
      });
  }
}

export default DataSource;
