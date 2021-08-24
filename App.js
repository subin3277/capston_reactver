import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>,
    <View style={styles.onlytext}>
      <Text>오늘도 건강하세요</Text>
      <Text>출산 예정일</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlytext:{
    backgroundColor:'#fff',
    alignItems:'center'
  }
  
});
