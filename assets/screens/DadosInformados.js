import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DadosInformados({ route }) {
  const { dados } = route.params;

  const formatarEscolaridade = (escolaridade) => {
    const escolaridades = {
      fundamental: 'Ensino Fundamental',
      medio: 'Ensino Médio',
      superior: 'Ensino Superior',
      pos: 'Pós-graduação',
    };
    return escolaridades[escolaridade] || escolaridade;
  };

  const formatarSexo = (sexo) => {
    const sexos = {
      masculino: 'Masculino',
      feminino: 'Feminino',
      outro: 'Outro',
    };
    return sexos[sexo] || sexo;
  };

  const DadoExibicao = ({ label, valor }) => (
    <View style={styles.dadoContainer}>
      <Text style={styles.dadoLabel}>{label}</Text>
      <Text style={styles.dadoValor}>{valor}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Ionicons 
              name="arrow-back" 
              size={24} 
              color="#333" 
              style={styles.backIcon} 
            />
            <Text style={styles.title}>Dados Informados</Text>
          </View>
          
          <DadoExibicao label="Nome:" valor={dados.nome} />
          
          <DadoExibicao label="Idade:" valor={`${dados.idade} anos`} />
          
          <DadoExibicao label="Sexo:" valor={formatarSexo(dados.sexo)} />
          
          <DadoExibicao 
            label="Escolaridade:" 
            valor={formatarEscolaridade(dados.escolaridade)} 
          />
          
          <DadoExibicao label="Limite:" valor={`R$ ${dados.limite},00`} />
          
          <DadoExibicao 
            label="Brasileiro:" 
            valor={dados.brasileiro ? 'Sim' : 'Não'} 
          />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    flex: 1,
  },
  dadoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  dadoLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  dadoValor: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '600',
    flex: 2,
    textAlign: 'right',
  },
});