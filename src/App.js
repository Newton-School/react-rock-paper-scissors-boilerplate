import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Backdrop, Button } from '@mui/material';

const Result = ({ val }) => {
  switch (val) {
    case 0:
      return <h1 className="">Rock</h1>;
    case 1:
      return <h1 className="">Paper</h1>;
    default:
      return <h1 className="">Scissors</h1>;
  }
};

function App() {
  const [loading, setLoading] = React.useState(false);
  const [move, setMove] = React.useState(0);
  const load = () =>
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  const handleClick = () => {
    setLoading(true);
    const val = Math.floor(Math.random() * 4);
    setMove(val);
    load();
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <>
            <Result val={move} />
            <Button variant="contained" onClick={handleClick}>
              Start Game
            </Button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
