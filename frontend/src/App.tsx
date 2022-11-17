import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import './styles/style.css';
function App() {

  return (
    <>
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
