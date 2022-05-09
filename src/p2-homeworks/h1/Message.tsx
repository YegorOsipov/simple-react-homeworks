import React from 'react'
import styles from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time}: MessagePropsType) {
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={avatar} alt="avatar"/>
            </div>
            <div className={styles.massage_wrapper}>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div>{message}</div>
                </div>
                <div className={styles.time}>{time}</div>
            </div>
        </div>
    )
}

export default Message
