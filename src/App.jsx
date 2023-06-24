import Navbar from "./Pages/Shared/Navbar/Navbar";
import Main from "../src/Layout/Main"
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return <>
  <div className="max-w-[1440px] mx-auto">
      <Navbar/>
      <Main/>
      <Footer/>
  </div>

  </>;
}

export default App;
