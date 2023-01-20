import React from 'react';
import Header from '../../../shared/components/Header';
import Footer from '../../../shared/components/Footer';
import LayoutBlack from '../../../shared/components/LayoutBlack';

const Gallery: React.FC = () => {
  return (
    <LayoutBlack
      childComponent={
        <div className="flex flex-col items-center h-full">
          <Header></Header>
          <main className="h-full flex flex-col justify-center">
            <div className="">GALLERY </div>
          </main>
          <Footer></Footer>
        </div>
      }
    ></LayoutBlack>
  );
};

export default Gallery;
