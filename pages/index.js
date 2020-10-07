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

  //Q: store in index/main file? SIMON SAYS: NO, index is a component
  //initialize it outside of the react component
  //Redux is state management independent of react
  //useRef if you wanna store it on a component (property on a class)
  //poke head into molly repo/tech test for how it's done


  //Q: when to use combineReducer? - if you have one reducer you won't need
  //redux store is an obj (items, characters) ~ seperate reducers/different state/types of info
  
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
