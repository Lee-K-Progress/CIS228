import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';

export default function App() {

    return (
      <>
        <Header />
        <div>
          <h1 className='active'>Bienvenidos!</h1>
        </div>
        <Footer />
      </>
    )
  }
