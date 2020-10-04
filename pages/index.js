import Head from 'next/head'
import styles from '../styles/Home.module.css'

function *loopSaying(){
  yield 'hello'
  yield 'goodbye'
}

const loopGenerator = loopSaying()

console.log(loopGenerator.next().value);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>??????????????????????</h1>
        <p>{loopGenerator.next().value}</p>
      </main>
    </div>
  )
}
