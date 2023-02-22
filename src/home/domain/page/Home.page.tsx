import React from 'react';
import Header from '../../../shared/components/Header';
import Footer from '../../../shared/components/Footer';
import Banner from '../components/Banner';
import Gallery from '../../../gallery/domain/components/Gallery';
import LayoutBlack from '../../../shared/components/LayoutBlack';

const Home: React.FC = () => {
  return (
    <LayoutBlack
      childComponent={
        <div className="flex flex-col items-center">
          <Header></Header>
          <main className="h-full flex flex-col justify-center">
            <Gallery></Gallery>
            <Banner></Banner>
          </main>
          <Footer></Footer>
        </div>
      }
    ></LayoutBlack>
  );
};

export default Home;
