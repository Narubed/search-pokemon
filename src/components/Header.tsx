
import styles from './Header.module.css'
import React from 'react'

export default function Header() {
    return (
        <div className={styles.grid}>
            <a
                href="https://github.com/Narubed/search-pokemon"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    GitHub <span>-&gt;</span>
                </h2>
                <p>Find the code storage address. </p>
            </a>

        </div>
    )
}
