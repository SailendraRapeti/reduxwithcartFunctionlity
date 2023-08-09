import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './src/components/Home'
import { Provider } from 'react-redux'
import Store from "./src/components/redux/Store"
import Navigations from './src/components/Navigations'

export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigations />
      </Provider>
    )
  }
}

export default App