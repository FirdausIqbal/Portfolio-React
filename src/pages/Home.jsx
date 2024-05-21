import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
};

const Home = () => {
  useScrollToHash()
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
    </div>
  )
}

export default Home
