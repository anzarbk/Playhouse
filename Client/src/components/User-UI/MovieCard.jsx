import React, { useState, useEffect } from 'react';
import { getImagePath, tmdbAllMovies } from '../../utils/tmdb';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = () => {
  const [movie, setMovie] = useState([]);
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
    <div className="flex flex-wrap gap-4 w-full justify-center">
      {movie.map((mov, index) => (
        <Card index={index} key={mov.id} sx={{ maxWidth: 200, height: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="270"
              onClick={() => {
                selectMovie(mov.id);
              }}
              image={getImagePath(mov.poster_path)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Image not found
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default MovieCard;
