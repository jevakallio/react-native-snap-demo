// 1. Dependencies

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// 2. React Component
export default class App extends React.Component {

  // 3. View expressed as JSX
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

}

// 4. Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
