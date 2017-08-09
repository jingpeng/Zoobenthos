import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'

import MainScreen from './app/screen/main-screen'
import TestScreen from './app/screen/test-screen'

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Test: { screen: TestScreen },
}, {
  initialRouteName: 'Main'
})

class NavigationStore {
  @observable headerTitle = "Main"
  @observable.ref navigationState = {
    index: 0,
    routes: [
      { key: "Main", routeName: "Main" },
    ],
  }

  // NOTE: the second param, is to avoid stacking and reset the nav state
  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null
    return this.navigationState = AppNavigator
        .router
        .getStateForAction(action, previousNavState)
  }
}

// NOTE: the top level component must be a reactive component
@observer
class Zoobenthos extends React.Component {
  constructor(props, context) {
    super(props, context)
    // initialize the navigation store
    this.store = new NavigationStore()
  }

  render() {
    // patch over the navigation property with the new dispatch and mobx observed state
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.store.dispatch,
        state: this.store.navigationState,
      })}/>
    )
  }
}

AppRegistry.registerComponent('Zoobenthos', () => Zoobenthos)
