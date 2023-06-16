/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import api from './src/services/api';

import PokemonCard from './src/components/PokemonCard';

function App() {
  const url = 'pokemon?limit=100000&offset=0';

  const [pokemons, setPokemons] = useState([]);
  const [load, setLoad] = useState(true);

  console.log(pokemons);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get(url);
      const data = await response.data;
      setPokemons(data.results);
      setLoad(false);
    }

    loadPokemons();
  }, []);

  if (load) {
    return (
      <View>
        <Text>Load</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={({item}) => <PokemonCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
