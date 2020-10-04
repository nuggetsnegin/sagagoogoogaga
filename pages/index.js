import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import pet from '../reducers/pet'
import Canvas from '../components/Canvas'

export default function Home() {

  const store = createStore(combineReducers({ pet }))
  
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Pet Cat</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>Pet Cat</h1>
          <Canvas/>
        </main>
      </div>
    </Provider>
  )
}
