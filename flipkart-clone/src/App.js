import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Category from './components/category/category';
import ImageSlider from './components/image-slider/imageSlider';


function App() {
  return (
    <div className="App">
     <Header/>
     <Category/>
     <ImageSlider/>
    </div>
  );
}


export default App;
