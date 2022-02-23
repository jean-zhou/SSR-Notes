import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a href='/contact'>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src='/img/link.png' width='40' height='40' />
          </a>
        </h1>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          45 ADAM STREET,
          <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV
          <br /> 111_438_5244
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer;