import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import './styles/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <section id="sales-container">
        <div className="dsmeta-container">
          <SalesCard />
        </div>
      </section>
    </>

  )
}

export default App
