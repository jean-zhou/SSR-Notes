import styles from '../../styles/Product.module.css';
import { data } from '../api/data';
import Image from 'next/image';
import Link from 'next/link'
const Product = ({ product }) => {
  // console.log('product--', product)
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        {
          product.images.map(img => (
            <div key={img.id} className={styles.imgContatiner}>
              <Image src={img.url} width='100%' height='100%' layout='responsive' objectFit='cover' />
            </div>
          ))
        }
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const products = data;
  // console.log('products', products);
  const paths = products.map(item => {
    return {
      params: {
        name: item.name,
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name
  const product = data.filter(item => item.name === name)[0]
  return {
    props: { product }
  }
}

export default Product;