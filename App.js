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
        <View style={styles.header}>
          <Text style={styles.title}>Snap App</Text>
        </View>
      </View>
    );
  }

}

// 4. Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 80,
    padding: 24
  },

  title: {
    color: 'white',
    fontSize: 30
  }
});
