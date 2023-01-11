import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>

      <div className="App-main">
        <Main />

      </div>

      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
