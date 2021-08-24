import React from 'react';

// const props = {
//     onClick: () => "function",
//     value: ""
// };

// const {value} =props

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '860',
    cursor: 'pointer',
    outline: 'none',
}

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square 