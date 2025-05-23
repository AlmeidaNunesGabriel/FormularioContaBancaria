import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

export default function AberturaConta({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(100);
  const [brasileiro, setBrasileiro] = useState(false);

  const validarFormulario = () => {
    if (!nome.trim()) {
      Alert.alert('Erro', 'Por favor, informe o nome');
      return false;
    }
    if (!idade.trim() || isNaN(idade) || parseInt(idade) < 18) {
      Alert.alert('Erro', 'Por favor, informe uma idade válida (maior que 18 anos)');
      return false;
    }
    if (!sexo) {
      Alert.alert('Erro', 'Por favor, selecione o sexo');
      return false;
    }
    if (!escolaridade) {
      Alert.alert('Erro', 'Por favor, selecione a escolaridade');
      return false;
    }
    return true;
  };

  const handleContinuar = () => {
    if (validarFormulario()) {
      const dadosFormulario = {
        nome,
        idade: parseInt(idade),
        sexo,
        escolaridade,
        limite,
        brasileiro,
      };

      navigation.navigate('DadosInformados', { dados: dadosFormulario });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Abertura de Conta</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome completo"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
              style={styles.input}
              value={idade}
              onChangeText={setIdade}
              placeholder="Digite sua idade"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Sexo:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={sexo}
                style={styles.picker}
                onValueChange={setSexo}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Escolaridade:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={escolaridade}
                style={styles.picker}
                onValueChange={setEscolaridade}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Fundamental" value="fundamental" />
                <Picker.Item label="Médio" value="medio" />
                <Picker.Item label="Superior" value="superior" />
                <Picker.Item label="Pós-graduação" value="pos" />
              </Picker>
            </View>
          </View>

          <View style={styles.sliderContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Limite:</Text>
              <Text style={styles.valorLimite}>R$ {limite},00</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={100}
              maximumValue={1000}
              value={limite}
              onValueChange={setLimite}
              step={50}
              minimumTrackTintColor="#3498db"
              maximumTrackTintColor="#ddd"
            />
            <View style={styles.limites}>
              <Text style={styles.limiteTexto}>R$ 100</Text>
              <Text style={styles.limiteTexto}>R$ 1000</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.checkboxContainer} 
            onPress={() => setBrasileiro(!brasileiro)}
          >
            <View style={[styles.checkbox, brasileiro && styles.checkboxChecked]}>
              {brasileiro && (
                <Ionicons name="checkmark" size={16} color="white" />
              )}
            </View>
            <Text style={styles.checkboxLabel}>Brasileiro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleContinuar}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
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
  sliderContainer: {
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  valorLimite: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkboxChecked: {
    backgroundColor: '#27ae60',
    borderColor: '#27ae60',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});