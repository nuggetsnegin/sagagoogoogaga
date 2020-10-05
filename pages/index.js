import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
// import mySaga from '../sagas/saga'
import pet from '../reducers/pet'
import Canvas from '../components/Canvas'

export default function Home() {

  // const sagaMiddleware = createSagaMiddleware()
  //const store = createStore(combineReducers(pet, applyMiddleware(sagaMiddleware)))
  const store = createStore(combineReducers({pet}))

  // sagaMiddleware.run(mySaga)
  
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
