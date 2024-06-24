import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Suspense } from 'react';
function App() {
  return (
    <>
      <Header></Header>
      <Suspense><Outlet></Outlet></Suspense>
      <Footer></Footer>

    </>
  );
}
export default App;
