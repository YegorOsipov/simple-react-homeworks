import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from "./Header.module.css"


function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.item}>
                    <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? styles.active : ""}>
                        PreJunior
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? styles.active : ""}>
                        Junior
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? styles.active : ""}>
                        JuniorPlus
                    </NavLink>
                </div>
                <div className={styles.menuBtn}></div>
            </div>
        </div>
    )
}

export default Header
