import './App.css';
import React from 'react';
import Square from './square.jsx'
import {useState} from 'react';
function App() {
  const [board,setBoard]=useState(['','','','','','','','','']);
  const [player,setPlayer]=useState('X');
  const chooseSquare=(square)=>{
    setBoard(board.map((val,idx)=>{if(idx===square && val===''){return player;} return val;}));
    if(player==='X'){
      setPlayer('O');
    }
    else
    {
      setPlayer('X');
    }
  }
  return (
    <div className='App'>
      <div className='board'>
        <div className='box'>
            <Square val={board[0]} chooseSquare={()=>{chooseSquare(0);}}></Square>
            <Square val={board[1]} chooseSquare={()=>{chooseSquare(1);}}></Square>
            <Square val={board[2]} chooseSquare={()=>{chooseSquare(2);}}></Square>
        </div>
        <div className='box'>
            <Square val={board[3]} chooseSquare={()=>{chooseSquare(3);}}></Square>
            <Square val={board[4]} chooseSquare={()=>{chooseSquare(4);}}></Square>
            <Square val={board[5]} chooseSquare={()=>{chooseSquare(5);}}></Square>
        </div>
        <div className='box'>
            <Square val={board[6]} chooseSquare={()=>{chooseSquare(6);}}></Square>
            <Square val={board[7]} chooseSquare={()=>{chooseSquare(7);}}></Square>
            <Square val={board[8]} chooseSquare={()=>{chooseSquare(8);}}></Square>
        </div>

      </div>
    </div>
  );
}
export default App;
