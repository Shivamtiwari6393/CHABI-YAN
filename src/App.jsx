import { Outlet } from "react-router-dom";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Suspense } from "react";
import Loading from "./Components/Loading";
function App() {
  return (
    <>
      <Header></Header>
      <Suspense fallback = {
       <Loading></Loading>
      }>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </>
  );
}
export default App;
