import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const addZero = (num: number) => {
        return num < 10 ? `0${num}` : num
    }

    const stringTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}` // fix with date
    const stringDate = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${addZero(date.getFullYear())}` // fix with date


    return (
        <div>
            <span
                className={timerId === 0 ? styles.showClock : ""}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {stringTime}
            </span>


            <div className={show ? "" : styles.showDate}>
                {stringDate}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
