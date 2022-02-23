import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href='/about'>Jean</a>

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
    </div>
  )
}
export default Navbar