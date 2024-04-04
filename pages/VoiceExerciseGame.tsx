import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const VoiceExerciseGame = () => {
  const webViewRef = useRef(null);

  const handleSpacePress = () => {
    webViewRef.current.injectJavaScript(
      "document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 32 }));",
    );
  };

  const gameUrls = [
    'https://machinescreen.itch.io/getmeoutofhere',
    'https://playground.babylonjs.com/#11BXS0#72',
  ];

  // Function to select a random URL from the array
  const getRandomUrl = () => {
    const randomIndex = Math.floor(Math.random() * gameUrls.length);
    return gameUrls[randomIndex];
  };

  // Selected game URL
  const gameUrl = getRandomUrl();

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{uri: gameUrl}}
        style={styles.webView}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
      />
      <Button title="Space" onPress={handleSpacePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default VoiceExerciseGame;
