import React, { useState, useEffect } from 'react';
import AuthModal3 from '../../pages/User/AuthModal3';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const music = [
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00353410-azqjnmzexa-portrait.jpg', details: 'Jadenahalli, Mysore Road, Bengaluru, Karnataka 562109, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354893-adsgdztzzy-portrait.jpg', details: 'Bhartiya City, Thanisandra Main Road, Kannuru, Kannuru, Bengaluru, Karnataka 560064, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354624-pwqxqmeaup-portrait.jpg', details: '3rd floor, 8, 20th Main Road, KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560093, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00353491-ucftlxeqsa-portrait.jpg', details: 'Jadenahalli, Mysore Road, Bengaluru, Karnataka 562109, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00352202-qtzwsgrrtf-portrait.jpg', details: 'Bhartiya City, Thanisandra Main Road, Kannuru, Kannuru, Bengaluru, Karnataka 560064, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00352841-bbhfrrsnue-portrait.jpg', details: '3rd floor, 8, 20th Main Road, KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560093, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00118738-dguyptxtes-portrait.jpg', details: 'Jadenahalli, Mysore Road, Bengaluru, Karnataka 562109, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00345335-pbxztcejga-portrait.jpg', details: 'Bhartiya City, Thanisandra Main Road, Kannuru, Kannuru, Bengaluru, Karnataka 560064, India' },
  { std: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351772-fvcvmeeebr-portrait.jpg', details: '3rd floor, 8, 20th Main Road, KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560093, India' },
];

const MusicConcertCard = () => {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      {music.map((mov, index) => (
        <AuthModal3 mov={mov} index={index} key={index} />
      ))}
    </div>
  );
};

export default MusicConcertCard;
