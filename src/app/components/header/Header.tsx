import Link from 'next/link'
import React from 'react'
import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
        <Link href={'/'} className={styles.headerItem} >Home</Link>
        <Link href={'/users'} className={styles.headerItem} >Users</Link>
    </div>
  )
}
