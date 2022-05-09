import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {Simulate} from "react-dom/test-utils";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setError: React.Dispatch<React.SetStateAction<string>>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setNameCallback(e.currentTarget.value)
    const keyPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error) setError('')
        if (e.key === "Enter") addUser()
    }

    return (
        <div>
            <input value={name}
                   onChange={changeHandler}
                   className={error ? inputClass : ''}
                   onKeyPress={keyPressEnterHandler}
            />
            <button onClick={addUser} disabled={!!error}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
