import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../component/Intro'
import Services from '../component/services'
import {data} from './api/data'

export default function Home({ services}) {
  // console.log('services home page', services)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Intro />
      <Services services={services}/>
    </div>
  )
}

export const getStaticProps = () => {
  const services = data
  // console.log('services', services);
  return {
    props: {
      services,
    }
  }
}
