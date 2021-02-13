import React from 'react'
import {TestScren} from './src/screens/TestScreen'
import {Provider} from 'react-redux'

import {store} from './src/redux'


export default function App(){
  return (
    <Provider store={store}>
      <TestScren />
    </Provider>
  )
}


