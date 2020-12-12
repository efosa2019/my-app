import React from 'react';
import { useGameState } from './components/GameState';
import { Log } from './components/Log';
import { Board } from './components/Board';
import { Row, Column } from './components/Layout';

function App() {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();
  return (
    <div>
          <Row gap={20}>
      <Column gap={20}>
        <div>{
          winner
            ? `Congrats!! Player ${winner} You Won`
            : `Next Player is ${xIsNext ? 'X' : 'O'}`
        }</div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo}/>
    </Row>
      
    </div>
  );
}

export default App;
