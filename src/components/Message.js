import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Message({header}) {
  return (
    <View>
      <View style={styles.headingBox}>
        <Text style={styles.headingText}>{header}</Text>
      </View>
      <View style={styles.subhHeadingText}>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Use this Tools to start Writing your next Hit Song{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingBox: {
    padding: 10,
    backgroundColor: '#F8AE33',
  },
  headingText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subhHeadingText: {
    elevation: 5,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
