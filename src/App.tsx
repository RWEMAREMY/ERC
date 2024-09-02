
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import MiddleOne from './components/Body/MiddleOne'
import MiddleTwo from './components/Body/MiddleTwo';
import MiddleThree from './components/Body/SubBodyOne/MiddleThree';
import MiddleFour from './components/Body/MiddleFour';
import MiddleFive from './components/Body/MiddleFive';
import MiddleSix from './components/Body/MiddleSix';
import './index.css';
function App() {

  return (
    <div className="font-sans">
    <Header />
    <MiddleOne />
    <MiddleTwo />
    <MiddleThree />
    <MiddleFour />
    <MiddleFive />
    <MiddleSix />
    <Footer />
    </div>
  )
}

export default App
