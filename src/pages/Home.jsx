import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Project from '../components/Project'
import Footer from '../components/Footer'

const useScrollToHash = () => {
  const { hash } = useLocation();
  const [idHash, setIdHash] = useState();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIdHash(hash);
      } 
    }
  }, [hash]);

  useEffect(() => {
    if(idHash && hash){
      const element = document.getElementById(idHash.substring(1));
      if(element){
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
      }
    }
  })
};

const Home = () => {
  useScrollToHash()
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Project />
      <Footer />
    </div>
  )
}

export default Home
