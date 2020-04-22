import React, {useState} from 'react'

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '하'},
        {id: 2, text: '이'},
        {id: 3, text: '헬'},
        {id: 4, text: '로'},
    ])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5)

    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        // concat 은 python의 append 같은 역할
        setNextId(nextId + 1)
        setNames(nextNames)
        setInputText('')
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames)
    }
    const nameList = names.map(name => {
        return (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
                {name.text}
            </li>
        )
    })
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>

    )
}

export default IterationSample