import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FormCard from '../components/FormCard';
import DadoExibicao from '../components/DadoExibicao';
import { formatarEscolaridade, formatarSexo } from '../utils/formatters';

export default function DadosInformados({ route }) {
  const { dados } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FormCard title="Dados Informados" showBackIcon>
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
        </FormCard>
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
});