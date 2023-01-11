import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main className="App-main">
        <Main></Main>

      </main>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
