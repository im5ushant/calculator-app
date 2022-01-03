import React from 'react'

const styling = {
    padding: '20px 10px',
    backgroundColor: 'white',
    border: '1px solid #bcbcbc',
    fontSize: '32px',
    fontWeight: 'bold'
}

const TextField = ({value}) => {

    return (
        <span style={styling}>{value}</span>
    )
}

export default TextField
