import "./App.css";
import Header from "./sections/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default App;
function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <hr />
      <Footer />
    </>
  );
}
