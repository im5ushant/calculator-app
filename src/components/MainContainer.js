import React, {useState} from 'react'
import ButtonContainer from './ButtonsContainer'
import TextField from './TextField'

const styling = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column'
}

const MainContainer= () => {

    const [currentValue, setCurrentValue] = useState('');

    const valueHandler = num => setCurrentValue(prev => prev + num)

    const valueSetHandler = res => setCurrentValue(res)
    

    return (
        <div style={styling}>
            <TextField value={currentValue} />
            <ButtonContainer value={currentValue} valueChange={valueHandler} valueSet={valueSetHandler}/>
        </div>
    )
}

export default MainContainer
