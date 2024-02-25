import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Partner from './Components/Partner';
import Photochanger from './Components/Photochanger';
const photos = ['1.jpg', '2.jpg', '3.jpg'];
function App() {
  return (
    <>
      <Header></Header>
      <Photochanger photos={photos}></Photochanger>
      <About></About>
      <Partner></Partner>
      <Footer></Footer>
    </>
  );
}
export default App;
