import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <TouchableOpacity onPress={() => navigate("Test", {})}>
          <Text>Go to Search</Text>
        </TouchableOpacity>
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
