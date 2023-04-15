import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { getImagePath, tmdbAllMovies } from '../../utils/tmdb';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState();
  // const [movieSelect, setMovieSelect] = useState('');

  const navigate = useNavigate();
  const selectMovie = (id) => {
    // setMovieSelect(id);
    navigate(`/movies/selected?id=${id}`);
  };
  useEffect(() => {
    async function getMovies() {
      const movies = await tmdbAllMovies(1);
      console.log(movies.data.results);
      setMovie(movies.data.results);
    }
    getMovies();
  }, []);
  return (
    <div className="container mx-auto">
      <p className="text-2xl text-center font-extrabold">MOVIES IN THEATRE'S</p>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div id="slider" className="h-full flex gap-2 items-center justify-start transition ease-out duration-700">
                  {movie.map((mov, index) => (
                    <Slide index={index} key={mov?.id}>
                      <div className="flex relative w-fit ">
                        <img
                          src={getImagePath(mov.poster_path)}
                          alt="sitting area"
                          className="object-cover object-center  w-[11.3rem] xl:w-[18.2rem] cursor-pointer"
                          onClick={() => {
                            selectMovie(mov.id);
                          }}
                        />
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Movies;
