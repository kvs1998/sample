import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '200px',
    height: '200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = ({squares, onClick}) => (
    <div style={style}>
        {/*This is called Prop Drilling in react(Not good)*/}
        <Square value="1" onCLick={() => onClick("dummy")}></Square>
        <Square value="2" onCLick={() => onClick("dummy")}></Square>
        <Square value="3" onCLick={() => onClick("dummy")}></Square>
        <Square value="4" onCLick={() => onClick("dummy")}></Square>
        <Square value="5" onCLick={() => onClick("dummy")}></Square>
        <Square value="6" onCLick={() => onClick("dummy")}></Square>
        <Square value="7" onCLick={() => onClick("dummy")}></Square>
        <Square value="8" onCLick={() => onClick("dummy")}></Square>
        <Square value="9" onCLick={() => onClick("dummy")}></Square>
    </div>
)

export default Board 