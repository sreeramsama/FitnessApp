import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <AddEntry />
      </View>
    );
  }
}
