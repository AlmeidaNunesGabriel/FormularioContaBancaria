import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderComponent({ 
  label, 
  valor, 
  onValorChange, 
  valorMinimo, 
  valorMaximo 
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.valor}>R$ {valor},00</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={valorMinimo}
        maximumValue={valorMaximo}
        value={valor}
        onValueChange={onValorChange}
        step={50}
        minimumTrackTintColor="#3498db"
        maximumTrackTintColor="#ddd"
        thumbStyle={styles.thumb}
      />
      <View style={styles.limites}>
        <Text style={styles.limiteTexto}>R$ {valorMinimo}</Text>
        <Text style={styles.limiteTexto}>R$ {valorMaximo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  valor: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  thumb: {
    backgroundColor: '#3498db',
  },
  limites: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  limiteTexto: {
    fontSize: 12,
    color: '#666',
  },
});