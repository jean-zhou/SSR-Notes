import styles from '../styles/Navbar.module.css';
import Link from 'next/link'
import { useState } from 'react';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleHam = () => {
    // console.log('open', open);
    setOpen(!open)
  }
  const closeMenu = () => {
    setOpen(false)
  }
  return (
    <div className={styles.container}>
      <a href='/'>Jean</a>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href='/products/design'>DESING</a>
        </li>
        <li className={styles.listItem}>
          <a href='/products/development'>DEVELOPMENT</a>
        </li>

        <li className={styles.listItem}>
          <a href='/products/production'>PRODUCTION</a>
        </li>

        <li className={styles.listItem}>
          <a href='/products/photography'>PHOTOGRAPY</a>
        </li>
        <li className={styles.listItem}>
          <a href='/contact'>CONTACT</a>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={toggleHam}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <ul onClick={closeMenu} className={styles.menu} style={{right: open? '0px': '-50vw'}}>
        <li className={styles.menuItem}>
          <Link href='/products/design'>DESING</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/products/development'>DEVELOPMENT</Link>
        </li>

        <li className={styles.menuItem}>
          <Link href='/products/production'>PRODUCTION</Link>
        </li>

        <li className={styles.menuItem}>
          <Link href='/products/photography'>PHOTOGRAPY</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar