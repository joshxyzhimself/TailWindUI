import React from 'react';
import './assets/index.css'
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Feature from './Components/Feature';
import CTA from './Components/Cta';
import FAQ from './Components/FAQ';
import NewsLetter from './Components/Newsletter'
import Stats from './Components/Stats'
import Testimonial from './Components/Testimonial'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Content from './Components/Content';
import Logocloud from './Components/Logocloud';
import Team from './Components/Team';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="flex justify-center">
       <div>
         <Hero />
         <Cards />
         <Feature/>
         <CTA/>
         <FAQ/>
         <NewsLetter/>
         <Stats/>
         <Testimonial/>
         <Blog/>
         <Content/>
         <Contact/>
         <Logocloud/>
         <Team/>
         <Footer/>
       </div>
    </div>
  );
}

export default App;
