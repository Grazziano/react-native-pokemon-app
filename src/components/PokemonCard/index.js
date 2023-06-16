import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function PokemonCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.name}</Text>
      <Text style={styles.text}>{props.data.url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});
