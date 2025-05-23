import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SeletorOpcao({ label, opcoes, valorSelecionado, onSelecionar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={valorSelecionado}
          style={styles.picker}
          onValueChange={onSelecionar}
        >
          <Picker.Item label="Selecione uma opção" value="" />
          {opcoes.map((opcao) => (
            <Picker.Item 
              key={opcao.value} 
              label={opcao.label} 
              value={opcao.value} 
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
  },
});