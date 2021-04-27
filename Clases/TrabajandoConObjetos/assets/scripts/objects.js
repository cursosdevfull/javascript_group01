const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const titleInput = document.getElementById('title');
const extraNameInput = document.getElementById('extra-name');
const extraValueInput = document.getElementById('extra-value');
const filterInput = document.getElementById('filter-title');
const movieList = document.getElementById('movie-list');

const movies = [];

const renderMovies = (filter = '') => {
  if (movies.length) {
    movieList.classList.add('visible');
  } else {
    movieList.classList.remove('visible');
  }

  movieList.innerHTML = '';

  const filteredMovies = !filter.trim()
    ? movies
    : movies.filter((movie) =>
        movie.info.title.toUpperCase().includes(filter.toUpperCase())
      );

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie; // {info: {...}, id: ...}
    // const { title: movieTitle } = info; // {title, [extraName]}
    // let text = movieTitle + ' - ';
    let { getFormattedTitle } = movie;
    /*    getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle() + ' - '; */
    // let text = getFormattedTitle.apply(movie) + ' - ';
    let text = getFormattedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text += `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text; // movie.info.title;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = titleInput.value;
  const extraName = extraNameInput.value;
  const extraValue = extraValueInput.value;

  if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }

        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = filterInput.value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
