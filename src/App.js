import React from 'react';
import Header from './components/Header';
import TabletList from './components/TabletList';
import Footer from './components/Footer';
import './index.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TabletList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
