import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Contact from './component/Contact/Contact';
import Faq from './component/Faq/Faq';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import OurClients from './component/OurClients/OurClients';
import Productspage from './component/Productspage/Productspage';
import WhyChooseUs from './component/WhyChooseUs/WhyChooseUs';
import './input.css';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/*' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        <Route path='/whyus' element={<WhyChooseUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ourclients' element={<OurClients/>}/>
        <Route path='/products' element={<Productspage/>}/>
        <Route path='/products/:category' element={<Productspage/>}/>


        
      </Routes>
      <Footer></Footer>
      {/* <Main></Main> */}
     
    </div>
  );
}

export default App;
