import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Screen',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
