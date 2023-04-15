import React, { useState } from 'react';
import Youtube from 'react-youtube';
import Navbar from '../../components/User-UI/Navbar';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getImagePath, tmdbMovieById, tmdbMovieTrailerById } from '../../utils/tmdb';
import Footer from '../../components/User-UI/Footer';

const SelectedMovie = () => {
  const [genre, setGenre] = useState([]);
  const [lang, setLang] = useState([]);
  const [movie, setMovie] = useState([]);
  // const [videos, setVideos] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const [query] = useSearchParams();

  // const playTrailer = () => {
  //   const trailer = videos.results.find((el) => el.name === 'Official Trailer');

  //   return <Youtube videoId={el.key} className="w-72 border-4 rounded-sm" />;
  // };

  useEffect(() => {
    async function getMovie() {
      const id = query.get('id');
      const { data } = await tmdbMovieTrailerById(id);
      console.log(data);
      setGenre(data.genres);
      setLang(data.spoken_languages);
      setMovie(data);
      // setVideos(data.videos.results);
      // console.log(data.videos.results);
      // console.log(videos);
      const trailer = data.videos.results.find((el) => el.name === 'Official Trailer');
      console.log(trailer);
      setTrailer(trailer);
    }
    getMovie();
  }, []);
  console.log(genre);
  return (
    <div>
      <Navbar />
      {movie && (
        <div className={`flex  h-[450px] justify-center mt-10`}>
          <img src={getImagePath(movie?.backdrop_path)} className="relative w-full  object-cover" />
          <div className="absolute flex  border-white-400 border-4 m-8 w-fit">
            <img id="movie-image" src={getImagePath(movie?.poster_path)} alt="" className="h-96 w-fit" />
            <div className="max-w-xs h-96  flex flex-col justify-between bg-white dark:bg-gray-800  py-2 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{movie?.original_title}</h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{movie?.overview}</p>
              </div>
              <div>
                <div className="grid gap-2 mt-2  text-gray-800">
                  <p className="text-sm dark:text-gray-100">Released - {movie?.release_date}</p>

                  <p className="text-sm dark:text-gray-100">Genre -{genre.map((el) => el.name) + `,`}</p>

                  <p className="text-sm dark:text-gray-100">Language - {lang.map((el) => el.english_name) + `,`}</p>

                  <p className="text-sm dark:text-gray-100">Rating - {movie?.vote_average}%</p>
                </div>
              </div>
            </div>
            {trailer ? (
              <div className="flex justify-center w-full">
                {/* {trailer ? playTrailer() : null} */}
                <Youtube
                  videoId={trailer.key}
                  className="w-full"
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
      <div className="bg-black flex justify-center px-4 py-3 text-right sm:px-6">
        <button type="submit" className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Book your tickets now !
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SelectedMovie;
