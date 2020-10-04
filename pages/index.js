import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat clicker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Cat Clicker</h1>
        <Canvas/>
      </main>
    </div>
  )
}
