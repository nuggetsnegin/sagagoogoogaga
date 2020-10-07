import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootSaga from '../sagas/saga'
import reducer from '../reducers/reducers'
import Canvas from '../components/Canvas'

export default function Home() {

  const sagaMiddleware = createSagaMiddleware()

  //Q: store in index/main file?
  //Q: when to use combineReducer?
  
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)
  
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Tamacatchi</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Canvas/>
        </main>
      </div>
    </Provider>
  )
}
