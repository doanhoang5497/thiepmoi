import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Story from './components/Story';
import Marriage from './components/Marriage';
import Memories from './components/Memories';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [height, setHeight] = useState(window.innerHeight);
  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <div className="App">
      <Header h={height} w={width} />
      <Story h={height} w={width} />
      <Marriage h={height} w={width} />
      <Memories h={height} w={width} />
    </div>
  );
}

export default App;
