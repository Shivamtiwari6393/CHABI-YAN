import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Impact from './Components/Impact';
import Partner from './Components/Partner';
import Photochanger from './Components/Photochanger';
const photos = ['1.jpg', '2.jpg', '3.jpg'];
const images =['five.jpeg','one.jpeg','three.jpeg','four.jpeg']
function App() {
  return (
    <>
      <Header></Header>
      <Photochanger photos={photos}></Photochanger>
      <About></About>
      <Impact  images = {images}></Impact>
      <Partner></Partner>
      <Footer></Footer>
    </>
  );
}
export default App;
