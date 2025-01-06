import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Category from './components/category/category';
import ImageSlider from './components/image-slider/imageSlider';
import Electronics from './components/electronics/electronics';
import OtherCategories from './components/other-categories/otherCategories';
import Banner from './components/banner/banner';


function App() {
  return (
    <div className="App">
     <Header/>
     <Category/>
     <ImageSlider/>
     <Electronics/>
     <OtherCategories/>
     <Banner/>
    </div>
  );
}


export default App;
