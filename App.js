// 1. Dependencies

import React from 'react';

import {
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';

import Camera from 'react-native-snap-camera';
import SnapText from 'react-native-snap-text';
import SnapEmoji from 'react-native-snap-emoji';

// 2. React Component
export default class App extends React.Component {

  // Component state
  state = {
    showTextInput: false,
    showEmojiPicker: false
  }

  // Toggle between showing and hiding text input
  toggleTextInput() {
    this.setState({ showTextInput: !this.state.showTextInput });
  }

  // Toggle between showing and hiding emoji picker
  toggleEmojiPicker() {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  }

  // 3. View expressed as JSX
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Snap App</Text>
          <View style={styles.buttons}>
            <Text style={styles.button} onPress={this.toggleTextInput.bind(this)}>
              T
            </Text>
            <Text style={styles.button} onPress={this.toggleEmojiPicker.bind(this)}>
              😀
            </Text>
          </View>
        </View>
        <SnapEmoji isVisible={this.state.showEmojiPicker}>
          <SnapText isVisible={this.state.showTextInput}>
            <Camera type="simulate" />
          </SnapText>
        </SnapEmoji>
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
    justifyContent: 'space-between',
    height: 80,
    padding: 24
  },

  title: {
    color: 'white',
    fontSize: 30
  },

  buttons: {
    flexDirection: 'row'
  },

  button: {
    fontSize: 35,
    color: 'white',
    padding: 10
  }

});
