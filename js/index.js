import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'rgba(246,248,252,1.0)',
  },
  logo: {
    width: 250,
    height: 250,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('/images/icon.png')} />
    </View>
  );
};

export default SectionListBasics;
