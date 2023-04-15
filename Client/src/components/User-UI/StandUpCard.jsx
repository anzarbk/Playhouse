import React, { useState, useEffect } from 'react';
import AuthModal3 from '../../pages/User/AuthModal3';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const standup = [
  {
    std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00352527-avuqcmqsbk-portrait.jpg',
    details: '1st Cross Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Bengaluru, Karnataka 560095, India',
  },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343864-gcbppscbax-portrait.jpg', details: '1st Floor, 2212, 80 Feet Road, Above FLAX, HAL 3rd Stage, Indiranagar, Bengaluru, Karnataka 560008, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyMCBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00305837-ylrkkcthse-portrait.jpg', details: 'H.K. College, Vishalpur, Ellisbridge, Ahmedabad, Gujarat 380006, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323514-uqsmalfdem-portrait.jpg', details: '1st Cross Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Bengaluru, Karnataka 560095, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350549-rdygcmlbhg-portrait.jpg', details: 'H.K. College, Vishalpur, Ellisbridge, Ahmedabad, Gujarat 380006, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyMCBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312493-cuafvjlbkb-portrait.jpg', details: '1st Floor, 2212, 80 Feet Road, Above FLAX, HAL 3rd Stage, Indiranagar, Bengaluru, Karnataka 560008, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00349691-tkavcmycyw-portrait.jpg', details: '1st Cross Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Bengaluru, Karnataka 560095, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313985-ltxfupbgsv-portrait.jpg', details: 'H.K. College, Vishalpur, Ellisbridge, Ahmedabad, Gujarat 380006, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyMCBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00328943-mffczgmlbb-portrait.jpg', details: '1st Floor, 2212, 80 Feet Road, Above FLAX, HAL 3rd Stage, Indiranagar, Bengaluru, Karnataka 560008, India' },
];

const StandUpCard = () => {
  //   const [movie, setMovie] = useState([]);
  useEffect(() => {
    // async function getMovies() {
    //   //   const movies = await tmdbMovies(API);
    //   //   console.log(movies.data.results);
    //   //   setMovie(movies.data.results);
    // }
    // getMovies();
  }, []);
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      {standup.map((mov, index) => (
        <Card index={index} sx={{ maxWidth: 200, height: 300 }}>
          {/* <CardActionArea>
            <CardMedia component="img" height="270" image={mov.std} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea> */}
          <AuthModal3 mov={mov} index={index} key={index} />
        </Card>
      ))}
    </div>
  );
};

export default StandUpCard;
