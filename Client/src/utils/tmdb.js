import axios from 'axios';

export const tmdbAllMovies = async (page) => {
  try {
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMBD_KEY}&language=en-US&page=${page}&region=IN`);
    if (movies) return movies;
    throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};

export const tmdbMovieById = async (id) => {
  try {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMBD_KEY}&language=en-US`);
    if (movie) return movie;
    throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};
export const tmdbMovieTrailerById = async (id) => {
  try {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMBD_KEY}&language=en-US&append_to_response=videos,images   `);
    if (movie) return movie;
    throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};

export const getImagePath = (path) => `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;
