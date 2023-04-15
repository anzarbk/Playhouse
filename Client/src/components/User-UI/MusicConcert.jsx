import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import AuthModal2 from '../../pages/User/AuthModal2';
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
const MusicConcert = () => {
  return (
    <div className="container mx-auto">
      <p className="text-2xl text-center font-extrabold">MUSIC CONCERT'S</p>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden ">
              <Slider>
                <div id="slider" className="h-full flex gap-2 items-center justify-start transition ease-out duration-700">
                  {music.map((mov, index) => (
                    <AuthModal2 mov={mov} index={index} key={index} />
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

export default MusicConcert;
