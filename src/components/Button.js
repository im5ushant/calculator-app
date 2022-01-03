import React from 'react'

const basicStyling = {
    padding: '20px 10px',
    backgroundColor: '#fff',
    border: '1px solid #bbbbbb',
    fontSize: '24px',
    borderRadius: '5px',
    width: '25%',
}

const Button = (props) => {

    const customStyling = {...props.styling}
    const styling = {...basicStyling, ...customStyling}

    return (
        <button style={styling} onClick={() => props.valueClick(props.value)}>
            {props.value}
        </button>
    )
}

export default Button
