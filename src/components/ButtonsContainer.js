import React from 'react'
import Button from './Button'

const characters = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '+', '0']

const styling = {
    backgroundColor: '#fff',
    margin: '10px 0',
    display: 'flex',
    flexWrap: 'wrap',
}

const ButtonContainer = (props) => {

    const onClickHandler = num => {
        props.valueChange(num)
    };

    const onEqualHandler = (num) => {
        let result = eval(props.value)
        props.valueSet(result)
    }

    const numberRender = characters.map((char) => {
            if(isNaN(char)){
                return <Button key={char} value={char} styling={{backgroundColor: '#ffcc00'}} valueClick={onClickHandler} />
            } else {
                return <Button key={char} value={char} valueClick={onClickHandler} />
            }
        }
    )

    return (
        <div style={styling}>
            
            {numberRender}
            <Button value='=' styling={{backgroundColor: '#ffcc00', width: '50%'}} valueClick={onEqualHandler} />
            <Button value='-' styling={{backgroundColor: '#ffcc00'}} valueClick={onClickHandler} />
        </div>
    )
}

export default ButtonContainer
