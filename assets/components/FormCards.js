import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FormCard({ title, children, showBackIcon = false }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {showBackIcon && (
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color="#333" 
            style={styles.backIcon} 
          />
        )}
        <Text style={[styles.title, showBackIcon && styles.titleWithIcon]}>
          {title}
        </Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
    flex: 1,
  },
  titleWithIcon: {
    textAlign: 'left',
    flex: 1,
  },
  content: {
    gap: 15,
  },
});